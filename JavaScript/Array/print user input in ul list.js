// making a program that get array values from user and print them in list
let arr = new Array(2); // we will add 2 values
for(var a = 0; a <= 1; a++) {
  arr[a] = prompt("enter values");
};


document.write("<ul>")
for(var b = 0; b < 2; b++){
  document.write('<li>' + arr[b] + '</li>');
}
document.write("</ul>");
