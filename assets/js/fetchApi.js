export const fetchApi = async(api) => {
  const reponse = await fetch(api);
  const result = await reponse.json();
  return result;
}