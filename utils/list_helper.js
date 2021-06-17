const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes;
  };

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;
  // Find blog in blogs with most likes
  // In the case of a tie for max likes, returns only the first blog w max likes in the list
  let maxLikes = 0;
  let blogIndex = 0;
  blogs.forEach((blog, i) => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes;
      blogIndex = i;
    }
  });

  // Return object with requested properties
  const blog = blogs[blogIndex];
  return {
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  };
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;
  // iterate through blogs and find author whose name appears the most times
  const authorCount = blogs.reduce((obj, currentBlog) => {
    // increment or set the property
    // return property value if defined
    // zero if not defined
    obj[currentBlog.author] = (obj[currentBlog.author] || 0) + 1;
    // return update object
    return obj;
    // initial value of accumulator is empty object
  }, {});
  console.log("authorCount:", authorCount);
  return {
    author: Object.keys(authorCount),
    blogs: Object.values(authorCount),
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
