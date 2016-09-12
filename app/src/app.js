const {app, BrowserWindow} = require('electron')

var mainWindow = null;

app.on('window-all-closed', function() {
  // if (process.platform != 'darwin') {
    app.quit();
  // }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 200,
    minWidth: 500,
    minHeight: 200,
    // maxWidth: 500,
    // maxHeight: 200,
    acceptFirstMouse: true,
    titleBarStyle: 'show',
    maximizable: false,
    minimizable: false,
    fullscreenable: false
  });

  mainWindow.loadURL('file://' + __dirname + '/settings.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
