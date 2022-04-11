const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const date = new Date(queryObject.iso);
  if (
    url.parse(req.url).pathname === "/api/parsetime" &&
    req.method === "GET"
  ) {
    console.log(url.parse(req.url).pathname);
    const time = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    console.log(time);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(time));
    res.end();
  }
  if (url.parse(req.url).pathname === "/api/unixtime") {
    const milliseconds = date.getTime();
    console.log(milliseconds);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ unixtime: milliseconds }));
    res.end();
  }
});
server.listen(process.argv[2], () => console.log("server started"));
