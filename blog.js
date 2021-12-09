const posts = [
    { post:"1" },
  ];
  
  const listposts = () => {
    posts.map((post) => {
      console.log(post);
    });
  };
  
  const addpost = (newpost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newpost);
      resolve(posts);
    });
  
    return promise1;
  };
  
  async function showposts() {
    try {
      await addpost({post:"2"});
      listposts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showposts();