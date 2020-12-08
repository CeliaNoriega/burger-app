document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/burgers', {
    name: document.getElementById('name').value,
    isHere: false
  })
    .then(() => location.reload())
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'devoured') {
    axios.put(`/api/burgers/${event.target.dataset.id}`, { isHere: true })
      .then(() => location.reload())
      .catch(err => console.error(err))
  } else if (event.target.className === 'delete') {
    axios.delete(`/api/burgers/${event.target.dataset.id}`)
      .then(() => location.reload())
      .catch(err => console.error(err))
  }
})