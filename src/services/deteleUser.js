
export const deleteUser = (id) => {
  return window.fetch(`https://reqres.in/api/users/${id}`,
    {
      method: 'DELETE'
    })
}
