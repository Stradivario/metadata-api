export const isDevelopment = () => process.env.NODE_ENV === 'development';

export const ENVIRONMENT = {
  PORT: process.env.API_PORT || process.env.PORT || 9000,
  NODE_ENV: process.env.NODE_ENV,
  NEO4J_USERNAME: process.env.NEO4J_USERNAME,
  NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  NEO4J_URI: process.env.NEO4J_URI,
};