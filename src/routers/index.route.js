const homeRouter = require('./home.route')
const categoryRouter = require('./category.route')

function route(app){

    app.use('/',homeRouter)

    app.use('/categoty',categoryRouter)
    
}

module.exports = route