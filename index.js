const express = require('express');
const app = express();

// Define a route that serves the combined HTML and CSS content
app.get('/', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Logo</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                }
            
                .logo-container {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            
                h1 {
                    font-size: 3rem;
                    color: #333;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="logo-container">
                <h1>NEXTGEN PROJECT</h1>
            </div>
        </body>
        </html>
    `;
    res.send(htmlContent);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
