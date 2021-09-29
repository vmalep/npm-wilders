const chalk = require("chalk");
const colorNames = require("color-name");

const wilders = [
"Tim",
"Pierre",
"Elli",
"Jana",
"Josh",
"Francis",
"Liana",
"Gauthier",
"Elisa",
];

const colorKeys = Object.keys(colorNames);

i = 0;
while(i < 4){
    const wildersIndex = Math.floor(Math.random()* wilders.length);
    const randomRGBColor =  colorNames[colorKeys[Math.floor(Math.random()* colorKeys.length)]];

    console.log(chalk.rgb(randomRGBColor[0], randomRGBColor[1], randomRGBColor[2])(wilders[wildersIndex]));
    
    wilders.splice(wildersIndex,1);
    i++;
}