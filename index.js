const express = require('express')
const app = express()
const fichiersXML = require('./fichierXML.json')

app.use(express.json())

//Récupérer tous les fichiers XML
app.get("/recuperationXML",(req,res) => {
  //res.send("Fichier XML récupéré")
  res.status(200).json(fichiersXML)
})

//Récupérer le dernier fichier XML
app.get("/recuperationXML_latest",(req,res) => {
  res.status(200).json(fichiersXML[fichiersXML.length-1])
})


//Récupérer un fichier XML précis
app.get("/recuperationXML/:id",(req,res) => {
  const id = parseInt(req.params.id)
  const fichierXML = fichiersXML.find(fichierXML => fichierXML.id === id)
  res.status(200).json(fichierXML)
})


//Envoie le contenu du fichier XML au format JSON
// params: body (un fichier JSON)
app.post("/envoieXML", (req,res) => {
  var idCurrent = (fichiersXML[fichiersXML.length-1].id) +1
  var jsonToAdd = {"id": idCurrent,"body":req.body.body}
  fichiersXML.push(jsonToAdd)
  res.status(200).json(fichiersXML)
})

//Effacer un fichier XML
app.delete('/supressionXML/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let fichierXML = fichiersXML.find(fichierXML => fichierXML.id === id)
    fichiersXML.splice(fichiersXML.indexOf(fichierXML),1)
    res.status(200).json(fichiersXML)
})


app.listen(8080, () => {
  console.log("Serveur à l'écoute")
})
