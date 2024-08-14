//este archivo es .js en vez de .jsx porque es puro javascript

export const getGiffs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=T9tkFJT1FS6U56lO1N2K0JGFnpJQQw72&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const giffs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return giffs;
}