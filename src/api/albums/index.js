const getAlbums = async (userId = 1) => {
  let albums = [];

  try {
    const albumsJson = await fetch(`https://my-json-server.typicode.com/Campus41/facenoot/albums?userId=${userId}`)

    if(!albumsJson.ok) {
      throw new Error(`HTTP error! Status: ${albumsJson.status}`);
    }

    albums = await albumsJson.json();
  } catch (error) {
    console.log('An error occurred', error);
  }

  return albums;
}

const getAlbum = async(userId = 1, albumId = 1) => {
  let album = [];

  try {
    const albumJson = await fetch(`https://my-json-server.typicode.com/Campus41/facenoot/albums?userId=${userId}&id=${albumId}`);

    if(!albumJson.ok) {
      throw new Error(`HTTP error! Status: ${albumJson.status}`);
    }

    album = await albumJson.json();
  } catch (error) {
    console.log('An error occurred', error);
  }

  return album;
}

export {
  getAlbums,
  getAlbum,
}