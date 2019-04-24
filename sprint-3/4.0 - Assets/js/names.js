        // document.querySelector('.comments-table').innerHTML = JSON.stringify(comArrRes);



// Authentification 
const authentificationKey = axios.get('https://project-1-api.herokuapp.com/register')

authentificationKey.then(function(response){
    const authkey = response.data.api_key;
})

//GET Array of comments

const table = document.querySelector('.comments-table');
let comArrResNames = [];
let comArrResBody = [];
let comArrResDate = [];


let comArr = axios.get('https://project-1-api.herokuapp.com/comments?api_key=authkey')
    
    comArr.then(function(response){
        let comArrRes = (response.data)
        for (let i = 0; i<comArrRes.length; i++){
            comArrResNames.push(response.data[i].name)
            comArrResBody.push(response.data[i].comment)       
            comArrResDate.push(response.data[i].timestamp)              
    }
    })
    comArr.then(function displayComments(){  
        for (let i= 0; i<comArrResNames.length; i++) {
        let published = document.createElement('div');
        let body = document.createElement('div');
        let nameElement = document.createElement('div');        
        nameElement.innerText = comArrResNames[i]
        nameElement.classList.add('username')
    
        body.appendChild(nameElement);
        published.appendChild(body);
        table.appendChild(published);
        }

        for (let i=0; i<comArrResBody.length; i++){
        let published = document.createElement('div');
        let body = document.createElement('div');
        let commentElement = document.createElement('div');
        commentElement.innerText = comArrResBody[i]
        commentElement.classList.add('input')
    
        body.appendChild(commentElement);
        published.appendChild(body);
        table.appendChild(published);

        }

        for (let i=0; i<comArrResDate.length; i++){

            let published = document.createElement('div');
            let body = document.createElement('div');
            let dateElement = document.createElement('div');
            dateElement.innerText = comArrResDate[i]
            dateElement.classList.add('date')
            body.appendChild(dateElement);
            published.appendChild(body);
            table.appendChild(published);
    
            }
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

