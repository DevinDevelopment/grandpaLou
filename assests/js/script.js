var generateJokeButton = document.querySelector("#generateJoke");
var generateQuoteButton = document.querySelector("#generateQuote");

var jokeLocation = document.querySelector("#jokes")
var quoteLocation = document.querySelector("#quotes")

async function getJokesAPI(){
    // var requestUrl = "https://dad-jokes.p.rapidapi.com/random/joke&appid=5dfde6aa4amsh622098f611b181cp1a3319jsnb5045d2ad2c8";

    // fetch(requestUrl)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(data){
    //         console.log(data)
    //     })

    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '5dfde6aa4amsh622098f611b181cp1a3319jsnb5045d2ad2c8',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
    };

    try {
    	const response = await fetch(url, options);
    	var result = await response.text();
        result = JSON.parse(result);
    	console.log(result);
        jokeLocation.textContent = (result.body[0].setup + "\n \n" + result.body[0].punchline);
        localStorage.setItem("setup", result.body[0].setup);
        localStorage.setItem("punchline", result.body[0].punchline);


    } catch (error) {
    	console.error(error);
    }  
}

var pastJokeSetup = localStorage.getItem("setup");
var pastJokePunchline = localStorage.getItem("punchline");
jokeLocation.textContent = (pastJokeSetup + "\n \n" + pastJokePunchline);
generateJokeButton.addEventListener("click", getJokesAPI);