const config = require('./../config/config.json');
const gd = config.gdFolder
const child_process = require('child_process');
        
    let runGD = function(){
        let button = document.getElementById('runGame');
        let menu1 = document.getElementById('menuButton1');
        let menu2 = document.getElementById('menuButton2');
        let menu3 = document.getElementById('menuButton3');
        let workerProcess = child_process.exec('start GeometryDash.exe', {cwd: gd});
            button.innerHTML = "Now playing...";
            button.disabled = true; 
            menu1.disabled = true;
            menu2.disabled = true;
            menu3.disabled = true;

        workerProcess.on('close', function (code) {
            button.innerHTML = "Play Geometry Dash";
            button.disabled = false;
            menu1.disabled = false;
            menu2.disabled = false;
            menu3.disabled = false;
        });
    }

    let runBypass = function(){
        let workerProcess = child_process.exec('start FPSBypass.exe', {cwd: "hacks/"}) 
        workerProcess.on('close', function (code) {
        console.log(code);
        });
    }

    let runMS = function(){
        let workerProcess = child_process.exec('start MultiScaling.exe', {cwd: "hacks/"}) 
        workerProcess.on('close', function (code) {
        console.log(code);
        });
    }

    let runPM = function(){
        let workerProcess = child_process.exec('start PracticeMusic.exe', {cwd: "hacks/"}) 
        workerProcess.on('close', function (code) {
        console.log(code);
        }); 
    }