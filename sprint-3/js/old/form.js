 ///////
 const contactForm = document.getElementById("Btn");
 event.preventDefault();

 contactForm.addEventListener("submit", function(event) {

   event.preventDefault();

     var url = "https://project-1-api.herokuapp.com/comments?api_key=authkey";
     var name =  document.querySelector('#Name').value;
     var comment = document.querySelector('#Comment').value;
     var id = document.getElementById("subject").value;
     var likes = document.getElementById("message").value;
     var timestamp = document.getElementById("message").value;

     var data = JSON.stringify({"name": name, "comment": comment, "id": id, "likes": likes, "timestamp" : timestamp});

     request.send(data);

 });  


 ////


 axios

 .post("https://project-1-api.herokuapp.com/comments?api_key=authkey", {
     name: 'name',
     comment: 'comment',
 
    })
    .then(result =>)
