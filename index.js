// includes
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./include/generateMarkdown.js");
const generateMitLicense = require("./include/generateMitLicense.js");
const generateGnuLicense = require("./include/generateGnuLicense.js");
const questionBuilder = require("./include/questionBuilder.js");

// main function
function main(){

    // ask the questions defined in the questionBuilder
    inquirer
    .prompt(questionBuilder.questionBuilder())
    .then(function (response) {
        // check which license option was selected and create the appropriate file
        if(response.licenseAns === "MIT"){
            fs.writeFile(`./generatedFiles/LICENSE`, generateMitLicense.generateMitLicense(response.fullNameAns), 'utf-8', function (err) {

                if (err) {
                    return console.log(err);
                }
    
                console.log("MIT License created");
                return;
    
            });
        }
        else if(response.licenseAns === "GNU"){
            fs.writeFile(`./generatedFiles/COPYING.txt`, generateGnuLicense.generateGnuLicense(), 'utf-8', function (err) {

                if (err) {
                    return console.log(err);
                }
    
                console.log("GNU License created");
                return;
    
            });
        }

        //create the README file
        fs.writeFile(`./generatedFiles/${response.projectNameAns}-README.md`, generateMarkdown.generateMarkdown(response), 'utf-8', function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("README created");
            return;

        });

    });

}

// run the program
main();