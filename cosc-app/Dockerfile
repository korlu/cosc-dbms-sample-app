
### STAGE 1: Build ###
FROM node:12.18-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.20-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/cosc-app /usr/share/nginx/html



# FROM nginx:1.20-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY /dist/cosc-app /usr/share/nginx/html



# FROM node:12.18-alpine
# ENV NODE_ENV=production
# ENV PORT=3000
# # ENV HOST=localhost
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]
