
# Two-Page Website

A simple website with server-side routing using Node.js.

## Technologies

- HTML
- Node.js (built-in HTTP module)
- Git

No external packages required.

## How to Run

1. Open Terminal in this project folder.
2. Run:

    node server.js

3. Open http://localhost:3000/

Stop the server using Ctrl + C.

## Available Routes

| Path | Page | HTTP Status |
|------|------|-------------|
| / | Home | 200 |
| /about | About | 200 |
| Any other path | Page Not Found | 404 |

## How Routing Works

1. Browser requests a URL.
2. Node.js receives the request.
3. Server reads req.url.
4. Routing conditions select the matching page.
5. Server returns HTML and an HTTP status.
6. Browser displays the page.

## Architecture

Browser
   |
   | HTTP Request
   v
Node.js Server (port 3000)
   |
   v
Inspect req.url
   |
   +-- "/" ------> Home (200)
   |
   +-- "/about" --> About (200)
   |
   +-- Other ----> Not Found (404)

## Manual Tests

- Visit / and confirm Home.
- Visit /about and confirm About.
- Click Go to About and Go to Home.
- Visit /unknown and confirm HTTP 404.
- Refresh /about.
- Open both pages in separate tabs.
- Stop the server and try refreshing.
- Use Chrome DevTools Network to inspect responses.

## Main Learning

A single server can return different pages by checking
the requested URL and selecting the correct response.
