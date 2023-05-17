var client_id = "dba62b42d0d844dfbe0c801811830bb1";
var client_secret = '';
var redirect_uri = "http://localhost/ilgialanlarim.html";
const AUTHORIZE = "https://accounts.spotify.com/authorize";


function onPageLoad(){
	if( window.location.search.length > 0){
		handleRedirect();
	}
}

function handleRedirect(){
		let code = getCode();
		fetchAccessToken ( code );
}

function fetchAccessToken( code ) {
	let body = "grant_type = authorization_code";
	body += "&code=" + code;
	body += "&redirect_uri" + encodeURI(redirect_uri);
	body += "&client_id=" + client_id;
	body += "&client_secret" + client_secret;
	callAuthorizationApi(body);
}

function callAuthorizationApi (body) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", TOKEN, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}

function getCode(){
	let code = null;
	const queryString = window.location.search;
	if( queryString.length > 0 ){
		const urlParams = new URLSearchParams(queryString);
		code = urlParams.get('code')
	}
	return code;
}

function requestAuthorization(){
	client_id=document.getElementById("clientId").value;
	client_secret=document.getElementById("clientSecret").value;
	localStorage.setItem("client_id", client_id);
	localStorage.setItem("client_secret", client_secret);

	let url = AUTHORIZE;
	url += "?client_id=" + client_id;
	url += "&response_type=code";
	url += "&redirect_uri=" + encodeURI(redirect_uri);
	url += "&show_dialog=true";
	url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
	window.location.href = url;

}