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
            // var datNames = [];
            // datNames = comArrResNames.split('')
            // return datNames
        }

        function displayComments(){ 

            for (var j= 0; j<comArrRes.length; j++){

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
                // timeDate(comArrResDate[i]);
                let published = document.createElement('div');
                let body = document.createElement('div');
                let dateElement = document.createElement('div');
                dateElement.innerText = comArrResDate[i]
                dateElement.classList.add('date')
                body.appendChild(dateElement);
                published.appendChild(body);
                table.appendChild(published);
            }
        }
        }
        displayComments();    
    })
