FROM node:latest

WORKDIR /usr/src/app/graphqlApp

COPY ./package.json /usr/src/app/graphqlApp
COPY ./package-lock.json /usr/src/app/graphqlApp

RUN npm install
COPY . /usr/src/app/graphqlApp/
EXPOSE 4000
CMD npm run dev
