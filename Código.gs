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
    
	SpreadsheetApp.getActiveSheet().appendRow(stats); //Copiamos los datos a la hoja de calculo    titulo, descripcion, id, thumbnail
  }
}
function mover(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet1'); //Movemos los datos al rango correcto
  sheet.getRange("A11:A").moveTo(sheet.getRange("B3:B"));
  sheet.getRange("B11:B").moveTo(sheet.getRange("C3:C"));
  sheet.getRange("C11:C").moveTo(sheet.getRange("E3:E"));
}