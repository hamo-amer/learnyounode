const http = require("http");
const bl = require("bl");
const url = process.argv[2];

http.get(url, function (res) {
  res.pipe(
    bl(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data.toString().length);
        console.log(data.toString());
      }
    })
  );
});
