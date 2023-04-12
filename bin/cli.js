#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/princesimform/create-webpack-react-app-new ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the Repository with name ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);

console.log(`Installing Dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("Congratulations , You Are Good To go");
console.log("npm run serve");
