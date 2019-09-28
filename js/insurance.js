 function calculateInsurance(event) {
      name = document.getElementById("username").value;
      console.log(name);
      age = document.getElementById("alter").value;
      console.log(age);
      country = document.getElementById("country").value;
      console.log(country);
      horsepower = document.getElementById("horsepower").value;
      console.log(horsepower);
    
    if (country == "austria") {
      insurance = Number(horsepower) * 100 / Number(age) + 50;
      insurance = Math.round(insurance);
      console.log(insurance);
      document.getElementById("panel").innerHTML = name + ", your insurance costs " + insurance + " €";
    } else if (country == "hungary") {
      insurance = Number(horsepower) * 120 / Number(age) + 100;
      insurance = Math.round(insurance);
      console.log(insurance);
      document.getElementById("panel").innerHTML = name + ", your insurance costs " + insurance + " €";
    }else {
      insurance = (parseInt(horsepower) * (150 / parseInt(age) +3)) + 50;
      insurance = Math.round(insurance);
      console.log(insurance);
      document.getElementById("panel").innerHTML = name + ", your insurance costs " + insurance + " €";

    }

    } 