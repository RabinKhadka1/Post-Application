import { render, screen } from "@testing-library/react";
import Post from ".";

it('Render post item', () => {
    const postData = {
        id: 1,
        title: 'Post 1',
        body: 'Post body'
    }
    const onDelete = jest.fn();
    const navigateToPostDetails = jest.fn();
    render(<Post post={postData} onDelete={onDelete} navigateToPostDetails={navigateToPostDetails} />)
    expect(screen.getByText('Post 1')).toBeInTheDocument();
})