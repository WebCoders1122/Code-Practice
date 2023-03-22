// creating a tablur data using multidimentionanl array with html table
document.write("<b> This is for 4 Laptops </b>")
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
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
  
  // to make tabular data with JS using .lenght command
  document.write("<b> This is for unlimited Laptops </b>")
  let laptops = [
  ["Company", "Processor", "RAM", "Hard Disk", "Model"],
  ["HP", "Core i5", "4 GB", "360 GB SSD", "8460p"],
  ["Lenovo", "Core i5", "4 GB", "320GB", "T410"],
  ["Dell", "Core i3", "8 GB", "128 GB SSD", "Latitude 3380"]
];
document.write('<table border="2px" style="text-align: center;"">');
for(let a = 0; a < laptops.length; a++){
  document.write("<tr>");
  for(let b = 0, c = 0; b < laptops[a].length, c < laptops[a].length; b++, c++){
    if (a == 0) {
      document.write("<th>" + laptops[a][b] + "</th>");
    } else {
      document.write("<td>" + laptops[a][c] + "</td>");
    }
  };
  document.write("</tr>");
};
document.write("</table>");


