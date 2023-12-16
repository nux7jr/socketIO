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
            path: '/home/mike/projects/socketIO',
            'pre-deploy-local': 'yarn',
            'post-deploy': 'pwd',
            // 'post-deploy': 'git fetch --all && yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env production',
            'post-setup': 'ls -la', // Добавляем команду для вывода содержимого папки после настройки
            'ssh_options': 'StrictHostKeyChecking=no', // Добавляем опцию SSH для избежания проблем с ключами
            shallow_clone: true, // Используем shallow clone
        }
    }
}
