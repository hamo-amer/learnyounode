const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filename = process.argv[3];
  const readStream = fs.createReadStream(filename);

  readStream.on("open", () => {
    readStream.pipe(res);
  });
  readStream.on("error", function (err) {
    res.end(err);
  });
});
server.listen(Number(process.argv[2]));
