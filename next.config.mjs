/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // tells Next.js to generate static HTML in 'out' folder
  images: {
    unoptimized: true // allows <Image> to use direct URLs without optimization
  }
}

export default nextConfig
