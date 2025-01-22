import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 4201; // change this if needed

// helper function to proxy external API requests
const proxyRequest = async (
  req: express.Request,
  res: express.Response,
  targetUrl: string
) => {
  try {
    console.log('proxying', targetUrl);
    const response = await axios({
      method: req.method,
      url: targetUrl,
      params: req.query,
      data: req.body,
      headers: {
        ...req.headers,
        host: undefined, // remove host header to avoid conflicts
      },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (!(error instanceof Error)) {
      console.error(
        'internal error: unexpected error type ',
        typeof error,
        error
      );
      return;
    }
    console.error(`proxy error (${req.originalUrl}):`, error?.message);
    res.status(500).json({ error: 'proxy failed', details: error?.message });
  }
};

const NIX_API = 'https://search.devbox.sh/v2';
// define proxy routes
app.get('/api/search', (req, res) =>
  proxyRequest(req, res, `${NIX_API}/search`)
);
app.get('/api/pkg', (req, res) => proxyRequest(req, res, `${NIX_API}/pkg`));

// start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
