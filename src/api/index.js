const getUsers = async () => {
  let users = [];
  try {
    const usersJson = await fetch('https://my-json-server.typicode.com/Campus41/facenoot/users');
  
    if (!usersJson.ok) {
      throw new Error(`HTTP error! Status: ${usersJson.status}`);
    }
  
    users = await usersJson.json();
  
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return users
}

const getUser = async(userId = 1) => {
  let user = [];
  try {
    const usersJson = await fetch(`https://my-json-server.typicode.com/Campus41/facenoot/users/${userId}`);
  
    if (!usersJson.ok) {
      throw new Error(`HTTP error! Status: ${usersJson.status}`);
    }
  
    user = await usersJson.json();
  
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return user
}

const getPosts = () => {
  console.log('posts')
}

const getAlbums = () => {
  console.log('albums')
}

export {
  getUsers,
  getUser,
  getPosts,
  getAlbums
}