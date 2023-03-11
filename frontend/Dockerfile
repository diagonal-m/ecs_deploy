FROM node:16.19-alpine

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json

RUN npm install -g create-react-app

ADD . /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]