import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron'
import { createFileRoute, createURLRoute } from 'electron-router-dom'
import path from 'node:path'
import { enableMapSet } from 'immer'

enableMapSet();


process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let window: BrowserWindow | null
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']


function createWindow(id: string, options: BrowserWindowConstructorOptions = {}) {
  window = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    minHeight: 900,
    minWidth: 900,
    ...options,
  })


  const devServerURL = createURLRoute(VITE_DEV_SERVER_URL!, id)

  const fileRoute = createFileRoute(
    path.join(__dirname, '../dist/index.html'),
    id
  )

  window.setMenu(null)

  if (VITE_DEV_SERVER_URL) {
    window.loadURL(devServerURL)
  } else {
    // win.loadFile('dist/index.html')
    window.loadFile(...fileRoute)
  }
  window.webContents.openDevTools();
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    window = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow('main', {
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      }
    })
  }
})

app.whenReady().then(() => {
  createWindow('main', {
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
})
