#  Project Management in Node.js



## a. Package Managers

### What is a package manager?
A package manager is a tool that helps developers install, update, remove, and manage external libraries (packages) used in a project. Instead of writing everything from scratch, we can reuse code written by others.

### Why do we need package managers in backend development?
- To save time by using ready-made libraries
- To manage project dependencies easily
- To ensure all team members use the same versions of packages
- To simplify project setup

### Problems if package managers are not used
- Manually downloading and updating libraries
- Version mismatch between team members
- Hard to maintain and scale projects
- Higher chance of bugs and errors


## b. NPM (Node Package Manager)

### What is NPM?
NPM is the default package manager for Node.js. It allows developers to install and manage third‑party packages needed for backend development.

### Why is NPM important for Node.js applications?
- Helps install useful packages like Express, Mongoose, etc.
- Keeps track of dependencies
- Makes project sharing easier
- Supports version control of packages

### How NPM helps in managing dependencies
- Stores dependency details in `package.json`
- Automatically installs required packages
- Updates packages easily using commands

Example:
```
npm install express
```


## c. Backend Project Initialization

### Command to initialize a Node.js project
```
npm init
```

### Difference between `npm init` and `npm init -y`
- `npm init` -> asks questions to create `package.json`
- `npm init -y` -> creates `package.json` with default values automatically


## d. Files and Folders Created After Project Initialization

### package.json
- Stores project information
- Keeps list of dependencies
- Contains scripts to run the project

### node_modules
- Contains all installed packages
- Very large in size
- Recreated using `npm install`

### package-lock.json
- Stores exact versions of installed packages
- Ensures same setup on all systems


## GitHub Best Practices

### Files/Folders NOT to push to GitHub
- `node_modules` → too large and can be regenerated

### Files that MUST be committed
- `package.json` → defines project dependencies
- `package-lock.json` → ensures version consistency
- Source code files



