const express = require('express');
const app = express();
const port = 3000;

// Avvio del server
app.listen(port, () => {
    console.log(`Server del blog in ascolto su http://localhost:${port}`);
});

// Array dei post del blog
const posts = [
    {
        id: 1,
        titolo: "Ricetta del Ciambellone",
        contenuto: "Il ciambellone è un dolce classico della cucina italiana, perfetto per la colazione o la merenda.",
        immagine: "/images/ciambellone.svg",
        tags: ["dolce", "colazione", "tradizione"]
    },
    {
        id: 2,
        titolo: "Pasta alla Carbonara",
        contenuto: "Un piatto tradizionale romano a base di pasta, uova, pecorino e pancetta.",
        immagine: "/images/carbonara.svg",
        tags: ["pasta", "romana", "tradizione"]
    },
    {
        id: 3,
        titolo: "Tiramisù",
        contenuto: "Il dessert italiano per eccellenza, con savoiardi, mascarpone e caffè.",
        immagine: "/images/tiramisu.svg",
        tags: ["dolce", "dessert", "italiano"]
    },
    {
        id: 4,
        titolo: "Pizza Margherita",
        contenuto: "La pizza classica napoletana con pomodoro, mozzarella e basilico.",
        immagine: "/images/pizza.svg",
        tags: ["pizza", "napoletana", "tradizione"]
    },
    {
        id: 5,
        titolo: "Ossobuco alla Milanese",
        contenuto: "Un secondo piatto lombardo con ossobuco di vitello servito con risotto alla milanese.",
        immagine: "/images/ossobuco.svg",
        tags: ["secondo", "lombardo", "risotto"]
    }
];

// Configurazione per servire file statici dalla cartella public
app.use(express.static('public'));

// Rotta root
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Rotta bacheca
app.get('/bacheca', (req, res) => {
    res.json({
        posts: posts,
        numeroPost: posts.length
    });
});

// Rotta bacheca show
app.get('/bacheca/:id', (req, res) => {
    const post = posts.find(element => element.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'not found'})
    }
    res.send('dettagli' + req.params.id);
});

// Rotta bacheca store  
app.post('/bacheca', (req, res) => {
    res.send('creazione');
});

// Rotta bacheca update
app.put('/bacheca/:id', (req, res) => {
    res.send('modifica integrale' + req.params.id);
});

// Rotta bacheca modify
app.patch('/bacheca/:id', (req, res) => {
    res.send('modifica parziale' + req.params.id);
});

// Rotta bacheca destroy
app.delete('/bacheca/:id', (req, res) => {
    res.send('eliminazione' + req.params.id);
});
