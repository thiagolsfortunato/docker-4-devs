FROM node:12-alpine

WORKDIR /app

# COPY APP 
COPY app.js package.json /app/

# INSTALL DEPENDENCIES
RUN npm install

ENV MYSQL_HOST localhost
ENV MYSQL_USER mysql-user
ENV MYSQL_PASSWORD pa$$w0rd
ENV MYSQL_DB hello

# RUN APP
ENTRYPOINT [ "node", "app.js" ]