require ("dotenv").load()
const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const fetch = require('node-fetch')

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

app.use('/users', require('./routes/users'))
app.use('/ratings', require('./routes/ratings'))
app.use('/items', require('./routes/items'))

app.get("/hello", (req, res, next) => {
  res.send("HELLO")
})

// app.post("/upload", upload.single("photo"), (req, res, next) => {
//   runClarifai(req.file.location)
//   .then(data=> {
//     res.send(data)
//   })
//   .catch(next)
// })
// function runClarifai(image) {
//     const app = new Clarifai.App({
//     apiKey: process.env.CLARIFAI_KEY
//     })
//     return app.models.predict(Clarifai.FOOD_MODEL, image)
//         .then(response => {
//           return response.outputs[0].data.concepts[1].name
//         })
//         .then(res => {
//           console.log(res)
//           return runFood2Fork(res)
//         })
// }
// let recipeList = []
//
// function runFood2Fork(foodItems) {
//   console.log("made it to runFood2Fork")
//   let foodURL = 'http://food2fork.com/api/search?key=5761d9561765b7936c21a38f6afa5786&q=' + foodItems
//   return fetch(foodURL)
//   .then(res => {
//     console.log(res)
//     return res.json()
//   })
//   .then(recipes => {
//     recipeList = recipes.recipes
//     return recipes.recipes
//
//   })
// }


app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
  console.log('ERROR', err);
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  })
})

module.exports = app
