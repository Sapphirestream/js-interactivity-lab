console.log('hello world');

document.querySelector('form').addEventListener('submit', addMovie);

const message = document.querySelector("#message");

function addMovie(e) {
    e.preventDefault();

    const inputField = document.querySelector('input');

    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    movie.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteMovie);

    document.querySelector('ul').appendChild(movie);

    inputField.value = '';

}

function deleteMovie(e){

    const movieName = e.target.previousSibling.textContent

    e.target.parentNode.remove();
    message.textContent = `${movieName} Deleted!`;

    revealMessage();
}

function crossOffMovie(e){
    e.target.classList.toggle('checked')

    if(e.target.classList.contains('checked') === true){
        message.textContent = `${e.target.textContent} Watched!` ;
    } else {
        message.textContent =  `${e.target.textContent} Added Back!`;
    }

    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide');
     setTimeout(() => {message.classList.add('hide')}, 1000)
}