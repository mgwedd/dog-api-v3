'use strict';

function getDogBreed() {
    $('input[type="submit"]').on('click', event => {
        event.preventDefault();
        getAndLogDogs($('input[type="text"]').val());
    });
}

function getAndLogDogs(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseObj => console.image(responseObj.message))
    .catch(error => console.log(`Aww, I couldn\'t find any ${dogBreed} dog images. Try another breed!`));
}

$(getDogBreed());