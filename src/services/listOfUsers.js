
export const getUsersList = async () => {
  const response = await window.fetch('https://reqres.in/api/users')
  const json = await response.json()
  return json.data
}
