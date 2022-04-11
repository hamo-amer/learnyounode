const http = require("http");
const bl = require("bl");
let results = [];
let count = 0;

const printResults = () => {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
};
const httpGet = index => {
  http.get(process.argv[2 + index], res => {
    res.pipe(
      bl(function (err, data) {
        if (err) {
          return console.log(err);
        }
        results[index] = data.toString();
        count++;
        if (count === 3) {
          printResults();
        }
      })
    );
  });
};
for (let i = 0; i < 3; i++) {
  httpGet(i);
}
