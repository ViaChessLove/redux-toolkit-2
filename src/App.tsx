import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import Input from './components/Input/Input';
import { InputPost } from './components/Input/Input.style';
import { PostCardStyled } from './components/PostCard/PostCard.style';
import { addPost, Post } from './features/postSlice';
import {GlobalStyles} from './Global.style';
import {v4 as uuid} from 'uuid';

const App = () =>{
  const dispatch = useDispatch();

  const [postNameInput, setPostNameInput] = useState<string>('');
  const [postPostInput, setPostPostInput] = useState<string>('');

  const posts = useSelector((state: RootState) => state.posts.value);
  
  const handleAddPosts = () => {
    if (!postNameInput || !postPostInput) return;
    dispatch(addPost({
      id: uuid(),
      name: postNameInput,
      post: postPostInput
    }));
    setPostPostInput(''); setPostNameInput('');
  }
  return (
    <>
      <GlobalStyles/>
      <h1 style={{textAlign: 'center'}}>Posts</h1>
      {posts.map((post: Post) => {  
        return <PostCardStyled id={post.id} name={post.name} post={post.post}/>
      })}
      <InputPost name='user' value={postNameInput} backgroundColor='white' placeholder='who r u' onChange={(e) => setPostNameInput(e.target.value)}/>
      <InputPost name='post' value={postPostInput} backgroundColor="lightyellow" placeholder="type your post" onChange={(e) => setPostPostInput(e.target.value)}/>
      <button onClick={handleAddPosts}>Post</button>
    </>
  );
}

export default App;
