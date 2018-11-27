import http from "k6/http";
import {check} from "k6";

export let options = {

  stages: [
    {duration: "10s", target: 10 },
    {duration: "120s", target: 10 },
  ]
};

export default function() {
  const id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3000/api/buytest/one/${id}`);
}
