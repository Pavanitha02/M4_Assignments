const fs = require("fs");
const path = require("path");

function readFileData() {
  const filePath = path.join(__dirname, "Data.txt");

  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (error) {
    return "Error: Unable to read Data.txt file.";
  }
}

module.exports = readFileData;
