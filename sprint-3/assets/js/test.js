let button = document.querySelector("#Btn");
let table = document.querySelector(".comments-table");

// Authentification
const authentificationKey = axios.get(
  "https://project-1-api.herokuapp.com/register"
);

authentificationKey.then(function(response) {
  const authkey = response.data.api_key;
});

let commentsTable = [];

// date function
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = dd + "/" + mm + "/" + yyyy;

//Get array of comments from API
let comArr = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=authkey"
);
comArr.then(function(response) {
  let comArrRes = response.data;

  // format API array in correct form
  function transformComment() {
    for (let i = 0; i < comArrRes.length; i++) {
      // loop through array to transform elements as objects

      // Add new information to a new comment
      let newComment = {
        nameIcon: "",
        commentDate: "",
        userName: "",
        commentInput: ""
      };

      newComment.userName = response.data[i].name;
      newComment.commentInput = response.data[i].comment;
      newComment.nameIcon = "";
      newComment.commentDate = response.data[i].timestamp;

      commentsTable.push(newComment);
    }
  }
  function displayComments() {
    for (let i = 0; i < commentsTable.length; i++) {
      let published = document.createElement("div");
      let image = document.createElement("div");
      let body = document.createElement("div");
      let nameElement = document.createElement("div");
      let commentElement = document.createElement("div");
      let dateElement = document.createElement("div");
      let imageElement = document.createElement("div");

      // declare variables
      let userName = commentsTable[i].userName;
      let commentInput = commentsTable[i].commentInput;
      let commentDate = commentsTable[i].commentDate;
      let nameIcon = commentsTable[i].nameIcon;

      // adding value to variable
      imageElement.innerText = nameIcon;
      nameElement.innerText = userName;
      dateElement.innerText = commentDate;
      commentElement.innerText = commentInput;

      //   newElement.classList.add('item')
      published.classList.add("comments__published");
      nameElement.classList.add("username");
      commentElement.classList.add("input");
      dateElement.classList.add("date");
      imageElement.classList.add("comments--icon");
      image.classList.add("comments__img");
      body.classList.add("comments__body");

      //   comments.appendChild(newElement)
      body.appendChild(nameElement);
      body.appendChild(dateElement);
      body.appendChild(commentElement);
      image.appendChild(imageElement);
      published.appendChild(image);
      published.appendChild(body);
      table.appendChild(published);
    }
  }
  window.document.onload = displayComments();

  // Create comment with form

  function createComment(name, comment) {
    axios
      .post("https://project-1-api.herokuapp.com/comments?api_key=authkey", {
        name: name,
        comment: comment
      })

      .then(result => {
        displayComments();
      })
      .catch(error => {
        console.log("404 error");
      });
  }

  document.getElementById("Btn").addEventListener("click", submit);

  function submit(event) {
    event.preventDefault(); // prevent the webpage from reloading
    let inputName = document.querySelector("#Name").value;
    let inputComment = document.querySelector("#Comment").value;
    if (inputName !== "" && inputComment !== "") {
      createComment(inputName, inputComment);
      transformComment();
      document.getElementById("myForm").reset();
    } else {
      alert("The comment and name inputs are empty");
    }
  }
});
