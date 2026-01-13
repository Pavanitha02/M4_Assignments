import os from 'os';
import fs from 'fs/promises'; 
console.log("Part A: OS Module");
console.log("Free memory:", os.freemem(), "bytes");
console.log("Total CPU cores:", os.cpus().length);
console.log("\nPart B: File System Operations");

async function fileOperations() {
  try {
    await fs.writeFile("data.txt", "Hello World");
    console.log("Created data.txt");
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Created Readme.md");
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:", data);
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Appended to data.txt");
    await fs.unlink("Readme.md");
    console.log("Deleted Readme.md");

  } catch (err) {
    console.error("Error:", err);
  }
}
fileOperations();
