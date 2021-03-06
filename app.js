const express = require('express')

const app = express()

const cors = require('cors')
const csvToJson = require('convert-csv-to-json')
const port = process.env.PORT || 9000
const bodyParser = require('body-parser')
const data = require('./instructors.json')

app.use(cors())
app.use(bodyParser.json())

let fileInputName = './version-2/instructors.csv'; 
let fileOutputName = 'instructors.json';

const findById = (params, dataParam) => {
    for(let i = 0;i < dataParam.length; i++) {
        let idHolder = dataParam[i].ID;
        if (params === idHolder) {
            return dataParam[i];
        }
    }
    return null;
}


csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

app.get('/', (request, response) =>{
    return response.json({data})
})

app.get('/:id',(request, response,) => {
    const instructor = findById(request.params.id, data);
    if (instructor) {
        response.json({'data': instructor});
    }
    else {
        response.json({
            error: {
                "message": 'No record found!'
            }
        })
    }
})

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})

