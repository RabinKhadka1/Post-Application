import React, { useEffect, useState } from 'react'
import { getPostDetailCommentsApi } from '../../api/post.api';

export default function PostComments(props) {
    const { postId } = props;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getPostDetailCommentsApi({ postId }).then(res => {
            if (res) {
                setComments(res)
            }
        }).catch(err => console.log(err));
    }, [postId])
    return (
        <ul className='comments'>
            {
                comments.map((comment) => <li key={comment.id}>{comment.body}</li>)
            }
        </ul>
    )
}
