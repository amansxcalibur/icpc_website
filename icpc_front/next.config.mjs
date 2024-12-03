/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/provisional-winners",
        destination: "/404",
        permanent: true,
      },
      // {
      //   source: "/selected-teams",
      //   destination: "/404",
      //   permanent: true,
      // }
    ];
  },
};

export default nextConfig;
