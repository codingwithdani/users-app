
export const getSingleUser = async (detailId) => {
  const response = await window.fetch(`https://reqres.in/api/users/${detailId}`)
  const json = await response.json()
  return json.data
}
