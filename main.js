const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


// Initialized window object
let win;


function createBrowserWindow() {
    // Create browser window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + "/img/logo.png",
        webPreferences: {
            nodeIntegration: true
          }
    })

    //Load index.html file
    win.loadFile('index.html');
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, "index.html"),
    //     protocol: 'file:',
    //     slashes: true

    // }));

    win.webContents.openDevTools();

    // Set window object to null when all windows are closed
    win.on('closed', () => {
        win = null;
    })
}

// Run create window function
app.on('ready', createBrowserWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();

    }

})
