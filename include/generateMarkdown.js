// function to generate markdown for README
// Requires : userNameAns, projectNameAns, licenseAns, emailAns, descriptionAns
// takes in an object with the mentioned parameters, populates a string using the object, then returns that string for the markdown file
function generateMarkdown(data) {

  const generatedMarkdown = 
  `# **${data.projectNameAns}**
  ![Contents](https://img.shields.io/github/languages/top/${data.userNameAns}/${data.projectNameAns})
  ![Last-Commit](https://img.shields.io/github/last-commit/${data.userNameAns}/${data.projectNameAns})
  ![License](https://img.shields.io/github/license/${data.userNameAns}/${data.projectNameAns})
  ## **Description**
  
  ${data.descriptionAns}
  <br><br>
  
  ## **Table of Contents**
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  <br><br>
  
  ## **Installation**
  
  1. Clone the repo
  \`\`\`sh
  git clone https://github.com/${data.userNameAns}/${data.projectNameAns}.git
  \`\`\` 
  2. Install NPM packages
  \`\`\`sh
  npm install
  \`\`\`
  <br><br>
  
  ## **Usage**
  !! To be filled in when the project has working code !!
  
  Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
  <br><br>
  
  ## **License**
  
  Distributed under the ${data.licenseAns} License.
  <br><br>
  
  ## **Contributing**
  Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
  
  1. Fork the Project
  2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
  3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
  4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
  5. Open a Pull Request
  
  <br><br>
  
  ## **Tests**
  \`\`\`sh
  npm run test
  \`\`\`
  <br><br>
  
  ## **Questions**
  Learn about more of my work at [my GitHub](https://github.com/${data.userNameAns})
  
  You can send any additional questions to my email : ${data.emailAns}
  <br><br><br><br>
  
  ![created](https://img.shields.io/badge/Helped%20by-Virlym-blue)`;
  
  return (generatedMarkdown);
}

module.exports = {
  generateMarkdown : generateMarkdown
};
