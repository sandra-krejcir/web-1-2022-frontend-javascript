// async function postData() {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       jodel: "Im too old for this ****",
//     }),
//   });
//   console.log(response);

//   const body = await response.json();
//   console.log(body);
// }

async function getData() {
  const response = await fetch(url);
  const body = await response.json();
  console.log(body);

  const array = [];
  for (let key in body) {
    array.push(body[key]);
  }
  console.log(array);

  let temp = "";
  for (key in array[0]) {
    console.log(key);
    const wierdObject = array[0];
    temp += wierdObject[key];
  }
  console.log(temp);

  array.map((wierdObject) => {
    for (key in wierdObject) {
    }
  });
}
