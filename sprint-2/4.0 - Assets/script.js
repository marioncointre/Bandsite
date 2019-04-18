
var commentsTable = [
   comment1= {
        nameIcon: 'src',
        commentDate:'12/18/2018',
        userName:'Micheal Lyons',
        commentInput:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    comment2= {
        nameIcon: 'src',
        commentDate:'12/18/2018',
        userName:'Gary Wong',
        commentInput:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    comment3= {
        nameIcon: 'src',
        commentDate:'11/15/2018',
        userName:'Theodore Duncan',
        commentInput:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }
];


newComment= {
    nameIcon: document.getElementById('userName'),
    commentDate:'',
    userName: '',
    commentInput: document.getElementById('Comment')
}

document.getElementById("Btn").addEventListener("click", displayComment);


function displayComment() {
    commentsTable.push(newComment);
    document.querySelector('.comments__published').appendChild(newComment);
}


