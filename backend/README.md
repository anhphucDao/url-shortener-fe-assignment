# URL Shortener Backend

Node.js/Express API for URL shortening with QR codes and MongoDB.

## Quick Start

```bash
# Install dependencies
yarn install

# Setup environment
cp .env.example .env

# Start MongoDB
docker run -d -p 27017:27017 --name mongo-container mongo:7.0

# Start server
yarn dev
```

## API Endpoints

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| POST   | `/api/shorten`          | Create short URL         |
| GET    | `/api/stats/:shortCode` | Get URL statistics       |
| GET    | `/:shortCode`           | Redirect to original URL |
| GET    | `/api/recent`           | Get recent URLs          |
| DELETE | `/api/:shortCode`       | Deactivate URL           |

## Environment Variables

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/url-shortener
BASE_URL=http://localhost:5001
```

## Tech Stack

- **Node.js** + Express
- **MongoDB** + Mongoose
- **QR Code** generation
- **Helmet** + CORS security
