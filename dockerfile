FROM node:latest

WORKDIR /usr/src/app/serviceoffer

COPY ./package.json /usr/src/app/serviceoffer

RUN npm install
COPY . /usr/src/app/serviceoffer
EXPOSE 4000
CMD npm run dev
