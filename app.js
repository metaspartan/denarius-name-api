//
// Copyright (c) 2021 Carsen Klock for use with Denarius (D)
//
var express = require("express");
var dns = require("dns");
const { Resolver } = require('dns');
var app = express();

app.listen(3337, () => {
 console.log("Denarius Name API running on port 3337");
});

//Set the Denarius Public DNS Servers
const resolver = new Resolver();
resolver.setServers(['107.152.32.30','192.3.62.20']);

// Denarius Name API Serve
app.get('/name/', function(req, res) {
    var request = req.param('req');

    if (request)

    // This request will use the servers above
    resolver.resolve4(request, (err, addresses) => {
        console.log('address request: %j %j', addresses, request);
        if (typeof addresses != 'undefined') {
            reqip = addresses[0];
            res.send(reqip); //outputs requested IP from Denarius DNS Servers
        }
        if (typeof addresses == 'undefined') {
            res.send('Invalid Request');
        }
    });
});