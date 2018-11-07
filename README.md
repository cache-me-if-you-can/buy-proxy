# buy-proxy

## Related Projects

  https://github.com/TSON-RH/Service-StockPriceChart
  https://github.com/TSON-RH/price-volume-chart-service
  https://github.com/TSON-RH/Service-People-Also-Bought
  https://github.com/TSON-RH/buy-service


- [ ] Run `npm install` inside the directory to install dependencies.

- [ ] Spin up the proxy server that the services will run on by running `npm start` inside of the `proxy` directory of this repository 
  // It should state 'Server listening on port 3000'

- [ ] make certain that your database is running with all of the services seeded information. Go to the services' individual repos if necessary for more infomation on the particular steps The `mongod` and `mongo` commands in two separate terminal windows are required.  
  // If for some silly reason you skip this step, you'll likely encounter the page with no relevant information/your terminal will tell you that the server has crashed. 

- [ ] Spin up the servers on each of the services located in the `/services` directory 
    - [ ]  Service-StockPriceChart
      // should state listening on port 3001
    - [ ]  price-volume-chart-service
      // should state listening on port 3002
    - [ ]  buy-service
      // should state listening on port 3003
    - [ ]  Service-People-Also-Bought 
      // should state listening on port 3004

proceed to http://localhost:3000/ 

All four services should be rendering at this point!  ~Happy Hacking!~