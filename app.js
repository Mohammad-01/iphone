var phoneName = prompt("what is your fav phone ?")
alert("Nice choice " + phoneName )

var search = prompt("Choose one tybe of iphone, iphone 5 / iphone 7 / iphone 8 ") 

while (search != "iphone 5" && search != "iphone 7" && search != "iphone 8" ){ 
search = prompt("Choose one tybe of iphone, iphone 5 / iphone 7 / iphone 8 ") }

var looppic = prompt ("How many times you want to show the pic ? ")

ip5();
ip7();
ip8();

function rate() {
  var stars = prompt ("How many stars do you rate the website")
  alert("Thank you")
  return alert 
}

function ip5() {
if (search == "iphone 5") {
document.write("The phone you choose iphone 5, And " + looppic + " pictures as you requested ")
for ( var i = 0 ; i < looppic ; i++ ){
document.write("<img src= \"https://www.theiphonewiki.com/w/images/thumb/f/fa/IPhone_5.png/150px-IPhone_5.png\">" + i)
}
rate();
}
return
}

function ip7() {
if (search == "iphone 7") {
document.write("The phone you choose iphone 7, And " + looppic + " pictures as you requested ")
for ( var i = 0 ; i < looppic ; i ){
document.write("<img src=\"https://www.theiphonewiki.com/w/images/a/ab/IPhone_7.png\">" + i)
}
rate();
}
return
}

function ip8() {
if (search == "iphone 8") {
document.write( "The phone you choose iphone 8, And " + looppic + " pictures as you requested ")
for ( var i = 0 ; i < looppic ; i++ ){
document.write("<img src=\"https://www.theiphonewiki.com/w/images/thumb/d/de/IPhone_8.png/150px-IPhone_8.png \">" + i)
}
rate();

}
return
}


