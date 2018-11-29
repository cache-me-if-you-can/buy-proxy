import http from "k6/http";
import {check} from "k6";

export let options = {

  stages: [
    {duration: "10s", target: 5 },
    {duration: "120s", target:  5},

  ]
};

export default function() {
  // const id = Math.floor(Math.random() * 10000000);
  var url = "http://test.loadimpact.com/login";
  var payload = JSON.stringify({ symbol: "aitlekd", companyname: "bobblehead", marketprice: 35.09 });
  var params =  { headers: { "Content-Type": "application/json" } }
  http.post(url, payload, params);
  // http.get(`http://localhost:3000/api/buytest/one/${id}`);
}
