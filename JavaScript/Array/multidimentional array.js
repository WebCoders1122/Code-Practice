// creating a tablur data using multidimentionanl array with html table
let laptop = [
    ["Company", " CPU ", "model", "RAM", "Hard Disk"],
    ["lenovo", "Core i5", "t410", "4GB", "320GB"],
    ["HP", "core i3", "3380", "8GB", "128 SSD"],
    ["HP", "core i5", "8460p", "4GB", "360GB SSD"]
  ];
  document.write('<table border="2px">');
  for(let a = 0; a < 4; a++){
    document.write('<tr>');
    for(let b = 0, c = 0; b < 5, c < 5; b++, c++){
      if (a == 0) {
        document.write('<th>' + laptop[a][b] + '</th>');
      } else {
        document.write('<td>' + laptop[a][c] + '</td>');
      }
    };
    document.write('</tr>');
  };
  document.write('</table>');
  
  