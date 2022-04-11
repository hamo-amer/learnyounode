const net = require("net");

const date = new Date();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
const minutes =
  date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

const strDate = year + "-" + month + "-" + day;
const strTime = ` ${hours}:${minutes}`;
const fullTime = strDate + strTime;

const server = net.createServer(socket => {
  socket.write(fullTime + "\n");
  socket.end();
});
server.listen(process.argv[2]);
