const express = require('express')
const app = express()

app.listen(8080, () => {
  console.log("Serveur à l'écoute")
})

//Récupérer un fichier XML
app.get("/fichierXML",(req,res) => {
    res.send("Fichier XML récupéré")
})
