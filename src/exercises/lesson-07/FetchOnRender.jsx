import { useEffect, useState } from 'react';
import { getPosts } from './api';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isIgnored = false;

    (async () => {
      try {
        const data = await getPosts();
        if (!isIgnored) {
          setPosts(data);
        }
      } catch (err) {
        if (!isIgnored) {
          setError(err.message);
        }
      } finally {
        if (!isIgnored) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isIgnored = true;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
