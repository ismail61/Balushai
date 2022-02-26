
function routes(app) {
    require('./auth.routes.js')(app);
}
export { routes };