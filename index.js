const express = require('express')
const app = express()
const fichiersXML = require('./fichierXML.json')

app.use(express.json())

//Récupérer tous les fichiers XML
app.get("/recuperationXML",(req,res) => {
  //res.send("Fichier XML récupéré")
  res.status(200).json(fichiersXML)
})

//Récupérer un fichier XML précis
app.get("/recuperationXML/:id",(req,res) => {
  const id = parseInt(req.params.id)
  const fichierXML = fichiersXML.find(fichierXML => fichierXML.id === id)
  res.status(200).json(fichierXML)
})

//Envoie un fichier XML
app.post("/envoieXML", (req,res) => {
  fichiersXML.push(req.body)
  res.status(200).json(fichiersXML)
})


app.listen(8080, () => {
  console.log("Serveur à l'écoute")
})
