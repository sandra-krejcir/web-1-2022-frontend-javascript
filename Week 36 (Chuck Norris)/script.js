// Url constant for our API.
const url = "https://api.chucknorris.io/jokes/random";

// Using the async/await strategy
async function getNewJoke() {
  console.log("hello");
  // First async action
  const result = await fetch(url);
  console.log(result);
  // Second async action
  const body = await result.json();
  console.log(body);
}

// Using Promise chain strategy
function getNewJokeWithPromises() {
  fetch(url) //First async action
    .then(function (response) {
      console.log(response);
      return response.json();
    }) // Second async action
    .then(function (body) {
      console.log(body);
      // get the value from body and write it to the h1
    });
}

// Creates a date with todays date and time
const today = new Date();
console.log(today.getMonth());

// Creates a date with a specific date in mind.
// Format: yyyy-MM-dd (year-month-day)
const someDate = new Date("2022-01-01");
