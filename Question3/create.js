const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Create the 'Logs' directory if it does not exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  console.log(`Created directory: ${logsDirectory}`);
}

// Change the current working directory to the 'Logs' directory
process.chdir(logsDirectory);

// Create 10 log files with sample text
for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}.`);
  console.log(`Created file: ${fileName}`);
}
