
const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url);

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    res.end(`
      <h1>Welcome Home</h1>
      <p>This is the home page.</p>
    `);

  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    res.end(`
      <h1>About This Website</h1>
      <p>This website has two pages served by Node.js.</p>
    `);

  } else {
    res.writeHead(404, {
      "Content-Type": "text/html"
    });

    res.end(`
      <h1>Page Not Found</h1>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
