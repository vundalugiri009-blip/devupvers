
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault();  // stops page reload

      const name = document.getElementById("nameInput").value;
      const age = document.getElementById("ageInput").value;

      console.log("Name:", name);
      console.log("Age:", age);

      alert(`Name: ${name}\nAge: ${age}`);
    });
  