/* Traditional */
/*
function fetchData(callback) {
  setTimeout(function () {
    callback("Data received");
  }, 1000);
}

fetchData(function (data) {
  console.log(data); // "Data received"
});
*/

// Old Style uses .then to execute what happens after the original call completes
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

fetchData().then((data) => console.log(data)); // "Data received"

// New Style will prefix await to indicate this must complete before it's used in the future.
const fetchDataAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

async function getData() {
  const data = await fetchDataAsync();
  console.log(data); // "Data received"
}

getData();
