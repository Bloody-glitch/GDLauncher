const path = require('path');
const url = require('url');
const {app, BrowserWindow, Menu} = require('electron');
//discord rich presence
const client = require('discord-rich-presence')('658606532761485323');
       client.updatePresence({
        details: 'Playing Geometry Dash',
        startTimestamp: Date.now(),
        largeImageKey: 'gd',
        instance: true
      });

let win;

// create a window
function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        name: "GD Launcher",
        width: 1176,
        height: 720,
        minWidth: 1176,
        minHeight: 720,
        toolbar: false,
        icon: path.join(__dirname, '/img/GeometryDash.ico')
    });

    Menu.setApplicationMenu(Menu.buildFromTemplate([{ label: 'Init' }]))
    
    //removes toolbar
    win.webContents.once('did-finish-load', () => {
        Menu.setApplicationMenu(null)
      })
      
    win.setMenu(null)
    
    //load main menu
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/html/index.html'),
        protocol: 'file',
        slashes: true
    }));

   win.on('closed', () => {
        win = null;
   });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
