export const getGifs = async (category) => {
    const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyBryTZ6ng7TIJlZEqYQZPt3nQ_arLDZIII&client_key=react-school&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);

    const gifs = data.results.map(res => ({
        id: res.id,
        title: res.title,
        url: res.media_formats.tinygif.url
    }));

    return gifs;
}


