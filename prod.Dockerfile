FROM node:18

WORKDIR /app

COPY . .

RUN npm run install

EXPOSE 3333
EXPOSE 3000

CMD [ "npm", "run", "dev" ]