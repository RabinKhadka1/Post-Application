import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import PostDetails from ".";

it('Post Details Comments listed', async () => {
    const mockResponse = { id: 1, title: 'Dummy Post', body: 'Dummy Body' };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
    await act(async () => {
        render(
            <MemoryRouter initialEntries={['/post/1']}>
                <Routes>
                    <Route path="/post/:postId" element={<PostDetails />} />
                </Routes>
            </MemoryRouter>
        );
    })
    expect(screen.getByText('Dummy Post')).toBeInTheDocument();
});