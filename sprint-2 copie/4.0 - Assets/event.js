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
 
 let newComment = {
     nameIcon: '',
     commentDate: '',
     userName: '',
     commentInput: ''
 }
 var newCommentName = '';
 var newCommentInput = '';
 var commentsTable = [];
 
 function createComment() {
     newCommentName = document.getElementById("Name").value;
     newComment.userName = newCommentName;
     newCommentInput = document.getElementById("Comment").value;
     newComment.commentInput = newCommentInput;
 }
 
 function addComment() {
     commentsTable.unshift(newComment);
 }
 var button = document.querySelector('#Btn')
 button.onclick = function (event) {
   for (var i=0;i<commentsTable.length;i++){
 var obj=commentsTable[i]
 }
     // prevent the webpage from reloading
     event.preventDefault();
     createComment();
     addComment();
     //alert(newComment);
     console.log(newComment, commentsTable)
     document.querySelector('.comments__published').textContent = JSON.stringify(commentsTable);
     document.getElementById("myForm").reset();
     document.querySelector('.comments__published').innerHTML = JSON.stringify(commentsTable);

 
   }