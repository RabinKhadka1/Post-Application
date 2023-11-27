import { act, render, screen } from "@testing-library/react";
import PostComments from ".";

it('Post Details Comments listed', async () => {
    const mockResponse = [{ id: 1, body: 'dummy comment' }];
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    await act(async () => {
        render(<PostComments postId={1} />);
    })
    expect(screen.getByText('dummy comment')).toBeInTheDocument();
});