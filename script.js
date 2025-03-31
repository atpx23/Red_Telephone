var typed = new Typed(".multiple-text", {strings: ["coding...","thinking about you...", "missing you..."], typeSpeed: 100,backSpeed: 100, backDelay: 1000, loop: true});




  const scriptURL = 'https://script.google.com/macros/s/AKfycbxwT4Ef5XzxGtJW7ze3RUpA0qMLcB7v_nSS6Ics5GROYFsBAslPPs_mYxZivJecwBtc/exec'
  const form = document.forms['submit-to-google-sheet']
  const tb = document.getElementById('tb')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
