module.exports = {
    apps: [
        {
            name: 'chat',
            port: '3000',
            script: 'app.js',
        }
    ],
    deploy: {
        production: {
            user: 'root',
            host: ['213.110.228.1'],
            ref: 'origin/main',
            repo: 'git@github.com:nux7jr/socketIO.git',
            ssh_options: ['ForwardAgent=yes'],
            path: '/var/www/socketIO/',
            'pre-deploy-local': 'yarn',
            'post-deploy': 'git fetch --all && yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env production',
        }
    }
}
