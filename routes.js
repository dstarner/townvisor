const routes = require('next-routes')

module.exports = routes()
    .add('profile', '/:username')
    .add('post', '/:username/:slug')