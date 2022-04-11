const fs = require("fs");
const path = require("path");

module.exports = function (dir, extName, cb) {
  fs.readdir(dir, "utf-8", (err, data) => {
    if (err) {
      return cb(err);
    }
    const filteredFiles = data.filter(
      file => path.extname(file) === `.${extName}`
    );
    return cb(null, filteredFiles);
  });
};
