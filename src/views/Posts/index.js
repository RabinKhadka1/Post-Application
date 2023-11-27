import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import * as postsApi from '../../api/post.api';
import Post from '../../containers/PostItem';

const Posts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);
    const getPosts = async () => {
        const response = await postsApi.getPostsApi();
        if (response) {
            setPosts(response)
        }
    }
    const navigateToPostDetails = (postId) => {
        navigate(`/post/${postId}`)
    }
    const onDelete = async (postId, postItemIndex) => {
        try {
            const response = await postsApi.deletePostApi({ id: postId });
            if (response) {
                const prevPosts = Array.from(posts);
                prevPosts.splice(postItemIndex, 1);
                setPosts(prevPosts);
            }
        } catch (e) { }
    }
    return (
        <>

            <h3 className='main_header'>Posts</h3>

            {posts.map((post, index) => (
                <Post key={index} post={post} navigateToPostDetails={navigateToPostDetails} onDelete={(id) => onDelete(id, index)} />
            ))}
        </>
    )
}


export default Posts
