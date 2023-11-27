import { fireEvent, render, screen } from '@testing-library/react'
import WritePostComment from './'
import React from 'react';

const post = { id: 1 };
it('comments get updated on writing', async () => {
    const onPostingComment = jest.fn();
    const postValue = 'Hi, Mr POster';
    const setState = jest.fn();
    jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(initState => [initState, setState]);

    render(<WritePostComment post={post} onPostingComment={onPostingComment} />)

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: postValue } });
    expect(setState).toHaveBeenCalledWith(postValue);

})