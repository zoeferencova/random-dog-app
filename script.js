'use strict';

function getDogImages() {
	let count = $('input[id="dog-number"]').val();
	fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
		.then(response => response.json())
		.then(responseJson => showImages(responseJson))
		.catch(error => alert('Something went wrong. Try again later.'));
}

function showImages(responseImages) {
	const imageArray = responseImages.message;
	let imageString = '';
	for (let i=0; i < imageArray.length; i++) {
		imageString += `<img src="${imageArray[i]}" alt="image of dog" class="results-img">`
	}
	$('.images').html(imageString);
	$('.results').removeClass('hidden');
}

function watchForm(event) {
	$('form').submit(event => {
		event.preventDefault();
		getDogImages();
	});
}

$(function() {
	console.log('App loaded! Waiting for submit!');
	watchForm();
})