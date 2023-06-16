// Add your code here

function submitData(name, email) {
  const nameEmail = {
    name: name,
    email: email,
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(nameEmail),
  };

  return fetch(`http://localhost:3000/users`, configObject)
    .then((res) => res.json())
    .then((data) => {
      const body = document.querySelector("body");
      body.append(data.id);
    })
    .catch((error) => {
      const body = document.querySelector("body");
      body.append(`${error} message sam`);
    });
}
//1) HOW TO CLEAR MY GOD DAMN USERS JSON SERVER
//2) IS IT APPENDING CORRECTLY, IT JUST DISAPPEARS AND FOR SOME REASON
// IT REFRESHES
// submitData("sam", "sam@gmail.com");
