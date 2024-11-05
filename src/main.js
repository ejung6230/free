const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // dist 폴더의 index.html 파일 로드
    win.loadFile(path.join(__dirname, '../dist/index.html')).catch((err) => {
        console.error('Failed to load index.html:', err);
    });
}

app.whenReady().then(createWindow);
