import request from ".";

export const getPostsApi = async () => {
    return await request({
        method: 'GET',
        url: `posts?_start=0&_limit=10`
    });
}
export const addPostApi = async (payload) => {
    return await request({
        method: 'POST',
        url: 'posts',
        data: payload
    });
}
export const updatePostApi = async (payload) => {
    return await request({
        method: 'PUT',
        url: `posts/${payload.id}`,
        data: payload
    });
}
export const deletePostApi = async (payload) => {
    return await request({
        method: 'DELETE',
        url: `posts/${payload.id}`
    });
}
export const updatePostCommentApi = (payload) => {
    return request({
        method: 'POST',
        url: `posts/${payload.postId}/comments`,
        data: payload
    })
}
export const getPostDetailsApi = (payload) => {
    return request({
        method: 'GET',
        url: `posts/${payload.postId}`
    })
}
export const getPostDetailCommentsApi = (payload) => {
    return request({
        method: 'GET',
        url: `posts/${payload.postId}/comments`
    })
}