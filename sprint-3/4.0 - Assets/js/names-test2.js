let button = document.querySelector('#Btn');
let table = document.querySelector('.comments-table');

// Authentification 
const authentificationKey = axios.get('https://project-1-api.herokuapp.com/register')

authentificationKey.then(function(response){
    const authkey = response.data.api_key;
})


const commentsTable = [];

// Add new information to a new comment 
let newComment= {
    nameIcon: '',
    commentDate:'',
    userName: '',
    commentInput: ''
};

let newCommentName = '';
let newCommentInput ='';

// Add new information to a new comment Object

let comArr = axios.get('https://project-1-api.herokuapp.com/comments?api_key=authkey')
    
    comArr.then(function(response){
        let comArrRes = (response.data);
        for (let i = 0; i<comArrRes.length; i++){
        function createComment (){
        newCommentName = response.data[i].name
        newComment.userName = newCommentName;
        newCommentInput = response.data[i].comment
        newComment.commentInput= newCommentInput;
        newComment.nameIcon = '';
        newComment.commentDate = response.data[i].timestamp;

        newComment= {
        nameIcon: newComment.nameIcon,
        commentDate: newComment.commentDate ,
        userName: newComment.userName,
        commentInput: newComment.commentInput
    };   
    commentsTable.unshift(newComment);
   }
}


 function displayComments() {  
    for (let i= 0; i< commentsTable.length; i++) {
    let published = document.createElement('div');
    let image = document.createElement('div');
    let body = document.createElement('div');
    let nameElement = document.createElement('div');
    let commentElement = document.createElement('div');
    let dateElement = document.createElement('div');
    let imageElement = document.createElement('div');
    
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
    published.classList.add('comments__published')
    nameElement.classList.add('username')
    commentElement.classList.add('input')
    dateElement.classList.add('date')
    imageElement.classList.add('comments--icon')
    image.classList.add('comments__img')
    body.classList.add('comments__body');

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

window.onload = displayComments(commentsTable);

document.getElementById("Btn").addEventListener("click", submit) 

function submit(event) {
    // prevent the webpage from reloading
    event.preventDefault();
    createComment();
    document.querySelector('.comments-table').innerHTML = '';
    displayComments();
    document.getElementById("myForm").reset();
    }

    })