const express = require('express') // Define express module
const cors = require('cors') // Create an class of express
const port = 3001 // Define port number
const app = express() // Create an instance of express
app.use(cors()) // Use cors middleware to enable Cross-Origin Resource Sharing
// Define function with HTTP POST method to create a new URL
app.use(express.json()) // Use express.json() middleware to parse JSON request bodies

const arrUrl = []
app.post('/url/create', (req, res) => {
  const { longUrl, shortUrl } = req.body // Define variables to store longUrl and shortUrl from request body
  if (!longUrl || !shortUrl) {
    res.status(400).send('Invalid URL data') // If longUrl or shortUrl is missing, send a 400 Bad Request response with an error message
  }
  const newUrl = {
    id: arrUrl.length + 1,
    longUrl,
    shortUrl, // Create a new URL object with an id, longUrl, and shortUrl
  }
  arrUrl.push(newUrl) // Add the new URL object to the url array
  res.status(201).send(newUrl) // Send a 201 Created response with the new URL object
})

app.get('/url/get/:id', (req, res) => {
  const urlF = arrUrl.find(u => u.id == req.params.id)
  if (urlF) {
    res.send(urlF) // If a URL with the specified id is found, send it in the response
  } else {
    res.status(404).send('URL not found') // If no URL with the specified id is found, send a 404 Not Found response with an error message
  }
})

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
console.log(arrUrl)

// This is code assignment change from long URL to short URL and this code is been following and applied in presentation by Mr.Khang
