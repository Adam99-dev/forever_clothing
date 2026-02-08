const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "./assets/icon.ico"),
  });

  win.loadFile(path.join(__dirname, "../Admin/dist/index.html"));

  // ✅ Open DevTools
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
