const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Check if the 'Logs' directory exists
if (fs.existsSync(logsDirectory)) {
  console.log(`Removing log files from ${logsDirectory}:`);

  // Read the contents of the 'Logs' directory
  const files = fs.readdirSync(logsDirectory);

  // Remove each file
  files.forEach((file) => {
    const filePath = path.join(logsDirectory, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${file}`);
  });

  // Remove the 'Logs' directory itself
  fs.rmdirSync(logsDirectory);
  console.log(`Deleted directory: ${logsDirectory}`);
} else {
  console.log('The "Logs" directory does not exist.');
}
