FROM mysql:5.7 as BASE

LABEL maintainer="http://github.com/thiagolsfortunato"

ADD create_database.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD mysql-pass
ENV MYSQL_DATABASE chat
ENV MYSQL_USER mysql-user
ENV MYSQL_PASSWORD mysql-pass

EXPOSE 3306