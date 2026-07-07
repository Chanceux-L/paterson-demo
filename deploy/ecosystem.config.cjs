module.exports = {
  apps: [
    {
      name: 'aida-website-template',
      script: '/var/www/aida-website-template/current/server/index.mjs',
      cwd: '/var/www/aida-website-template/current',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '800M',
      min_uptime: '10s',
      max_restarts: 5,
      restart_delay: 3000,
      kill_timeout: 5000,
      listen_timeout: 10000,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      out_file: '/var/log/pm2/aida-website-template.out.log',
      error_file: '/var/log/pm2/aida-website-template.error.log',
      node_args: ['--enable-source-maps'],
      env: {
        PORT: '8010',
        NODE_ENV: 'production'
      }
    }
  ]
};
