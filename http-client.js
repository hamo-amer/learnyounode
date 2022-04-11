const http = require("http");
const https = require("https");
const url = process.argv[2];
const prefix = url.slice(0, 8);

if (prefix === "https://") {
  https.get(url, res => {
    res.on("data", data => {
      console.log(data.toString());
    });
  });
} else {
  http.get(url, res => {
    res.on("data", data => {
      console.log(data.toString());
    });
  });
}
