const getUsers = async ({...params}) => {
  let users = [];

  let url = 'https://my-json-server.typicode.com/Campus41/facenoot/users';

  if (params.name) {
    url += `?name_like=${params.name}`;
  }

  if (params.sort) {
    if (params.name) {
      url += `&_sort=name&_order=${params.sort}`;
    } else {
      url += `?_sort=name&_order=${params.sort}`;
    }
  }
  
  try {
    const usersJson = await fetch(url); 
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