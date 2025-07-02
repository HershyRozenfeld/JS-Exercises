fetch("https:/jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  body: JSON.stringify({ name: "Hershy" }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    console.log(res);
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => console.log(err));

// (1)
function getUser(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(`User name: ${data.name}`);
    });
}
getUser(1);

// (2)
function getPost(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(`Post title: ${data.title}`);
    });
}
getPost(1);

// (3)
function getUserEmail(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(`User's email: ${data.email}`);
    });
}
getUserEmail(1);

// (4)
function listUserTodos(userId) {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(`User ${userId} has ${data.length} tasks`);
    });
}
listUserTodos(1);

// (5)
function checkPostExists(postId) {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${postId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data < 1) throw new Error("No posts found for this user");
      console.log("The post exists.");
    })
    .catch((err) => {
      console.error(err, err.massage);
    });
}
checkPostExists(8);

// (6)
function fetchWithDelay(url, delay) {
  setTimeout(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const strData = JSON.stringify(data);
        const partData =
          strData.length > 50 ? strData.slice(0, 50) + "..." : strData;
        console.log(partData);
    });
  }, delay);
}
fetchWithDelay("https://jsonplaceholder.typicode.com/todos?userId=2", 3000);

// (7)
function showKeys(url){
    fetch(url).then(res => {
        return res.json();
    }).then(data => {
        if (Array.isArray(data) && data.length > 0){
            const keys = Object.keys(data[0]);
            console.log(`Keys:`,keys);
        }
        else if (typeof data === 'object' && data !== null){
            const keys = Object.keys(data);
            console.log(`Keys:`,keys);
        }
    })
}
showKeys('https://jsonplaceholder.typicode.com/todos?userId=2')