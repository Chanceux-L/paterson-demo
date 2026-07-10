import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';

const testsDir = dirname(fileURLToPath(import.meta.url));
const templateRoot = resolve(testsDir, '..');
const sharedRoot = resolve(templateRoot, '../shared');

function templatePath(path = '') {
  return resolve(templateRoot, path);
}

function sharedPath(path = '') {
  return resolve(sharedRoot, path);
}

test('public API article adapter reads API values without locale fallbacks', () => {
  const bundleSource = readFileSync(sharedPath('app/composables/usePublicApiBundles.ts'), 'utf8');

  assert.doesNotMatch(bundleSource, /resolveLocaleValue|LocaleMessageNode|resolveCompactLocaleMessageNode/);
  assert.match(bundleSource, /collectText\(value\)\.join\('\\n'\)\.trim\(\)/);
  assert.doesNotMatch(bundleSource, /fallbackSnapshot|defaultArticleFallbacks|ArticleFallbacks|apiFallbacks/);
  assert.doesNotMatch(bundleSource, /publicProductSortOptions|PublicApiFallbacks/);
  assert.doesNotMatch(bundleSource, /zhCN|i18n\/locales\/zh-CN/);
});

test('all footer contact link options keep the same route targets', () => {
  const zhCnSource = readFileSync(templatePath('i18n/locales/zh-CN.ts'), 'utf8');
  const expectedTargets = extractFooterContactTargets(zhCnSource);
  const localeFiles = readdirSync(templatePath('i18n/locales')).filter(file => file.endsWith('.ts'));

  for (const file of localeFiles) {
    const source = readFileSync(templatePath(`i18n/locales/${file}`), 'utf8');

    assert.deepEqual(extractFooterContactTargets(source), expectedTargets, `${file} footer contact links should match zh-CN targets`);
  }
});

test('localized product experience tags stay compact', () => {
  const localeFiles = readdirSync(templatePath('i18n/locales')).filter(file => file.endsWith('.ts'));

  for (const file of localeFiles) {
    const source = readFileSync(templatePath(`i18n/locales/${file}`), 'utf8');
    const experienceBlock = extractObjectBlockContaining(source, 'experience', 'product-water-paint-wardrobe.webp');
    const tags = Array.from(experienceBlock.matchAll(/tags:\s*\[([\s\S]*?)\]/g))
      .flatMap(match => Array.from((match[1] ?? '').matchAll(/'([^']+)'/g)).map(tagMatch => tagMatch[1] ?? ''));

    assert.equal(tags.length, 9, `${file} product experience should keep three tags per card`);

    for (const tag of tags) {
      assert.ok(tag.length <= 16, `${file} product experience tag should stay short: ${tag}`);
    }

    assert.doesNotMatch(experienceBlock, /Paterson (?:показывает|zeigt|presenta|présente)/);
    assert.doesNotMatch(experienceBlock, /Sistemas ecológicos, tecnología al agua/);
  }
});

test('localized navigation labels stay distinct and data catalog keys stay aligned', () => {
  const localeFiles = readdirSync(templatePath('i18n/locales')).filter(file => file.endsWith('.ts'));

  for (const file of localeFiles) {
    const localeSource = readFileSync(templatePath(`i18n/locales/${file}`), 'utf8');
    const locale = loadLocaleMessage(file);
    const languageLabels = Object.values(locale.languageSwitcher.languages).map(language => language.label);

    assert.ok(new Set(languageLabels).size > 1, `${file} language switcher labels should not collapse to one value`);

    for (const path of [
      'philosophyPage.sectionNav',
      'homePage.technology.metrics',
      'articlesPage.highlights'
    ]) {
      const labels = getLabelItems(locale, path).map(item => item.label);

      assert.equal(new Set(labels).size, labels.length, `${file} ${path} labels should stay distinct`);
    }

    for (const [path, labels] of extractSectionNavLabels(locale)) {
      assert.equal(new Set(labels).size, labels.length, `${file} ${path} labels should stay distinct`);
    }

    const highlightDescriptions = locale.articlesPage.highlights.map(item => item.description);

    assert.equal(new Set(highlightDescriptions).size, highlightDescriptions.length, `${file} article highlight descriptions should stay distinct`);

    const repeatedRussianSummary = 'Paterson показывает водные технологии, здоровый дом и поддержку франчайзи.';
    const repeatedRussianCount = countString(localeSource, repeatedRussianSummary);

    assert.ok(repeatedRussianCount < 10, `${file} should avoid overusing one Russian summary`);

    const serviceLines = Array.from(locale.dataPage.serviceLines.items, item => item.title);
    const catalogKeys = Array.from(Object.keys(locale.dataPage.catalog.serviceCatalogs));

    assert.deepEqual(catalogKeys, serviceLines, `${file} data catalog keys should match service line titles`);

    for (const serviceTitle of serviceLines) {
      const catalog = locale.dataPage.catalog.serviceCatalogs[serviceTitle];

      assert.ok(catalog, `${file} ${serviceTitle} should have a catalog`);
      assert.ok(catalog.items.length > 0, `${file} ${serviceTitle} should keep catalog items`);
      for (const item of catalog.items) {
        assert.equal(item.category, serviceTitle, `${file} catalog item category should match ${serviceTitle}`);
      }
    }
  }
});

function extractFooterContactTargets(source: string) {
  const columnMatches = Array.from(source.matchAll(/title: '[^']+',\s*links:\s*\[([\s\S]*?)\]\s*\}/g));
  const match = columnMatches.find((match) => {
    const columnSource = match[1] ?? '';

    return columnSource.includes('href: \'/contact\'') && columnSource.includes('href: \'sourceRegisterUrl\'');
  });

  assert.ok(match, 'footer contact column should exist');

  return extractLinkTargets(match[1] ?? '');
}

function extractLinkTargets(columnSource: string) {
  return Array.from(columnSource.matchAll(/href: '([^']+)'(?:,\s*external: true)?/g)).map(match => match[1] ?? '');
}

function extractObjectBlock(content: string, key: string) {
  const start = content.indexOf(`${key}: {`);

  assert.notEqual(start, -1, `${key} should exist`);

  let depth = 0;
  for (let index = start; index < content.length; index += 1) {
    const character = content[index];

    if (character === '{') {
      depth += 1;
    } else if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        return content.slice(start, index + 1);
      }
    }
  }

  assert.fail(`${key} block should be closed`);
}

function extractObjectBlockContaining(content: string, key: string, needle: string) {
  let from = 0;

  while (from < content.length) {
    const start = content.indexOf(`${key}: {`, from);

    if (start === -1) {
      break;
    }

    const block = extractObjectBlock(content.slice(start), key);

    if (block.includes(needle)) {
      return block;
    }

    from = start + block.length;
  }

  assert.fail(`${key} block containing ${needle} should exist`);
}

type LabelItem = {
  label: string;
};

type LocaleMessage = Record<string, unknown> & {
  languageSwitcher: {
    languages: Record<string, LabelItem>;
  };
  articlesPage: {
    highlights: Array<LabelItem & { description: string }>;
  };
  dataPage: {
    serviceLines: {
      items: Array<{ title: string }>;
    };
    catalog: {
      serviceCatalogs: Record<string, {
        items: Array<{ category: string }>;
      }>;
    };
  };
};

function loadLocaleMessage(file: string): LocaleMessage {
  const source = readFileSync(templatePath(`i18n/locales/${file}`), 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020
    }
  }).outputText;
  const context = {
    exports: {},
    module: { exports: {} },
    defineI18nLocale: (factory: () => LocaleMessage) => factory()
  };

  vm.createContext(context);
  vm.runInContext(output, context);

  return (context.module.exports as { default?: LocaleMessage }).default ?? (context.exports as { default: LocaleMessage }).default;
}

function getLabelItems(message: LocaleMessage, path: string): LabelItem[] {
  return path.split('.').reduce<unknown>((current, key) => {
    if (!current || typeof current !== 'object') {
      return undefined;
    }

    return (current as Record<string, unknown>)[key];
  }, message) as LabelItem[];
}

function countString(source: string, text: string) {
  return source.split(text).length - 1;
}

function extractSectionNavLabels(value: any, path: string[] = []): [string, string[]][] {
  if (Array.isArray(value)) {
    if (path.at(-1) === 'sectionNav' && value.length > 1 && value.every(item => item && typeof item === 'object' && 'label' in item)) {
      return [[path.join('.'), value.map(item => item.label)]];
    }

    return value.flatMap((item, index) => extractSectionNavLabels(item, [...path, String(index)]));
  }

  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => extractSectionNavLabels(item, [...path, key]));
  }

  return [];
}
