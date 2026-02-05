const express = require("express");
const app = express();
const port = 3000;





app.use(express.static("public"));
app.use(express.static("MyFiles"))

const absolutePath = __dirname + "/index.html";


app.get("/", (req, res) => {
    res.sendFile(absolutePath)


});

app.get("/bacheca", (req, res) => {

    const bacheca = [
        {
            titolo: "Ciambellone",
            contenuto: "Torta ciambella",
            immagine: "imgs/ciambellone.jpeg",
            tags: ["ciambella", "torta", "dolce"]
        },
        {
            titolo: "Cracker alla barbabietola",
            contenuto: "Cracker barbabietola",
            immagine: "imgs/cracker_barbabietola.jpeg",
            tags: ["crackers", "cracker", "barbabietola"]
        },
        {
            titolo: "Pane fritto dolce",
            contenuto: "Pane fritto",
            immagine: "imgs/pane_fritto_dolce.jpeg",
            tags: ["pane", "fritto", "pane fritto", "dolce"]
        },
        {
            titolo: "Pasta alla barbabietola",
            contenuto: "Pasta e barbatietola",
            immagine: "imgs/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola"]
        },
        {
            titolo: "Torta Paesana",
            contenuto: "Torta paesana al cioccolato",
            immagine: "imgs/torta_paesana.jpeg",
            tags: ["torta", "dolce", "paesana", "cioccolato", "cacao"]
        }
    ];
    res.json(bacheca);

})








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})