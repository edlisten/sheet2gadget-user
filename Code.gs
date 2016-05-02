//for all rows: id="row_items"
//for each row: class="cur_row"
//pageNav: id="pageNav"


function doGet(e) {
//var id = e.parameter.id;
//var cache = CacheService.getUserCache().put("id", id);
var whatversion = e.parameter.version;

if(whatversion == "?"){
  return HtmlService.createHtmlOutput("<p>current version: 1.0.4</p>")
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
      return;
      }

  return HtmlService.createHtmlOutputFromFile('index')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);

}

function getDefaults(){
//var cache = CacheService.getUserCache();
//var id = cache.get("id");
//cache.remove("id");

id = "<<enter the id of a properly set up google doc>>";

var defaults = {};


// get datasheet
var idError = "";
try{
var ss = SpreadsheetApp.openById(id);
} catch(err) {
// if an error is found, it will run the fail() function on the index file.
idError = err;
}
//defaults.idError = idError;  // This is not needed

// data
var dataSheet = ss.getSheetByName("s2g_Data");
var data = dataSheet.getSheetValues(1,1,dataSheet.getLastRow(),dataSheet.getLastColumn());
defaults.data = data;

//template
var templateSheet = ss.getSheetByName("s2g_Template");
var template = templateSheet.getSheetValues(1,1,templateSheet.getLastRow(),templateSheet.getLastColumn());
defaults.template = template;

return defaults;
}
