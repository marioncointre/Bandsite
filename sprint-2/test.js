

// Mise en place des événements

(function() { // Utilisation d'une IIFE pour éviter les variables globales.

    var myForm = document.getElementById('myForm'),
        inputs = document.querySelectorAll('input[name=Name], input[name=Comment]'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }

    myForm.addEventListener('submit', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            alert('Le formulaire est bien rempli.');
        }

        e.preventDefault();

    });

    myForm.addEventListener('reset', function() {

        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }
    });

})();





// // var arrayComments =["They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.","Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!","How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"]

// // displayComment() {
// //     console.log(arrayComments);
// // }


// var comments = {
//    comment1: {
//         nameIcon: 'src',
//         commentDate:'12/18/2018',
//         userName:'Micheal Lyons',
//         commentInput:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
//     },
//     comment2: {
//         nameIcon: 'src',
//         commentDate:'12/18/2018',
//         userName:'Gary Wong',
//         commentInput:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
//     },
//     comment3 : {
//         nameIcon: 'src',
//         commentDate:'11/15/2018',
//         userName:'Theodore Duncan',
//         commentInput:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
//     }

// } 


// for (var i = 0; i<comments.length; i++ ) {
//     var newComment = document.createComment();
//     var newCommentName = document.getElementsByName('Name')
//     var newCommentInput = document.getElementsByName('Comment')

//     document.querySelector('.comments__published').appendChild(newComment);
// }

// document.querySelector('.comments__published').appendChild(comments);



// //on form submission -> get name + comment
// // for each form submission, get comment and list it in comment array