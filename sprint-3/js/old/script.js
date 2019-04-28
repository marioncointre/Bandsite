let button = document.querySelector('#Btn');
let table = document.querySelector('.comments-table');

const commentsTable = [
  {
   nameIcon: '',
   commentDate:'12/18/2018',
   userName:'Micheal Lyons',
   commentInput:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
   },
   {
   nameIcon: '',
   commentDate:'12/18/2018',
   userName:'Gary Wong',
   commentInput:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
   },
   {
   nameIcon: '',
   commentDate:'11/15/2018',
   userName:'Theodore Duncan',
   commentInput:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
   }
];

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
function createComment (){
        newCommentName = document.querySelector('#Name').value;
        newComment.userName = newCommentName;
        newCommentInput = document.querySelector('#Comment').value;
        newComment.commentInput= newCommentInput;
        newComment.nameIcon = '';
        newComment.commentDate = today;

        newComment= {
        nameIcon: newComment.nameIcon,
        commentDate: newComment.commentDate ,
        userName: newComment.userName,
        commentInput: newComment.commentInput
    };   
    commentsTable.unshift(newComment);
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