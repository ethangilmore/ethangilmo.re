import nextMDX from '@next/mdx';

const withMDX = nextMDX();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
 
export default withMDX(nextConfig)
