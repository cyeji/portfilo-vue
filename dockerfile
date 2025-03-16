# 1. Vue 빌드를 위한 Node.js 환경
FROM node:18-alpine AS build-stage
WORKDIR /app

# package.json과 lock 파일 복사 후 종속성 설치
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# 프로젝트 소스 복사 후 빌드 실행
COPY . .
RUN npm run build

# 2. Nginx를 통한 정적 파일 서빙
FROM nginx:1.23.3-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx 포트 설정
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]