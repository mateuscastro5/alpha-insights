import { app, BrowserWindow } from "electron";
import path from 'path';
import { fileURLToPath } from 'url';
import { isDev } from "./util.js";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});

    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(__dirname, '../dist-react/index.html'));
    }
});
