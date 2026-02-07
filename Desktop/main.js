const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 800,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "assets/icon.ico"),
  });

  const indexPath = app.isPackaged
    ? path.join(process.resourcesPath, "Admin/dist/index.html")
    : path.join(__dirname, "../Admin/dist/index.html");

  win.loadFile(indexPath);
}

app.whenReady().then(createWindow);
