'use-strict';

const express = require('express');
const config = require('./config/config.json');

const health = require('./health');

(async () => {
    try {
        const app = express(); 
        app.get('/healthcheck', health.check);

        app.listen(config.port, () => {
            console.log(`web application listening on port ${config.port}`); 
        });
    }catch(error) {
         console.log(`error : ${error}`); 
    }
})();

