/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://getgame9.com',
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  // You can add more configuration options here if needed
  // For example, excluding specific routes:
  // exclude: ['/server-sitemap.xml'], // <= Exclude server-side sitemap
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://getgame9.com/server-sitemap.xml', // <==== Add server side sitemap
  //   ],
  // },
}; 