const url = new URL(location.href);
const movieId = url.searchParams.get("id")
const movieTitle = url.searchParams.get("title")


const APILINK = 'https://review-backend.rger1.repl.co/api/v1/reviews';


const main = document.getElementById("section");
const title = document.getElementById("title");

title.innerText = movieTitle;

returnReviews(APILINK);

function returnReviews(url){
  fetch(url + "movie/" + movieId).then(res => res.json())
  .then(function(data){
  console.log(data);
  data.forEach(element => {
      const div_card = document.createElement('div');
      <div class="row">
        <div class="column">
          <div class="card" id="${review.id}">
            <p><strong>Review: </strong>${review.review}</p>
            <p><strong>User: </strong>${review.user}</p>
            <p><a href="#" onclick="editReview('${review._id}','${review.review}','${review.user}')">pencil</a><a href="#" onclick="deleteReview('${review._id}')">trash</a></p>    
      </div>
        </div>
        </div>
    
    
    //div_card.setAttribute('class', 'card');
      
      //const div_row = document.createElement('div');
      //div_row.setAttribute('class', 'row');
      
      //const div_column = document.createElement('div');
      //div_column.setAttribute('class', 'column');
      
      //const image = document.createElement('img');
      //image.setAttribute('class', 'thumbnail');
      //image.setAttribute('id', 'image');
      
      //const title = document.createElement('h3');
      //title.setAttribute('id', 'title');
      
      //const center = document.createElement('center');

      //title.innerHTML = `${element.title}`;
      //image.src = IMG_PATH + element.poster_path;

      //center.appendChild(image);
      //div_card.appendChild(center);
      //div_card.appendChild(title);
      //div_column.appendChild(div_card);
      //div_row.appendChild(div_column);

      main.appendChild(div_card);
  });
});
}

