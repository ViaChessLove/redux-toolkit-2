import React, { useEffect, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import {AiFillDelete, AiFillDislike, AiFillEdit, AiFillLike, AiOutlineDelete, AiOutlineDislike, AiOutlineEdit, AiOutlineLike} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../../App';
import { RootState } from '../../app/store';
import { changeState } from '../../features/editSlice';
import { setDislike, setLike, unsetValue } from '../../features/likeSlice';
import { removePost, Post, changePost } from '../../features/postSlice';
import useHover from '../../hooks/useHover';

interface PostCardProps {
    id: string;
    name: string;
    post: string;
    className?: string;
}

const PostCard: React.FC<PostCardProps> = ({id, name, post, className}) => {
    
    const [editPost, setEditPost] = useState<string>(post);
    const dispatch = useDispatch();
    const like = useSelector((state: RootState) => state.like.value.like);
    const dislike = useSelector((state: RootState) => state.like.value.dislike);
    const edit = useSelector((state: RootState) => state.edit.value);
    const handleEdit = () => {
        switch(edit){
            case false: {
                dispatch(changeState(true));
                break;
            }
            case true: {
                dispatch(changeState(false));
                break;
            }
        }
    };
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);
    const [hoverRef, isHover] = useHover();
    return (
        <div>
            <div className={className}>
                <div style={{display: 'flex',justifyContent: 'space-between', fontSize: '28px', paddingTop: '5px', paddingRight: '5px', paddingLeft: '5px'}}>
                    <div 
                        onClick={() => dispatch(removePost({
                            id, name, post
                        }))}
                        ref={hoverRef}
                        >
                        {isHover? <AiFillDelete/>:<AiOutlineDelete/>}
                    </div>
                    <div
                        onClick={handleEdit}
                    >
                        {edit? <AiFillEdit/>:<AiOutlineEdit/>}
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
                        }}
                        >
                        {dislike? <AiFillDislike/>: <AiOutlineDislike/>}
                    </div>
                </div>
                <div>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>{name}</h1>
                    {edit? 
                    <>
                        <input ref={inputRef}
                            value={editPost} 
                            onChange={(e) => setEditPost(e.target.value)}
                            style={{margin:'0 auto', display:'flex', textAlign:'center', marginBottom: '20px'}}
                        />
                        <button onClick={() =>{
                            handleEdit();
                            dispatch(changePost({id, name, post: editPost}));
                        }}>SET</button>
                    </>
                    :
                    <p style={{display:'flex', justifyContent:'center'}}>{post}</p>}
                </div>
            </div>
        </div>
    )
}

export default PostCard
