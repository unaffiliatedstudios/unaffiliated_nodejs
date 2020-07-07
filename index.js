// index.js

/**
 * Required External Modules
 */

 const express = require("express")
 const path = require("path")

/**
 * App Variables
 */

 const app = express()
 const port = process.env.PORT || "3000";

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */

 app.get("/", (req, res) => {
     res.status(200).send("This is a thing")
 })
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on https://localhost:${port}`)
})