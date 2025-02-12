
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports=nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()

// const withSitemap = require('next-sitemap');
// module.exports = withSitemap({
//     sitemap:{
//         siteUrl:'https://frostforge.co.uk',
//         changefreq: 'daily',
//         priority: 0.7,
//         sitemapSize: 5000,
//         alternateRefs: [
//             {
//               href: 'https://www.frostforge.co.uk',
//               hreflang: 'www',
//             },
//           ],
//     },
// })
