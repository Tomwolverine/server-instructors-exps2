const express = require('express')

const app = express()

const cors = require('cors')
const csvToJson = require('convert-csv-to-json')
const port = process.env.PORT || 9000
const body-parser = require('body-parser')

app.use(cors())
app.use(body-parser())

app.get('/', request, response, next =>{})

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})

