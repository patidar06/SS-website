
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const projectType = document.getElementById("select").value;
  const company = document.getElementById("company").value;
  const description = document.getElementById("description").value;

  if (name === "") {
    alert("Please fill your Name");
    return;
  }

  if (email === "") {
    alert("Please fill your Email");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid Email Address");
    return;
  }

   if (company === "") {
    alert("Please fill your company");
    return;
  }


  if (projectType === "") {
    alert("Please select a Project Type");
    return;
  }

  if (description === "") {
    alert("Please describe your project");
    return;
  }

  const formData = {
  name: name,
  email: email,
  projectType: projectType,
  company: company,
  description: description
  };

  localStorage.setItem("alldata", JSON.stringify(formData));

  alert("Sent successfully!");


  document.getElementById("form").reset();
});
