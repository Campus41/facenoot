const getPosts = async(userId = 1) => {
  let posts = [];

  try {
    const postsJson = await fetch(`https://my-json-server.typicode.com/Campus41/facenoot/posts?userId=${userId}`)

    if (!postsJson.ok) {
      throw new Error(`HTTP error! Status: ${postsJson.status}`);
    }
  
    posts = await postsJson.json();
  
  } catch (error) {
    console.error('An error occurred:', error);
  }
  
  return posts
}

const getPost = async(userId = 1, postId = 1) => {
  let post = {}

  try {
    const postJson = await fetch(`https://my-json-server.typicode.com/Campus41/facenoot/posts?userId=${userId}&id=${postId}`)

    if(!postJson.ok) {
      throw new Error(`HTTP error! Status: ${postJson.status}`);
    }

    post = await postJson.json()
  } catch (error){
    console.log('An error occurred', error);
  }
  
  return post;
}

export {
  getPosts,
  getPost,
}