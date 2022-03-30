const {app, BrowserWindow, ipcMain,} = require('electron');

const url = require('url');
const path = require('path');

let mainWindow;

app.on('ready', () => {

    // The Main Window
    mainWindow = new BrowserWindow({width: 720, height: 720});
  
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'views/index.html'),
      protocol: 'file',
      slashes: true
    }))
    mainWindow.on('closed', () => {
      app.quit();
    });
});

var Lista = [];
var Fila_r = {};
let count = 0;

function Items_Migrar_OC(CO_EMPR, TI_REQI, NU_REQI, NU_SECU, CO_ITEM, CA_SOLI, CA_ATEN, CA_PEND, Item_Seleccionado) {
    //alert(Item_Seleccionado);

    var duplicado = false;

    if (Item_Seleccionado == "1") {
        Fila_r = { CO_EMPR, TI_REQI, NU_REQI, NU_SECU, CO_ITEM, CA_SOLI, CA_ATEN, CA_PEND }

        duplicado = validateUnique(Fila_r)
        alert(duplicado);

        if (duplicado == false){
            Lista[count] = Fila_r
            count++;
        }

    }

    console.log(Lista);
}

function validateUnique(myObject) {
    return !!Lista.find(i => i.NU_SECU === myObject.NU_SECU)
}
