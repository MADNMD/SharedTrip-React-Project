import * as requester from '../services/requester';

export const addComment = async (userId, tripId, text) => {

    try {
        await requester.post(`/comments/add-comment`, { userId, tripId, text });
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
}

export const getComments = async (tripId) => {

    try {
        const result = await requester.get(`/comments/get-comments/${tripId}`);
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
}