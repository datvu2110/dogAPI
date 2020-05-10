

function handleSubmit() {
  	$("#submit-pic").on('submit', function(event) {
    	event.preventDefault();
    	$("#pics").empty();
    	getImage();
  	});
}

function getImage() {
	let input = $("#enter").val();
	const url = 'https://dog.ceo/api/breeds/image/random/' + input;
	const options = {method: 'GET'};
	fetch(url, options)
	.then(response => response.json())
	.then(responseJson => displayDogs(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function displayDogs(responseJson){
	for (let i = 0; i< responseJson.message.length; i++){
		$('#pics').append(`<img src="${responseJson.message[i]}" height="20%" alt="Dog">`);
	}
}

$(function() {
  console.log('App loaded!');
  handleSubmit();
});