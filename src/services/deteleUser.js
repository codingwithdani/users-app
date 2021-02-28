
export const deleteUser = (id) => {
  return window.fetch(`https://reqres.in/api/users/${id}`,
    {
      method: 'DELETE'
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) }
    )
}
