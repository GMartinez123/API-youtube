function getYTdata(userData) {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheet = ss.getSheetByName("sheet1"); //Nombre de la hoja
  var apiKey = 'AIzaSyCNDgtQLIFK2pG2Ah15QLYv9jT_imruAeo'; //Key de api Youtube
  for (i=0;i<=7;i++){
    var Names = sheet.getRange("D3:D10");
    var Name = [
    Names.getCell(1, 1).getValue(),
    Names.getCell(2, 1).getValue(),
    Names.getCell(3, 1).getValue(),
    Names.getCell(4, 1).getValue(),
    Names.getCell(5, 1).getValue(),
    Names.getCell(6, 1).getValue(),
    Names.getCell(7, 1).getValue(),
    Names.getCell(8, 1).getValue(),];
    var id =  Name[i];//ID del video que queramos recojer datos
    var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + apiKey + '&part=snippet,contentDetails,statistics,status'; //Conseguimos la url del video en las apis
    var currentTime = new Date();  
    var response = UrlFetchApp.fetch(url); // Usamos esa url para buscar en la api
    var json = response.getContentText(); //  Guardamos los datos
    var data = JSON.parse(json); //
    var stats = []; 	
    stats.push(data.items[0].snippet.title);//Titulo del video
    stats.push(data.items[0].snippet.description); //Descripcion del video
    stats.push(data.items[0].snippet.thumbnails.high.url);
    
	SpreadsheetApp.getActiveSheet().appendRow(stats); //Copiamos los datos a la hoja de calculo titulo, descripcion, id, thumbnail
  }
}
function mover(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet1'); //Movemos los datos al rango correcto
  sheet.getRange("A11:A").moveTo(sheet.getRange("B3:B"));
  sheet.getRange("B11:B").moveTo(sheet.getRange("C3:C"));
  sheet.getRange("C11:C").moveTo(sheet.getRange("E3:E"));
}
function datosFormulario(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('respuestas');
  var ids = [];
  var idioma = sheet.getRange("I1:I").getValue();
  var tipo = sheet.getRange("J1:J").getValue();
  var comedia = sheet.getRange("K1:K").getValue();
  var noticias = sheet.getRange("L1:L").getValue();
  var musica = sheet.getRange("M1:M").getValue();
  var documentales = sheet.getRange("N1:N").getValue();
  var videojuegos = sheet.getRange("O1:O").getValue();
  if (idioma == "Ingles"){
    if(tipo == "Comedia"){
      if(comedia == "Monologos"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "Sn-euM4TBp4", "tVlkxrNlp10"];          
      }  
      if(comedia == "Sketch"){
        ids = ["Dd7FixvoKBw", "5LGEiIL1__s", "UnW3xkHxIEQ", "1c-3FQap7iw"];
      }
    }else if (tipo == "Noticias"){  
      if(noticias == "Internacional"){
        ids = ["M1s3QlskaEM", "JA51WDA8XDw", "JvrHzqMrXNM", "UNaDzrsC1sg"];
      }
    }else if (tipo == "Musica"){
      if(musica == "Rock"){
        ids = ["gEPmA3USJdI", "1w7OgIMMRc4", "oW_7XBrDBAA", "np0solnL1XY"];        
      }  
      if(musica == "Rap"){
        ids = ["uS4CvCGFyqc", "_JZom_gVfuw", "_Yhyp-_hX2s", "YVkUvmDQ3HY"];
      }
      if(musica == "Electronica"){
        ids = ["tEPB7uzKuh4", "ogMNV33AhCY", "iGNnqxBN4zU", "BR_DFMUzX4E"];
      }
    }else if (tipo == "Documentales"){
      if(documentales == "Cientificos"){
        ids = ["rl1N7i5ra7Y", "FQhENfeM9dc", "Jn7VcOU3x2g", "No5LlZlrJ80"];        
      }  
      if(documentales == "Naturaleza"){
        ids = ["O9dRZgNKD_A", "Xw1138UGXcw", "ayNHgfw_vnI", "vfSc32sKHNo"];
      }
      if(documentales == "Historicos"){
        ids = ["beqKwVnW8ho", "_jDKtTWBs_0", "_gnQ8DlJi1s", "b0-N05K_MKY"];
      }
    }else if (tipo == "Videojuegos"){
      if(videojuegos == "Estrategia"){
        ids = ["n1DesDCb2WU", "nJbRAe91NgE", "XjxKW74TiOg", "qaYMvriGjnI"];        
      }  
      if(videojuegos == "Shooter"){
        ids = ["", "", "", ""];
      }
      if(videojuegos == "Rol"){
        ids = ["", "", "", ""];
      }
    }
  }else{
    if(tipo == "Comedia"){
      if(comedia == "Monologos"){
        ids = ["", "", "", ""];          
      }  
      if(comedia == "Sketch"){
        ids = ["", "", "", ""];
      }
    }else if (tipo == "Noticias"){
      if(noticias == "Nacional"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];        
      }  
      if(noticias == "Internacional"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
    }else if (tipo == "Musica"){
      if(musica == "Rock"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];        
      }  
      if(musica == "Rap"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
      if(musica == "Electronica"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
    }else if (tipo == "Documentales"){
      if(documentales == "Cientificos"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];        
      }  
      if(documentales == "Naturaleza"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
      if(documentales == "Historicos"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
    }else if (tipo == "Videojuegos"){
      if(videojuegos == "Estrategia"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];        
      }  
      if(videojuegos == "Shooter"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
      if(videojuegos == "Rol"){
        ids = ["ejc5zic4q2A", "Xw2bTpyHGCE", "", ""];
      }
    }
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    ids.push(ss.getRange('D3:D6'));    
  }  
}
function lastValue(column) {  //Encuentra el ultimo valor de una columna
  var lastRow = SpreadsheetApp.getActiveSheet().getMaxRows();
  var values = SpreadsheetApp.getActiveSheet().getRange(column + "1:" + column + lastRow).getValues();

  for (; values[lastRow - 1] == "" && lastRow > 0; lastRow--) {}
  return values[lastRow - 1];
}
function copiarDatos() {
 var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('respuestas');
 var ss1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');  
 ss.getRange('A1:E5000').copyTo(ss1.getRange('A1:E5000'), {contentsOnly:true})
}