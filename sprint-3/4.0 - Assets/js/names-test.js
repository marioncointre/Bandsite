        // document.querySelector('.comments-table').innerHTML = JSON.stringify(comArrRes);



// Authentification 
const authentificationKey = axios.get('https://project-1-api.herokuapp.com/register')

authentificationKey.then(function(response){
    const authkey = response.data.api_key;
})


let button = document.querySelector('#Btn');

const commentsTable = [
  {
   nameIcon: '',
   commentDate:'12/18/2018',
   userName:'Test1',
   commentInput:'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
   },
   {
   nameIcon: '',
   commentDate:'12/18/2018',
   userName:'Test 2',
   commentInput:'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
   },
   {
   nameIcon: '',
   commentDate:'11/15/2018',
   userName:'Test 3',
   commentInput:'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
   }
];

//GET Array of comments

const table = document.querySelector('.comments-table');
let comArrResNames = [];
let comArrResBody = [];
let comArrResDate = [];

let comArr = axios.get('https://project-1-api.herokuapp.com/comments?api_key=authkey')
    
    comArr.then(function(response){
        let comArrRes = (response.data);
        for (let i = 0; i<comArrRes.length; i++){
            commentsTable.userName =response.data[i].name

            // comArrResNames.push(response.data[i].name)
            // comArrResBody.push(response.data[i].comment)       
            // comArrResDate.push(response.data[i].timestamp)   
            console.log(commentsTable)
        }           


    })

