const url = require('url');
const conn = require('../connection.js')

const userRoutes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.setHeader('Content-Type', 'application/json');

  if (pathname.startsWith('/api/user') && req.method === 'POST') {
    console.log('Request method is POST for /api/user');
    console.log('conn',conn)
    const userId = query.id;
    const name = query.name;
    if (userId) {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: `User ID is: ${userId} name: ${name}` }));
    } else {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'User ID is required in query string' }));
    }
    return true; // Indicate that the route was handled
  }

  return false; // Indicate that the route was not handled
};

module.exports = userRoutes;
