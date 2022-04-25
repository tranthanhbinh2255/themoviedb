module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/top-rated-movie',
        permanent: true,
      },
    ]
  },
  env: {
    API_HOST: process.env.API_HOST,
    API_KEY: process.env.API_KEY,
  }
}
