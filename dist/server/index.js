import express from 'express';
import axios from 'axios';
const app = express();
const PORT = 3001;
let cachedData = []; // Cached comments data
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // Cache duration: 5 minutes
// Fetch comments with caching logic
async function fetchComments() {
    const now = Date.now();
    // Use cache if valid
    if (cachedData.length === 0 || (now - cacheTimestamp) > CACHE_DURATION) {
        try {
            console.log("Fetching comments from API...");
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=3');
            cachedData = response.data || []; // Cache the response data
            cacheTimestamp = now;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            return []; // Return empty array on failure
        }
    }
    return cachedData;
}
// Filter comments by the search query
function filterComments(comments, query) {
    return comments.filter(comment => {
        const nameMatch = comment.name?.toLowerCase().includes(query);
        const emailMatch = comment.email?.toLowerCase().includes(query);
        return nameMatch || emailMatch; // Return true if any field matches
    });
}
// API route to return filtered comments based on query
app.get('/comments', async (req, res) => {
    try {
        const query = req.query.query?.toString().toLowerCase().trim() || '';
        // Fetch comments (use cache if valid)
        const allComments = await fetchComments();
        // Filter comments based on the query
        const filteredComments = filterComments(allComments, query);
        res.json(filteredComments);
    }
    catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
