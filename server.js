const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url);

  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end(`
    <h1>Welcome Home</h1>
    <p>This is the home page.</p>
  `);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
