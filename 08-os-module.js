const os = require("os");

//info about current user

const user = os.userInfo();

console.log(user);

//method returns the system uptime in sec

console.log(`The system Uptime is${os.uptime()}`);

const currentOS = {
  name: os.type(),
  relesae: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
