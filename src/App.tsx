import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileCard } from './components/ProfileCard';
import { UserDetails } from './components/UserDetails';
import { UserForm } from './components/UserForm';
import { AppDispatch, RootState } from './store';
import { setLoading } from './store/posts/postsSlice';
import { fetchPostsThunk } from './store/posts/postsThunk';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const postsSlice = useSelector((state: RootState) => state.posts);
  return (
    <div>
      <ProfileCard />
      <UserForm />
      <UserDetails />
      <h1>Posts</h1>
      <button
        onClick={() => {
          dispatch(setLoading(true));
          dispatch(fetchPostsThunk());
        }}
      >
        Fetch Posts
      </button>
      {postsSlice.loading && (
        <div>
          <span>Loading Posts....</span>
        </div>
      )}
      {postsSlice.posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.id}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
