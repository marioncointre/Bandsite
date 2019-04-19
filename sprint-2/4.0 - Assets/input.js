
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
    }
];

// Add new information to a new comment 
var newComment= {
    nameIcon: '',
    commentDate:'',
    userName: '',
    commentInput: ''
}

// Add new information to a new comment Object

function createComment (){
    var newCommentName = document.getElementById("Name").value;
    newComment.userName = newCommentName;
    var newCommentInput = document.getElementById('Comment').value;
    newComment.commentInput = newCommentInput;
    return newComment;
}

// adding comment object to array
function addComment(){
    commentsTable.unshift(createComment());
}

var button = document.querySelector('#Btn')
button.onclick = function(event) {
	// prevent the webpage from reloading
    event.preventDefault();
    createComment();
    addComment();
    alert(commentsTable);
    document.querySelector('.comments__published').innerText = commentsTable;

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

