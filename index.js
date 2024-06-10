// server import
const json_server = require('json-server')

// create server
const expenseTracker = json_server.create()

// create middleware
const middleware = json_server.defaults()

// add router 
const router = json_server.router('db.json') 

// import cors
const cors = require('cors')

// use cors
expenseTracker.use(cors())

// use middleware
expenseTracker.use(middleware)

// use router
expenseTracker.use(router)

// set PORT
const PORT = 8000

// Run 
expenseTracker.listen(PORT, ()=>{
    console.log(`____Server is started at ${PORT}____`);
})

