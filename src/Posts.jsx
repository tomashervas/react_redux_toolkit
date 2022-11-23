import { useEffect, useState } from "react";

export default function Posts() {
  const [postId, setPostId] = useState(-1);

  return (
    <>
      <h1>RTK Query Demo</h1>
      <main className="container">
        {postId > -1 && (
          <div>
            <a onClick={() => setPostId(-1)} href="#">
              Back
            </a>
          </div>
        )}
        {postId > -1 ? (
          <PostDetails postId={postId} setPostId={setPostId} />
        ) : (
          <div>
            <div>
              {/* <NewPost /> */}
            </div>
            <div>
              <PostList setPostId={setPostId} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function PostList({ setPostId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json()
        setPosts(data);
        setError(null);
      } catch (error) {
        setError(error);
        setPosts(null);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div class="lds-ripple"><div></div><div></div></div>
    );
  }

  if (error) {
    return (
      <section>
        Error fetching posts: {error.message}
      </section>
    );
  }

  return (
    <section>
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} setPostId={setPostId} />
        ))}
      </ul>
    </section>
  );
}

function PostItem({ post, setPostId }) {
  return (
    <li>
      <a onClick={() => setPostId(post.id)} href="#">
        {post.title}
      </a>
    </li>
  );
}

function PostDetails({ postId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await res.json();
        setPost(data);
        setError(null);
      } catch (error) {
        setError(error);
        setPost(null);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [postId]);

  if (isLoading) {
    return (
      <div>
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error fetching post: {error.message}
      </div>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}