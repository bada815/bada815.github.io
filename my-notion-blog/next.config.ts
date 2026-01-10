/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // GitHub Pages용 정적 내보내기 설정
  images: {
    unoptimized: true, // 정적 배포 시 Next.js 이미지 최적화 비활성화 필수
  },
};

module.exports = nextConfig;