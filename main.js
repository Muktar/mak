const { app, BrowserWindow, Menu, session, shell } = require('electron');
const path = require('path');

const PARTITION = 'persist:shohoz-seat-runner';
let mainWindow;

async function createWindow() {
  const ses = session.fromPartition(PARTITION);
  await ses.loadExtension(path.join(__dirname, 'extension'), { allowFileAccess: true });

  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    title: 'Shohoz Seat Runner',
    autoHideMenuBar: true,
    backgroundColor: '#f3faf5',
    webPreferences: {
      partition: PARTITION,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true
    }
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://train.shohoz.com/')) return { action: 'allow' };
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('https://train.shohoz.com/')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  await mainWindow.loadURL('https://train.shohoz.com/');
}

const menu = Menu.buildFromTemplate([
  { label: 'App', submenu: [
    { label: 'Reload', accelerator: 'Ctrl+R', click: () => mainWindow?.reload() },
    { label: 'Home', click: () => mainWindow?.loadURL('https://train.shohoz.com/') },
    { type: 'separator' },
    { role: 'quit' }
  ]},
  { label: 'View', submenu: [
    { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'resetZoom' },
    { type: 'separator' }, { role: 'togglefullscreen' }
  ]}
]);
Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
