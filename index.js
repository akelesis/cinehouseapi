const express = require('express')
const consign = require('consign')
const app = express()

app.use(express.json())

consign()
    .include('./api')
    .then('./router.js')
    .into(app)

app.listen(3000, () => {
    console.log("Cinehouse no ar!")
})