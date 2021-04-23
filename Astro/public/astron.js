const search = (event) => {
   // prevent the form from reloading the page
   event.preventDefault();
  // clear the previous search
  document.getElementById("Pictures").innerHTML = '';
  let terms = document.getElementById("search").value;
  terms = encodeURIComponent( terms)
  fetch('/AstroAPI/search/'+terms)
    .then(response => response.json())
    .then(plants => {
        console.log(plants)
        display (plants);
     })
    .catch(error => console.log('error', error));
}

// attach the search function to the form submission
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', search);



// const getInfo = (answer) => {
//     fetch('/AstroAPI/token/'+ encodeURIComponent( answer) )
//     .then(response => response.json())
//     .then(answers => {
//         console.log(answer);
//         display(answer);
//     })
//     .then( async response => {
//         document.getElementById("Pictures").innerHTML = '';
//         // clear out any previous content
//         await Promise.all( spoons.results.map( render ) )
//
//         // After rendering is finished, add spoon profiles to the page
//         spoons.results.forEach( answer => {
//           document.getElementById("Pictures").innerHTML += answer.html
//         })
//     })
//     .catch(error => console.log(error) );
// }
//
//
// const render =  async ( answer ) => {
//     answer.html =
//     '<h3 style="font-size: 23px; font-weight: 600">' + (json.title || "Undefined") + '</h3>  <br>' +
//     // https://developers.google.com/youtube/iframe_api_reference
//     //image shown for the pokemon
//     '<iframe id="player" type="text/html" width="80%" height="60%" src="' +  json.url + '" frameborder="0"></iframe>' +
//     //media type
//     '<p id="media">Media: ' + json.media_type + '</p>' +
//     //copyright
//     '<p>Copyright: '+ (json.copyright || "Undefined") + '</p>' +
//     //date for updating
//     '<p>Date: ' + json.date + '</p> <div class="borderS"></div> <br>' +
//     //explanation
//     '<p>Explanation:<br> ' + json.explanation + '</p>  <br><br></div>';
//
// }

// function render(picture){
//   document.getElementById().innerHTML = "";
//   const dom = document.createDocumentFragment();
//
//   picture.forEach(item)=> {
//     const aDom = document.createElement("a");
//
//   }
// }
//
// async function requestMatched(typeIn){
//   url = typeIn ? `/AstroAPI/search/${input}` : '/AstroAPI/pictures'
//   const httpRes = await fetch(url).then(res) => res.json());
//   return httpRes;
// }
//
// async function
