module.exports = {
    apps: [
        {
            name: 'chat',
            port: '3000',
            script: './app.js',
            max_memory_restart: "300M",
            out_file: "./logs/out.log",
            error_file: "./logs/error.log",
            merge_logs: true,
            log_date_format: "DD-MM HH:mm:ss Z",
            log_type: "json",
        }
    ],
    deploy: {
        production: {
            user: 'root',
            host: ['213.110.228.1'],
            ref: 'origin/main',
            repo: 'git@github.com:nux7jr/socketIO.git',
            ssh_options: ['ForwardAgent=yes'],
            'pre-deploy-local': 'yarn',
            'post-deploy': 'cd /home/mike/projects/socketIO && git fetch --all && yarn && pm2 startOrRestart ecosystem.config.js --env production',
        }
    }
}
