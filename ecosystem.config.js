// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "samsmarttech-app",
      script: "npm",
      args: "start -- -l 3005",   // <-- args after `--` go to your start script
      env: { NODE_ENV: "production" },
      watch: false
    }
  ]
};

