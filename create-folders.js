const fs = require("fs");
const inquirer = require("inquirer");

const folders = [
  "components",
  "constant",
  "context",
  "Functions",
  "hooks",
  "library/components",
  "library/screens",
];

// Function to create folders
const createFolders = (selectedFolders) => {
  selectedFolders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
      console.log(`Created folder: ${folder}`);
    } else {
      console.log(`Folder already exists: ${folder}`);
    }
  });
};

// Prompt user to select folders
inquirer.default
  .prompt([
    {
      type: "checkbox",
      name: "selectedFolders",
      message: "Select the folders you want to create:",
      choices: [...folders, "Create All"],
    },
  ])
  .then((answers) => {
    if (answers.selectedFolders.includes("Create All")) {
      createFolders(folders); // Create all folders
    } else {
      createFolders(answers.selectedFolders); // Create selected folders
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
