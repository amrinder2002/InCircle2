import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    extra: {
      devApiUrl: process.env.API_URL_DEV,
      stagingApiUrl: process.env.API_URL_STAGING,
      prodApiUrl: process.env.API_URL_PROD,
    },
  };
};
