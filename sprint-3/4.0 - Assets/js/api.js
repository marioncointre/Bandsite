        // document.querySelector('.comments-table').innerHTML = JSON.stringify(comArrRes);



// Authentification 
const authentificationKey = axios.get('https://project-1-api.herokuapp.com/register')

authentificationKey.then(function(response){
    const authkey = response.data.api_key;
})

//GET Array of comments

const table = document.querySelector('.comments-table');
let comArrResNames= [];



let comArr = axios.get('https://project-1-api.herokuapp.com/comments?api_key=authkey')
    
    comArr.then(function(response){
        let comArrRes = (response.data)

        for (let i = 0; i<comArrRes.length; i++){
        let comArrResNames = JSON.stringify(response.data[i].name)
        console.log(comArrResNames)
        }

        for (let i = 0; i<comArrRes.length; i++){
            let comArrResBody = JSON.stringify(response.data[i].comment)
            console.log(comArrResBody)
            }

        for (let i = 0; i<comArrRes.length; i++){
            let comArrResDate = JSON.stringify(response.data[i].timestamp)
            console.log(comArrResDate)
            }


        function displayComments() {  
        for (let i= 0; i<comArrResNames.length; i++) {
        let published = document.createElement('div');
        let image = document.createElement('div');
        let body = document.createElement('div');
        let nameElement = document.createElement('div');
        let commentElement = document.createElement('div');
        let dateElement = document.createElement('div');
        let imageElement = document.createElement('div');
        
        // declare variables
    
        let userName = comArrResNames[i].userName;
        // let commentInput = comArrRes[i].commentInput;
        // let commentDate = comArrRes[i].commentDate;
        // let nameIcon = comArrRes[i].nameIcon;
    
        // adding value to variable
        // imageElement.innerText = nameIcon;
        nameElement.innerText = userName;
        // dateElement.innerText = commentDate;
        // commentElement.innerText = commentInput;
    
    //   newElement.classList.add('item')
        // published.classList.add('comments__published')
        nameElement.classList.add('username')
        // commentElement.classList.add('input')
        // dateElement.classList.add('date')
        // imageElement.classList.add('comments--icon')
        // image.classList.add('comments__img')
        // body.classList.add('comments__body');
    
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
    displayComments();
})






















// document.querySelector('#copyright').innerHTML = response.data.copyright
// document.querySelector('#explanation').innerHTML = response.data.explanation
// document.querySelector('#title').innerHTML = response.data.title

// if(response.data.media_type === 'image') {
//   document.querySelector('#img_id').setAttribute('src', response.data.url)
//   document.querySelector('#vid_id').style.display = 'none'
// } else {
//   document.querySelector('#vid_id').setAttribute('src', response.data.url)
//   document.querySelector('#img_id').style.display = 'none'
// }

// document.querySelector('#responseObject').innerHTML = JSON.stringify(response)













// GET Show dates
// let showdatesArray = axios.get('https://project-1-api.herokuapp.com/showdates?api_key=authkey')

// comArr.then(function(response){
//     console.log(response.data)
// })

//POST Array of comments


// PUT /comments/:commentId/likes


// DELETE /comments/:commentId

