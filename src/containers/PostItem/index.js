import { FaTimes, FaShare, FaComment } from 'react-icons/fa'
import PropTypes from 'prop-types';
import { useState } from 'react';
import WritePostComment from './Comment';

const Post = ({ post, onDelete, navigateToPostDetails }) => {
    const [commentInputVisibility, setCommentInputVisibility] = useState(false);
    const toggleCommentInputVisibility = () => setCommentInputVisibility(!commentInputVisibility);
    const EXPLICIT_MODE = 'explicit_mode';
    const activateExplicitMode = (e) => e.target.name = EXPLICIT_MODE;
    const onPostClick = (e) => {
        if (e.target.name !== EXPLICIT_MODE)
            navigateToPostDetails(post.id);
    }
    const onPostShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                url: `${window.location.origin}/post/${post.id}`,
                text: post.body
            })
        }
    }
    return (
        <div
            className='task'
            onClick={onPostClick}
        >
            <h3>
                {post.title}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={(e) => { activateExplicitMode(e); onDelete(post.id) }}
                />
            </h3>
            <p>{post.body}</p>
            <div className='post-share' onClick={activateExplicitMode}>
                <FaComment onClick={toggleCommentInputVisibility} />
                <FaShare onClick={onPostShare} />
            </div>
            {
                commentInputVisibility &&
                <div className='post-write-comment' onClick={activateExplicitMode}>
                    <WritePostComment post={post} onPostingComment={() => setCommentInputVisibility(false)} />
                </div>
            }

        </div>
    )
}

export default Post

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    navigateToPostDetails: PropTypes.func.isRequired
}