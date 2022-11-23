import { useEffect, useState } from "react";
import { useGetPostsByIdQuery, useGetPostsQuery } from "./store/Posts/postsApi";

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
  
  const { data: posts, isLoading, error, isFetching } = useGetPostsQuery(undefined,{
   /*  refetchOnMountOrArgChange: true,
    pollingInterval: 30000 */
  })

  if (isLoading) {
    return (
      <div className="lds-ripple"><div></div><div></div></div>
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
      <h2>Posts:{isFetching && 
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
      </h2>
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
  
 const {data: post, isLoading, error} = useGetPostsByIdQuery(postId)

  if (isLoading) {
    return (
      <div>
        <div className="lds-ripple"><div></div><div></div></div>
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