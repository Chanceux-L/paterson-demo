export type ArticleCategory = {
  id: number;
  name: string;
  slug: string;
};

export type Article = {
  id: number;
  slug?: string;
  categoryId: number;
  category: string;
  title: string;
  intro: string;
  image?: string;
  video?: string;
  date: string;
  browse: number;
};

export const ARTICLE_PAGE_SIZE = 6;
