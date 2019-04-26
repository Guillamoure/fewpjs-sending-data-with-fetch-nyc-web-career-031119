// Add your code here
function submitData(name, email){
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
   })
   .then(function(response) {
    return response.json();
  })
  .then(function(object) {

    document.querySelector("body").innerHTML = `This guys name is ${object.name}. His private email is ${object.email}...`
    document.querySelector("body").innerHTML = `${object.id}`

      })
      .catch(function(error){
        alert("Unauthorized Access")
        let body = document.querySelector("body")
        let p = document.createElement('p')
        p.innerHTML = `${"Unauthorized Access"}`
        body.appendChild(p)
      })
}

submitData("Ratman", "WayneManor@Gootham.org")
