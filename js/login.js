var heading =document.getElementById("heading");
var url=window.location.href;
var fullvariable=url.split("?")[1];
var username =fullvariable.split("=")[1];
var nameparts=username.split("%20");
var finalname='';
for (var i=0 ;i<nameparts.length ; i++){
    finalname +=" "+nameparts[i];
}
heading.innerHTML=" welome to "+finalname;