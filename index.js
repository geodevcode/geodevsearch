let searching = document.getElementById('search_result')
let headline = document.querySelector('h3')
let navright = document.querySelector('.nav-right')
let button = document.getElementsByTagName('button')[0];
let button2 = document.getElementsByTagName('button')[1];
// let params = document.getElementById('#params');


$('#search_icon').on('click', function(){
    search()
})

$('#params').on('keyup', function(event){
    if(event.keyCode === 13){
        search();
    }
    
})

function search(){
    let keyword  = $('#params').val();
    if(keyword === ''){
        alert('please type your search');
        return false;
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
        for(let i =0; i<data.length; i++){
            $('#results').append(`
                <li class="word-meaning">
                    <h3 id="word">${data[i].title}</h3>
                    <p  id="meaning">${data[i].body}</p>
                </li>
            `)
        }
    })
}


