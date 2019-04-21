let commentsTable = [
    {
        userName: 'test',
        userComment: 'comment'
},
{
    userName: 'test2',
    userComment: 'comment2'
},
{
    userName: 'test3',
    userComment: 'comment3'
}
];

let newCommentName = '';
let newCommentInput = '';


function createComment() {
    newCommentName = document.getElementById("Name").value;
    newComment.userName = newCommentName;
    newCommentInput = document.getElementById("Comment").value;
    newComment.commentInput = newCommentInput;
};