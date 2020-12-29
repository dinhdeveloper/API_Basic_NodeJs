const path = require('path')
const express = require('express')
const indexRoute = require('./routers/index.route')
const app = express()
const port = 3000
global.__basedir = __dirname;
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname,'public')))

indexRoute(app)


app.listen(port,()=>{console.log(`Listen port ${port}`)})

//https://viblo.asia/p/node-express-js-creating-a-restful-crud-api-with-mysql-Eb85oyB8Z2G