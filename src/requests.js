const API_KEY = 'AIzaSyA6H3iAuVn1HEatOr9QGgDwFwSo7ntczv0';

const requests = {
    fetchAllPosts: `/posts?key=${API_KEY}`,
    fetchBlog: `?key=${API_KEY}`
}

export default requests;