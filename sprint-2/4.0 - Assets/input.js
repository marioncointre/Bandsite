
// Declaring an array of objects to get comments

var commentsTable = [
    {
        nameIcon: '',
        commentDate: '',
        userName:'test',
        commentInput:'test'
    },
    {
        nameIcon: '',
        commentDate:'',
        userName: '',
        commentInput:''
    },
    {
        nameIcon: '',
        commentDate:'',
        userName:'',
        commentInput:''
    }
];

    var commentsPublished = "";

// Add new information to a new comment 
var newComment= {
    nameIcon: '',
    commentDate:'',
    userName: '',
    commentInput: ''
}
var newCommentName = '';
var newCommentInput ='';

// Add new information to a new comment Object
function createComment (){
    newCommentName = document.getElementById("Name").value;
    newComment.userName = newCommentName;
    newCommentInput = document.getElementById("Comment").value;
    newComment.commentInput = newCommentInput;
}

// adding comment object to array
function addComment(){
    commentsTable.unshift(newComment);
}

var button = document.querySelector('#Btn')

// Displaying array in div
function test() {
    for (var i = 0; i < commentsTable.length; i++) {
        commentsPublished+="<div class='comments__published--name'>"+commentsTable[i].name+"</div>";
        commentsPublished+="<td>"+commentsTable[i].age+"</td>";
        commentsPublished+="<div class='comments__published--comment'>"+commentsTable[i].email+"</div>";
    }
 document.getElementById("comments__published").innerHTML = commentsPublished;
    }
button.onclick = function(event) {
	// prevent the webpage from reloading
    event.preventDefault();
    //create a comment if field is not empty
    createComment();
    //add comment to the array=
    addComment();
    test();
    commentsTable.push(newComment);
    //display array of comment to body:
        event.preventDefault();
        JSON.stringify(commentsTable)
}



// function addComment(){

//     // if( document.getElementById("Name").value !== 0){

//     var newCommentName = document.getElementById("Name").value;
//     // console.log(newCommentName);

//     // var newCommentInput = document.getElementById("Comment").value;
//     // console.log(newCommentInput);

//     comments.unshift(newCommentName);
// }

// var button = document.querySelector('#Btn')
// button.onclick = function(event) {
// 	// prevent the webpage from reloading
//     event.preventDefault();
//  return addComment;    
// }

// //document.querySelector('.comments__published').innerText = "test"

