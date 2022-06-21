import React, { useState } from 'react';
import {AiFillDelete, AiFillDislike, AiFillEdit, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { removePost } from '../../features/postSlice';

interface PostCardProps {
    id: string;
    name: string;
    post: string;
    className?: string;
}

const PostCard: React.FC<PostCardProps> = ({id, name, post, className}) => {
    const dispatch = useDispatch();
    const [mark, setMark] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(false);
    const [dislike, setDislike] = useState<boolean>(false);
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
                        setLike(false as boolean)
                        :
                        setLike(true as boolean)
                        }}>
                        {like? <AiFillLike/>: <AiOutlineLike/>}
                    </div>
                    <div onClick={()=>{
                        dislike? 
                        setDislike(false as boolean):
                        setDislike(true as boolean)
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
