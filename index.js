// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(function (error) {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  