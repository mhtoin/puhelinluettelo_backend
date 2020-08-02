const express = require('express')
const app = express()

app.use(express.json())

let phonebook = [
  {
    "persons":[
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]
  }
]

app.get('/api/persons', (req, res) => {
  res.json(phonebook)
})

app.get('/info', (req, res) => {
    let personAmount = phonebook[0].persons.length
    let time = new Date()
    res.send(`<p>Phonebook has info for ${personAmount} people</p><p>${time}</p>`)

})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})