FROM node:12
RUN mkdir -p /app
WORKDIR /app
COPY ./package.json .
RUN npm i
COPY . .
EXPOSE 9009
CMD [ "npm", "start" ]