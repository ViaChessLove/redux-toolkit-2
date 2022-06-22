import React, { useState } from 'react';
import {AiFillDelete, AiFillDislike, AiFillEdit, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setDislike, setLike, unsetValue } from '../../features/likeSlice';
import { removePost } from '../../features/postSlice';

interface PostCardProps {
    id: string;
    name: string;
    post: string;
    className?: string;
}

const PostCard: React.FC<PostCardProps> = ({id, name, post, className}) => {
    const dispatch = useDispatch();
    const marked = useSelector((state: RootState) => state.like.value.marked);
    const like = useSelector((state: RootState) => state.like.value.like);
    const dislike = useSelector((state: RootState) => state.like.value.dislike);
    return (
            <div className={className}>
                <div style={{display: 'flex',justifyContent: 'space-between', fontSize: '28px', paddingTop: '5px', paddingRight: '5px', paddingLeft: '5px'}}>
                    <div 
                        onClick={() => dispatch(removePost({
                            id, name, post
                        }))}
                        >
                        <AiFillDelete/>
                    </div>
                    <div
                    >
                        <AiFillEdit/>
                    </div>
                    <div onClick={()=>{
                        like? 
                        dispatch(unsetValue({
                            marked: false,
                            like: false,
                            dislike: false,
                        }))
                        :
                        dispatch(setLike({
                            marked: false,
                            like: false,
                            dislike: false,
                        }))
                        }}>
                        
                        {like? <AiFillLike/>: <AiOutlineLike/>}
                    </div>
                    <div onClick={()=>{
                        dislike? 
                        dispatch(unsetValue({
                            marked: false,
                            like: false,
                            dislike: false,
                        }))
                        :
                        dispatch(setDislike({
                            marked: false,
                            like: false,
                            dislike: false,
                        }))
                        }}>
                        {dislike? <AiFillDislike/>: <AiOutlineDislike/>}
                    </div>
                </div>
                <div>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>{name}</h1>
                    <p style={{display:'flex', justifyContent:'center'}}>{post}</p>
                </div>
            </div>
    )
}

export default PostCard
