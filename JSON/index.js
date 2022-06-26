fetch("https://api.github/demo/grades.json", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    grade: 18
  })
})
.then(response => response.json())
.then(data => {
  console.log(data); // read server response
});