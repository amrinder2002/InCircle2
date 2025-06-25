# InCircle2

## API configuration

API URLs are loaded from environment variables via `app.config.js`. Define the following variables before starting the app:

- `API_URL_DEV` – development API endpoint
- `API_URL_STAGING` – staging API endpoint
- `API_URL_PROD` – production API endpoint

You can export them in your shell when running Expo:

```bash
API_URL_DEV=http://localhost:9000/api \
API_URL_STAGING=https://staging.example.com/api \
API_URL_PROD=https://api.example.com/api \
npm start
```

Alternatively create a `.env` file in the project root:

```env
API_URL_DEV=http://localhost:9000/api
API_URL_STAGING=https://staging.example.com/api
API_URL_PROD=https://api.example.com/api
```

`app/config/settings.js` chooses the correct URL based on the Expo release channel. The development URL is used when running `expo start`, the staging URL is used for builds created with `--release-channel staging`, and all other builds use the production URL.
