const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = `${POSTS_ENDPOINT}?_limit=10`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Request failed with status ${resp.status}`);
  }
  return resp.json();
}

export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Request failed with status ${resp.status}`);
  }
  return resp.json();
}
