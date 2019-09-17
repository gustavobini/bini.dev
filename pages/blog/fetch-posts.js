function fileName(mdx) {
  return mdx.substring(2, mdx.length - 4);
}

function requireAll(r) {
  return r.keys().map(key => ({
    content: r(key),
    url: fileName(key)
  }));
}

function requirePosts() {
  return requireAll(require.context('./posts', true, /\.mdx$/));
}

function parsePosts(posts) {
  return posts.map(post => {
    return {
      ...post.content.meta,
      Post: post.content.default,
      url: post.url
    };
  });
}

export function fetchPosts() {
  return parsePosts(requirePosts());
}
