module.exports = {
  apps: [
    {
      name: 'nest-app',
      script: './dist/main.js',
      instances: 5,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        // 其他环境变量...
      },
      env_production: {
        NODE_ENV: 'production',
        // 生产环境的其他环境变量...
      },
      // 其他环境配置...
    },
  ],
};
