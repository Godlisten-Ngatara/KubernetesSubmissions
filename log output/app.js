const crypto = require("crypto");

// Output a random string every 5 seconds with a timestamp using a loop
async function logLoop() {
  while (true) {
    const randomString = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

logLoop();
