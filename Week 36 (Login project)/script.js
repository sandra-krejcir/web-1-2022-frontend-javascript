document.querySelector("#my_login_form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const pass = document.querySelector("#pass").value;
  const verify = document.querySelector("#verify").value;

  //
  document.querySelector("#verify").classList.add();
  document.querySelector("#verify").classList.toggle();
  document.querySelector("#verify").classList.remove();
});
