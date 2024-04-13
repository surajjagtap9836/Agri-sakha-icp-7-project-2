function submitDetail(){
    alert("your feedback is submited..!")
}

const stars = document.querySelectorAll('.stars');
         const userRating = document.getElementById('userStars');
       
         
         stars.forEach(star => {
           star.addEventListener('click', function() {
             const rating = parseInt(this.getAttribute('data-value'));
             setUserRating(rating);
           });
         });
       
         
         function setUserRating(rating) {
           userRating.textContent = rating;
           
           stars.forEach(star => star.style.color = 'gold');
           
           for (let i = 0; i < rating; i++) {
             stars[i].style.color = 'orange';
           }
         }