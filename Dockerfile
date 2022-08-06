# build stage
# FROM  node:16.16.0 as build-stage
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# production stage
FROM nginx as production-stage
COPY build /app
COPY nginx.conf /etc/nginx/nginx.conf
HEALTHCHECK CMD curl -fs http://localhost/ || exit 1