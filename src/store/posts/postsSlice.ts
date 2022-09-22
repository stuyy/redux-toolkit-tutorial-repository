import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../utils/types';
import { fetchPostsThunk } from './postsThunk';

export interface PostsState {
  posts: Post[];
  loading: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        console.log('fetchPostsThunk.fulfilled');
        console.log(action.payload.data);
        state.loading = false;
        state.posts = action.payload.data;
      })
      .addCase(fetchPostsThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setLoading } = postsSlice.actions;
export default postsSlice.reducer;
