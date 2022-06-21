import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
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

    return (
            <div className={className}>
                <div 
                    style={{display: 'flex',justifyContent: 'flex-end', fontSize: '28px', paddingTop: '5px', paddingRight: '5px'}}
                    onClick={() => dispatch(removePost({
                        id, name, post
                    }))}
                    >
                    <AiFillDelete/>
                </div>
                <div>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>{name}</h1>
                    <p style={{display:'flex', justifyContent:'center'}}>{post}</p>
                </div>
            </div>
    )
}

export default PostCard
