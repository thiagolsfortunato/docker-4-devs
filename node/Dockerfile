FROM node:12

LABEL maintainer="http://github.com/thiagolsfortunato"

WORKDIR /app

# COPY APP 
COPY app.js package.json /app/

# INSTALL DEPENDENCIES
RUN npm install

ENV MYSQL_HOST localhost
ENV MYSQL_USER mysql-user
ENV MYSQL_PASSWORD mysql-pass
ENV MYSQL_DB chat

EXPOSE 3000

# RUN APP
CMD [ "node", "app.js" ]