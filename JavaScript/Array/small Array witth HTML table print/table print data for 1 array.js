  // to make tabular data with JS using .lenght command
  let laptops = new Array()

  function get(){
    for(let a = 0; a < 5; a++){
      laptops[a] = document.getElementById("input" + a).value;
    }
  };
  
  function show() {
    document.write("<h2> Here is " + laptops[0] + "'s Data</h2>");
    document.write("<table border='2px'>");
    for(let a = 0; a < 5; a++) {
      document.write("<th>" + laptops[a] + "</th>");
    };
    document.write("<table>");
  };

  
  