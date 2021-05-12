function Card(movie) {
  return `
  <div class="card">
       <div class="card_inner">
         <div class="card_front">
           <div class="card_front_img">
             <img src=https://image.tmdb.org/t/p/w500/${movie.poster_path} alt="img" />
           </div>
           <div class="card_front_info">
             <h1>${movie.title}</h1>
             <ul>
               <li>
                 <strong>Release Date:</strong>
                 <h5>${movie.release_date}</h5>
               </li>
               <li>
                 <strong>Note: </strong>
                 <h5>${movie.vote_average}</h5>
               </li>
             </ul>
           </div>
         </div>
         <div class="card_back">
           <h4 class="card_back_title">Description:</h4>
           <p class="card_back_description">
             ${movie.overview}
           </p>
         </div>
       </div>
     </div>
  `;
}

export default Card;
