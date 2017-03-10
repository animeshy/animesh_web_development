// Event handling


    function sayHello (event) {
      this.textContent = "Said it!";


     var name = document.getElementById("name").value;

       var d = document.getElementById("dd");
       var usr = d.options[d.selectedIndex].value; 

       console.log(usr);  

 if (name === "") {
       var message = "Invalid name";

      document
        .getElementById("content")
        .innerHTML = message;
    }


else
{




  if (name === "Animesh" && usr === "1") {
         
      var message = "<h2>Hello " + name + " your marks in WP are: 99!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }

  else if (name === "Animesh" && usr === "2") {
         
      var message = "<h2>Hello " + name + " your marks in IoT are: 98!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }

  else if (name === "Animesh" && usr === "3") {
         
      var message = "<h2>Hello " + name + " your marks in Maths are: 97!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }

  else if (name === "Yash" && usr === "1") {
         
      var message = "<h2>Hello " + name + " your marks in WP are: 96!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }

  else if (name === "Yash" && usr === "2") {
         
      var message = "<h2>Hello " + name + " your marks in IoT are: 95!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }


  else if (name === "Yash" && usr === "3") {
         
      var message = "<h2>Hello " + name + " your marks in Maths are: 94!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }

  else {

    var message = "Invalid name";

      document
        .getElementById("content")
        .innerHTML = message;
  }


          
 } 

}

/*
else if (name === "Animesh" && usr === m2) {
         
      var message = "<h2>Hello2 " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;
      }
    }

*/



// document.querySelector("button")
//   .onclick = sayHello;