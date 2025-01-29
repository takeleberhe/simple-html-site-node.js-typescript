"use strict";
// Get references to the DOM elements
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results');
const resultsContainer = document.getElementById('results-wrapper');
let cachedComments = []; // Cache to store fetched comments
let debounceTimer;
// Function to fetch comments from the API and cache them
async function fetchComments() {
    if (cachedComments.length > 0)
        return cachedComments; // Use cached data if available
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=3`);
        if (!res.ok) {
            throw new Error('Failed to fetch comments');
        }
        cachedComments = await res.json(); // Cache the fetched comments
        return cachedComments;
    }
    catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}
// Function to filter comments based on user query
function filterComments(comments, query) {
    return comments.filter(comment => comment.name.toLowerCase().includes(query) ||
        comment.email.toLowerCase().includes(query));
}
// Function to render comments in the UI
function renderComments(comments) {
    if (!resultsList)
        return;
    resultsList.innerHTML = ''; // Clear previous results
    if (comments.length === 0) {
        resultsList.innerHTML = '<li>No results found</li>';
        return;
    }
    resultsList.innerHTML = comments.map(comment => `
        <li>
            <strong>${comment.name}</strong>
            <p>${comment.body}</p>
            <p><em>${comment.email}</em></p>
        </li>
    `).join('');
}
// Function to handle search input
const handleSearch = async () => {
    if (!searchInput || !resultsContainer)
        return;
    const query = searchInput.value.trim().toLowerCase();
    // If query is empty, clear results and hide the results container
    if (query.length === 0) {
        resultsList.innerHTML = ''; // Clear results
        resultsContainer.style.display = 'none'; // Hide results container
        return;
    }
    // Fetch all comments and filter based on query
    const allComments = await fetchComments();
    const filteredComments = filterComments(allComments, query);
    if (filteredComments.length === 0) {
        resultsList.innerHTML = '<li>No results found</li>';
    }
    else {
        renderComments(filteredComments);
    }
    resultsContainer.style.display = filteredComments.length > 0 ? 'block' : 'none';
};
// Use Lodash debounce to optimize search
const debouncedSearch = _.debounce(handleSearch, 2000); // 2s debounce delay
// Function to handle keydown event (immediate fetch on Enter key press)
const handleKeyDown = (event) => {
    const query = searchInput?.value.trim().toLowerCase() || '';
    if (event.key === 'Enter') {
        event.preventDefault();
        fetchData(query); // Fetch data immediately on Enter key press
    }
};
// Function to fetch data
const fetchData = async (query) => {
    if (!searchInput || !resultsContainer)
        return;
    if (query.length === 0) {
        resultsList.innerHTML = ''; // Clear results
        resultsContainer.style.display = 'none'; // Hide results container
        return;
    }
    const allComments = await fetchComments();
    const filteredComments = filterComments(allComments, query);
    if (filteredComments.length === 0) {
        resultsList.innerHTML = '<li>No results found</li>';
    }
    else {
        renderComments(filteredComments);
    }
    resultsContainer.style.display = filteredComments.length > 0 ? 'block' : 'none';
};
// Add event listeners
searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => handleSearch(), 2000); // 2s debounce delay
});
searchInput?.addEventListener('keydown', (e) => {
    handleKeyDown(e); // Immediate fetch on Enter key press
});
// Initial fetch to warm up cache (optional)
fetchComments();
