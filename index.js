// includes
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./include/generateMarkdown.js");
const generateMitLicense = require("./include/generateMitLicense.js");
const generateGnuLicense = require("./include/generateGnuLicense.js");
const questionBuilder = require("./include/questionBuilder.js");


function init(){

    inquirer
    .prompt(questionBuilder.questionBuilder())
    .then(function (response) {
        if(response.licenseAns === "MIT"){
            fs.writeFile(`LICENSE`, generateMitLicense.generateMitLicense(response.fullNameAns), 'utf-8', function (err) {

                if (err) {
                    return console.log(err);
                }
    
                console.log("MIT License created");
                return;
    
            });
        }
        else if(response.licenseAns === "GNU"){
            fs.writeFile(`COPYING.txt`, generateGnuLicense.generateGnuLicense(), 'utf-8', function (err) {

                if (err) {
                    return console.log(err);
                }
    
                console.log("GNU License created");
                return;
    
            });
        }

        fs.writeFile(`${response.projectNameAns}-README.md`, generateMarkdown.generateMarkdown(response), 'utf-8', function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");
            return;

        });

    });

}

init();