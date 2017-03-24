// Event handling
document.addEventListener("DOMContentLoaded",function (event) {

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        //Fetching name input from text-box

   var name = document.getElementById("name").value;

      

  if (name === "Jack") {
        $ajaxUtils
          .sendGetRequest("name1.json", 
            function (res) {
              var message = res.firstName+"<br>";
              message += "Your attendance in";
              message += res.course1+"<br>";
             
              message += " Total lectures conducted in theory are: ";
              message += res.totaltheory1+"<br>";
              message += " Total lectures conducted in labs are:";
              message += res.totallab1+"<br>";
              message += " Your attendance in theory is: ";
              message += res.atttheory1+"<br>";
              message += " Your attendance in lab is: ";
              message += res.attlab1+"<br>";
         
              if (res.default1) {
                message += " You in defaulters list ";
              }
              else {
                message += " You are not in defaulters list.";
              }
              document.getElementById("content").innerHTML = message
            }); 
  }



  else if (name === "Jill") {
         
 
        $ajaxUtils
          .sendGetRequest("name1.json", 
            function (res) {
              var message = res.secondName+"<br>";
              message += "Your attendance in";
              message += res.course2+"<br>";
             
              message += " Total lectures conducted in theory are: ";
              message += res.totaltheory2+"<br>";
              message += " Total lectures conducted in labs are:";
              message += res.totallab2+"<br>";
              message += " Your attendance in theory is: ";
              message += res.atttheory2+"<br>";
              message += " Your attendance in lab is: ";
              message += res.attlab2+"<br>";
         
              if (res.default2) {
                message += " You in defaulters list ";
              }
              else {
                message += " You are not in defaulters list.";
              }
              document.getElementById("content").innerHTML = message;
          
          });
  }

  });
});
