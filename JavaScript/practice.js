// making a program that get array values from user and print them in list
let arr = new Array(2); // we will add 2 values

function get_data() {
  arr[0] = document.getElementById('input1').value;
  arr[1] = document.getElementById('input2').value;
  document.write("<ul>")
for(var b = 0; b < 2; b++){
  document.write('<li>' + arr[b] + '</li>');
}
document.write("</ul>");
}

