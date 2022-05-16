const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const card = document.querySelector('.card');

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    rating.classList.toggle('click')

    submit.addEventListener('click', () => {
      card.innerHTML = `
        <div class="thank">
          <img src="./images/illustration-thank-you.svg" alt="">
          <h4><span class="selected">You selected ${rating.value} out of 5</span></h4>
          <h1>Thank you!</h1>
          <p>We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
        </div>
      `
    })
  })
})