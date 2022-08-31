let count = 0;
/* 1st exercise:
  Create a button with an onclick listener.
    The onclick function should increase a count number, and console log it
*/
function clicked() {
  console.log("i have been clicked");
  //count = count + 1
  // Shortened:
  count = count + increaseAmount();
  console.log(count);
  const element = document.querySelector("h1");

  //element.textContent = "New title";
  // element.innerHTML = "New title";
  // Solution 1
  // element.textContent = "Your current count: " + count;

  // Solution 2:
  const span = document.querySelector("#count-amount");
  span.textContent = count;
}

/* Solo Exercise
  Add a "load" event listener to the window.
  So you can greet your users welcome with an alert
*/
window.addEventListener("load", () => {
  alert("Hello");
});

/* 2nd Exercise:
  Create a h1 title with the text "Your current number".
  add a double click listener programmatically to the h1.
  So it resets the count.
*/

/* 3th Exercise:
  Get the h1, and append the count
*/

/* 4th Exercise:
  Create an input field type = number,
  allow the user to control how much we increase pr. time
*/
function increaseAmount() {
  const increment = document.querySelector("#increment-amount").value;
  console.log(increment);
  // Solution 1: return Number(increment)
  // Solution 2
  return +increment;
}
