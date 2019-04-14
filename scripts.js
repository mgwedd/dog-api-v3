'use strict';

function getDogBreed() {
    $('input[type="submit"]').on('click', event => {
        event.preventDefault();
        $('#js-image-results-list').empty();
        getAndRenderDog($('input[type="text"]').val());
    });
}

function getAndRenderDog(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseObj => renderImage(responseObj))
    .catch(error => console.log(`Aww, I couldn\'t find any ${dogBreed} images. Try another breed!`));
}

function renderImage(responseObj) {
    $('#js-image-results-list').append(`<li><img src="${responseObj.message}" class="results-img"></li>`);
    $('.results-container').removeClass('hidden');
}

$(getDogBreed());