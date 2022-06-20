import React from 'react'

interface PostCardProps {
    id: string;
    name: string;
    post: string;
    className?: string;
}

const PostCard: React.FC<PostCardProps> = ({id, name, post, className}) => {
    return (
        <div className={className}>
            <h1 style={{display: 'flex', justifyContent: 'center'}}>{name}</h1>
            <p style={{display:'flex', justifyContent:'center'}}>{post}</p>
        </div>
    )
}

export default PostCard
