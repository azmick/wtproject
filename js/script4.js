$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#search').val();
		searchSpotify(searchTerm);
	});
});

function searchSpotify(searchTerm) {
	var url = 'https://api.spotify.com/v1/search?type=track&q=' + searchTerm;
	$.ajax({
		url: url,
		headers: {
			'Authorization': 'Bearer ' + ACCESS_TOKEN
		},
		success: function(response) {
			console.log(response);
			// handle response and display results
		},
		error: function(xhr, status, error) {
			console.log(xhr.responseText);
		}
	});
}
