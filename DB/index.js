const {Pool, Client}= require('pg');

const pool = new Pool({
  user: 'power_user',
  host: 'ec2-13-52-78-138.us-west-1.compute.amazonaws.com',
  database: 'sell',
  port: '5432'
})

pool.query()
