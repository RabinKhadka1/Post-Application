import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router';
import { getPostDetailsApi } from '../../api/post.api';
import PostComments from '../../containers/PostComments';

export default function PostDetails(props) {
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState();
    const { postId } = useParams();
    useEffect(() => {
        getPostDetailsApi({ postId })
            .then((res) => {
                setPostDetails(res);
            })
            .catch(err => console.log(err))
    }, [postId]);
    const onBackArrowClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className='app_header'>
                <FaArrowLeft className='back_arrow' onClick={onBackArrowClick} />
                <h3 className='header_text'>Post Details</h3>
            </div>
            <div className='wrapper'>
                {
                    postDetails &&
                    <div className='post_details'>
                        <h3>{postDetails.title}</h3>
                        <p>{postDetails.body}</p>
                        <PostComments postId={postId} />
                    </div>
                }
            </div>
        </>
    )
}
