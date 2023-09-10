const getUsers = async (name = "", sort="") => {
  let users = [];

  try {
    const usersJson = await fetch(`https://my-json-server.typicode.com/Campus41/facenoot/users?name_like=${name}&_sort=name&_order=${sort}`);
  
    if (!usersJson.ok) {
      throw new Error(`HTTP error! Status: ${usersJson.status}`);
    }
  
    users = await usersJson.json();
  
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return users
}

const getUser = async (userId = 1) => {
  const usersUrl = `https://my-json-server.typicode.com/Campus41/facenoot/users/${userId}`;
  const postsUrl = `https://my-json-server.typicode.com/Campus41/facenoot/posts?userId=${userId}`;
  const albumsUrl = `https://my-json-server.typicode.com/Campus41/facenoot/albums?userId=${userId}`;

  try {
    const [usersResponse, postsResponse, albumsResponse] = await Promise.all([
      fetch(usersUrl),
      fetch(postsUrl),
      fetch(albumsUrl)
    ]);

    if (!usersResponse.ok || !postsResponse.ok || !albumsResponse.ok) {
      throw new Error('HTTP error!');
    }

    const [userData, postsData, albumsData] = await Promise.all([
      usersResponse.json(),
      postsResponse.json(),
      albumsResponse.json()
    ]);

    return {
      userData,
      postsData,
      albumsData
    }

  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export {
  getUsers,
  getUser,
}