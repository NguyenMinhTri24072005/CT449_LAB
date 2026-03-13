const express = require('express')
const cors = require('cors')
const ApiError = require("./app/api-error")
const contactRouter = require('./app/routes/contact.route')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/contacts", contactRouter);

app.get('/', (req, res) => {
    res.json({
        message: "wellcome to contact book application."
    })
})

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"))
})

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        messages: err.message || "Internal Server Error",
    })
})


module.exports = app;