// Assignment 1
// Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
// a delay of 1 second.

function sumAsync(firstNum, secondNum, cb) {
  setTimeout(() => {
    const sum = firstNum + secondNum;
    cb(sum);
  }, 1000);
}

sumAsync(1, 2, (result) => {
  console.log(result);
});

// Assignment 2
// Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
// "Data fetched successfully."

function getData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully.");
    }, 2000);
  });

  return promise;
}

getData()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

// Assignment 3
// Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
// the parsed JSON response.

// API to be used
// https://jsonplaceholder.typicode.com/todos/1

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// Assignment 4
// Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL (
// https://jsonplaceholder.typicode.com/todos/1 ) and returns the parsed JSON response.

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// Assignment 5
// Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The
// function should multiply each element of the array by 2 and pass the result to the callback.

const inputArr = [1, 2, 3, 4];

function multiplyWithCallback(arr, cb) {
  const newArr = arr.map((element) => {
    return element * 2;
  });

  cb(newArr);
}

multiplyWithCallback(inputArr, (item) => {
  console.log(item);
});

// Assignment 6
// Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
// using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
// fetched. Return an object with user details and posts.

// API to be used
// For User: https://jsonplaceholder.typicode.com/users/${userId}
// For Post: https://jsonplaceholder.typicode.com/posts?userId=${userId}

const userId = "xyz";

function fetchUserDataAndPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((userData) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )
        .then((res) => res.json())
        .then((posts) => ({ user: userData, posts }));
    });
}

fetchUserDataAndPosts(1).then((result) => {
  console.log(result);
});

// Assignment 7
// Write a function fetchMultipleData that takes an array of URLs
// and uses Promise.all() to fetch data from all the
// URLs concurrently. Return an array of responses.

// API to be used
// Change todo id for each API call
// https://jsonplaceholder.typicode.com/todos/1

const arrUrl = [];

for (let i = 1; i <= 4; i++) {
  arrUrl.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}

function fetchMultipleData(arr) {
  const promises = arr.map((url) => {
    return fetch(url).then((res) => res.json());
  });

  return Promise.all(promises);
}

fetchMultipleData(arrUrl).then((res) => {
  console.log(res);
});

// Assignment 8
// Create a function racePromises that takes an array of promises and returns the result of the first promise that
// resolves or rejects. Use Promise.race() to implement this.

function racePromises(promises) {
  return Promise.race(promises);
}

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => reject("Promise 2 rejected"), 500);
});

racePromises([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
