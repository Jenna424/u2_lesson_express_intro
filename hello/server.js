const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

// app.get('/', (req, res) => {
//   res.send("You're a wizard, Harry Potter!")
// })

app.get('/', (req, res) => {
  res.send('Welcome to my webpage')
})

app.get('/favorite-food', (req, res) => {
  res.send('Challah')
})

app.get('/favorite-movie', (req, res) => {
  res.send('The Wizard of Oz')
})

app.get('/about-me', (req, res) => {
  res.send('My name is Jenna')
})

app.get('/contact', (req, res) => {
  res.send('My email: jenna.a.leopold@gmail.com')
})

app.get('/article/:slug', (req, res) => {
  console.log(req.params)
  // { slug: 'how-to-improve-your-drumming' }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
