import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa'
import { updatePostCommentApi } from '../../../api/post.api';

export default function WritePostComment(props) {
    const { post } = props;
    const [commentText, setCommentText] = useState('');
    const [isError, setIsError] = useState(false);
    const onCommentInput = (e) => {
        setIsError(false);
        setCommentText(e.target.value);
    }
    const onSubmit = async () => {
        let tempError = false;
        if (commentText.length) {
            await updatePostCommentApi({
                postId: post.id,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: commentText
            });
            alert('submitted successfully');
            props.onPostingComment();
        } else {
            tempError = true;
        }
        setIsError(tempError);
    }
    return (
        // className='pos-relative d-flex'
        <div className={`wrapper ${isError && 'has_error'}`}>
            <div className='comment-input'>
                <textarea placeholder={isError ? 'Please make some comment' : 'Your comment here'} value={commentText} onChange={onCommentInput} autoFocus />
            </div>
            <div className='submit' data-testid="submit-button" onClick={onSubmit}>
                <FaPaperPlane className='submit' />
            </div>
        </div>
    )
}
WritePostComment.propTypes = {
    post: PropTypes.object
}
