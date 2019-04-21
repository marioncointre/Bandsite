
// Declaring an array of objects to get comments

var commentsTable = [
   {
    nameIcon: 'src',
    commentDate:'12/18/2018',
    userName:'Micheal Lyons',
    commentInput:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
    nameIcon: 'src',
    commentDate:'12/18/2018',
    userName:'Gary Wong',
    commentInput:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
    nameIcon: 'src',
    commentDate:'11/15/2018',
    userName:'Theodore Duncan',
    commentInput:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
];

    var commentsPublished = "";

    window.onload = function displayComments() {
    document.querySelector('.comments__published').innerHTML = JSON.stringify(commentsTable);
    }


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

var button = document.querySelector('#Btn');

button.onclick = function(event) {
    for (var i=0;i<commentsTable.length;i++){
        var obj=commentsTable[i]

	// prevent the webpage from reloading
    event.preventDefault();
    //create a comment if field is not empty
    createComment();
    //add comment to the array=
    addComment();
    //display array of comment to body:
        JSON.stringify(commentsTable)
}
}

// document.querySelector('.comments__published').innerText = "test"


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