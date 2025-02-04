const express = require('express');
const app = express();

// Define status codes and their messages
const statusMessages = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and has resulted in a new resource being created.",
    204: "No Content: The server successfully processed the request, but there is no content to return.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: Authentication is required and has failed or has not been provided.",
    403: "Forbidden: The client does not have access rights to the content.",
    404: "Not Found: The server has not found anything matching the request URI.",
    405: "Method Not Allowed: The method used in the request is not supported for the resource.",
    429: "Too Many Requests: The client has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from an upstream server.",
    503: "Service Unavailable: The server is not ready to handle the request, usually due to maintenance.",
    504: "Gateway Timeout: The server did not receive a timely response from an upstream server."
};

// Create a GET endpoint at "/status-info"
app.get('/status-info', (req, res) => {
    // Get the "code" query parameter from the request
    const statusCode = parseInt(req.query.code);

    // Check if the status code exists in our dictionary
    if (statusMessages[statusCode]) {
        res.json({
            status: statusCode,
            message: statusMessages[statusCode]
        });
    } else {
        // Return a default response for unknown status codes
        res.status(400).json({
            status: 400,
            message: "Invalid status code provided. Please provide a valid HTTP status code."
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});