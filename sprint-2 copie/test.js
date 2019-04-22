
/* 
1 - Declare array with 3 existing comments
on window load, show array of comments
each comment is an object (containing name, date, image and comment)
*/

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




/*
2 - Loop through array to:
    - insert object into dom
    - style object in dom
*/

function displayComments() {
    for (var i= 0; i< commentsTable.length; i++) {
    var newElement = document.createElement('div');
    // declare variables
    let userName = commentsTable.userName;
    let commentInput = commentsTable.commentInput;
    let commentDate = commentsTable.commentDate;
    let nameIcon = commentsTable.nameIcon;

//   newElement.classList.add('item')
    nameElement.classList.add('username')
    commentElement.classList.add('commentinput')
    dateElement.classList.add('commentdate')
    imageElement.classList.add('nameicon')

//   comments.appendChild(newElement)
    table.appendChild(nameElement);
    table.appendChild(commentElement);
    table.appendChild(dateElement);
    table.appendChild(imageElement);

    }

}


/*
On click:
1- create new comment object
2 - add object to array
3 - loop through array to display in dom
4 - refresh form
*/