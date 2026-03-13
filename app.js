const express = require('express')
const cors = require('cors')
const contactRouter = require('./app/routes/contact.route')

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/contacts", contactRouter);


app.get('/', (req, res) => {
    res.json(
        {message: "Wellcome to contact book application."}
    )
})

module.exports = app;