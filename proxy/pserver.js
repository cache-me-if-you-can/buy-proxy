require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const port = 3000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
// const stockPriceChart = 'http://localhost:3001',
// priceVolumeChart = 'http://localhost:3002',
const buyService = 'http://localhost:3005';
// peopleAlsoBought = 'http://localhost:3004';


app.use(express.static(__dirname + '/client'));

let stockPriceChartId = 0;
// app.all('/api/symbol/:stockPriceChartId/day', (req, res) => {
//   stockPriceChartId = req.params.stockPriceChartId;
//   apiProxy.web(req, res, {target: stockPriceChart});
// });
//
// app.all('/api/symbol/:${stockPriceChartId + 1}/week', (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });
//
// app.all('/api/symbol/:${stockPriceChartId + 2}/week', (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });
//
// app.all('/api/symbol/:${stockPriceChartId + 3}/week', (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });
//
// app.all('/api/symbol/:${stockPriceChartId + 4}/week', (req, res) => {
//   apiProxy.web(req, res, { target: stockPriceChart });
// });
//
// app.all('/api/volumes/symbols', (req, res) => {
//   apiProxy.web(req, res, { target: priceVolumeChart });
// });

app.all('/api/buytest', (req, res) => {
  apiProxy.web(req, res, { target: buyService });
});

app.all('/api/buytest/one/:id', (req, res) => {
  apiProxy.web(req, res, { target: buyService });
});
// app.all('/api/alsoBought/1', (req, res) => {
//   apiProxy.web(req, res, { target: peopleAlsoBought });
// });

app.listen(port, () => console.log('Server listening on port ' + port));
