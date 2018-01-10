//const {app, BrowserWindow} = require('electron'); // works from npm start electron but not when debugging in VSCode
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Prevent main window from being garbage collected
let mainWindow;
const debugTools = true;

function createMainWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600        
    });  
  
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    win.loadURL(startUrl);
  
    if (debugTools === true) {
        BrowserWindow.addDevToolsExtension('C:\\Users\\Paul\\Documents\\GitHub\\react-test\\react-devtools\\2.5.2_0')
        win.webContents.openDevTools();
    }
  
    win.on('closed', () => {    
        mainWindow = null;
    });

    return win;
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        mainWindow = createMainWindow();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    mainWindow = createMainWindow();
});



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
