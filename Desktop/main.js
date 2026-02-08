const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true, // removes top menu/header
    icon: path.join(__dirname, "./assets/icon.ico"), // app icon
  });

  win.loadFile(path.join(__dirname, "../Admin/dist/index.html"));
}

app.whenReady().then(createWindow);
