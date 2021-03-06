//import config.json
const config = require('./../config/config.json');
//import Geometry Dash Folder
const gd = config.gdFolder
//import child_process
const child_process = require('child_process');
        
    let runGD = function(){
        let button = document.getElementById('runGame');
        let menu1 = document.getElementById('menuButton1');
        let menu2 = document.getElementById('menuButton2');
        let menu3 = document.getElementById('menuButton3');
        //launch GeometryDash.exe from folder and blocked the buttons
        let workerProcess = child_process.exec('start GeometryDash.exe', {cwd: gd});
            button.innerHTML = "Now playing...";
            button.disabled = true; 
            menu1.disabled = true;
            menu2.disabled = true;
            menu3.disabled = true;

        workerProcess.on('close', function (code) {
            //if GeometryDashexe is closed buttons unlocked
            button.innerHTML = "Play Geometry Dash";
            button.disabled = false;
            menu1.disabled = false;
            menu2.disabled = false;
            menu3.disabled = false;
        });
    }
        
    //launch FPSBypass.exe
    let runBypass = function(){
        let workerProcess = child_process.exec('start FPSBypass.exe', {cwd: "hacks/"}) //use resources/app/hacks/ when compiling
        workerProcess.on('close', function (code) {
        console.log(code);
        });
    }
        
    //launch MultiScaling.ex
    let runMS = function(){
        let workerProcess = child_process.exec('start MultiScaling.exe', {cwd: "hacks/"}) //use resources/app/hacks/ when compiling
        workerProcess.on('close', function (code) {
        console.log(code);
        });
    }
        
    //launch PracticeMusic.exe
    let runPM = function(){
        let workerProcess = child_process.exec('start PracticeMusic.exe', {cwd: "hacks/"}) //use resources/app/hacks/ when compiling
        workerProcess.on('close', function (code) {
        console.log(code);
        }); 
    }
