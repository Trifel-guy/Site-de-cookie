const express = require('express'); // Framework express pour node
const path = require('path'); // Module node pour acceder aux adresses des fichiers locaux
const jwt = require('jsonwebtoken') // recuperation dy module jsonwebmodule 
const fs = require('fs');
const { profile } = require('console');

const app = express();
// Manipuler les donnees des url et en json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Enlever la détection possible du type de serveur
app.disable('x-powered-by');

// Paramètrage des CORS pour autoriser le requêtage de toute origine
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
 
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', '*');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

// Routes à partir desquelles les données seront disponibles
app.get('/', (req, res) => {
    console.log(req, res);
    res.send('Server correctement lancé!!!');
});

app.get('/cookies', (req, res) => {
   res.sendFile(path.resolve('./datas/listCookies.json'));
});

app.post('/id', (req, res)=>{
    console.log("ID data recieved from the front", req.body);
    if(req.body.id=='cytech' && req.body.passwd =='123456'){
        let token = jwt.sign({id:req.body.id}, 'CYencryptedLoginToken');
        res.send({token});
    }
});

// Initialisation du serveur sur le port 3000
app.listen(3001, () => {
    console.log("Server launched successfully!")
});
