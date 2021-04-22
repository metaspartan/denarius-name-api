# Denarius Name API Server

A basic NodeJS Denarius DNS Name Server API, serves requests with the public DDNS servers 107.152.32.30 192.3.62.20

## Install Setup
npm install
node app.js

or

npm install
npm install -g forever
forever start app.js

## API Usage

API Server Runs on port 3337 by default

/name?req=google.com
/name?req=satoshi.btc
/name?req=stats.d