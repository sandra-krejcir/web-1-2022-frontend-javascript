const yourId = "";
const url = `https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/web-update-project/${yourId}.json`;

async function getData() {
  const response = await fetch(url);
  const body = await response.json();
  return transformToArray(body);
}

/**
 * A function that transform the Firebase Object in Object structure to Objects in Array.
 *
 * OBS! This is only needed due to the way Firebase works. OBS!
 *
 * @param {Object} data
 * @returns Array
 */
function transformToArray(data) {
  const toReturn = [];
  for (key in data) {
    const temp = {
      ...data[key],
      id: key,
    };
    toReturn.push(temp);
  }
  return toReturn;
}

async function postData(contact) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(contact),
  });
  return response;
}
