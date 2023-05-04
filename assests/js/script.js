var generateJokeButton = document.querySelector("#generateJoke");
var generateQuoteButton = document.querySelector("#generateQuote");

var jokeLocation = document.querySelector("#jokes");
var quoteLocation = document
.querySelector("#quotes");

async function getJokesAPI() {
  const url = "https://dad-jokes.p.rapidapi.com/random/joke";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "625e074f94mshf6af45982cd541bp1cb93cjsncf2e44e982c3",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    var result = await response.text();
    result = JSON.parse(result);
    
    jokeLocation.textContent = result.body[0].setup + "\n \n" + result.body[0].punchline;
    localStorage.setItem("setup", result.body[0].setup);
    localStorage.setItem("punchline", result.body[0].punchline);
  } catch (error) {
    console.error(error);
  }
}

// function getQuoteAPI() {
//     var requestUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

//     fetch(requestUrl,{
//         method: 'GET',
//         headers: { 'X-Api-Key': 'zpxm0YnRmFaQ0qflfS0fOoTEUVsAgeeZ2UQXoR5b'},
//         contentType: 'application/json',
//         mode: 'no-cors',
//     })
//       .then(function (data) {
//         console.log(data);
//         // quoteLocation.textContent = (data);
//         // localStorage.setItem("Quote", data);
//     });
// }

async function getQuoteAPI() {
  fetch("https://type.fit/api/quotes/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomIndex = Math.floor(Math.random() * data.length);
      console.log(data[randomIndex].text);
      quoteLocation.textContent = data[randomIndex].text;
      localStorage.setItem("Quote", data[randomIndex].text);
    });
}

var pastJokeSetup = localStorage.getItem("setup");
var pastJokePunchline = localStorage.getItem("punchline");
jokeLocation.textContent = pastJokeSetup + "\n \n" + pastJokePunchline;
generateJokeButton.addEventListener("click", getJokesAPI);

var Quote = localStorage.getItem("Quote");
quoteLocation.textContent = Quote;
generateQuoteButton.addEventListener("click", getQuoteAPI);
