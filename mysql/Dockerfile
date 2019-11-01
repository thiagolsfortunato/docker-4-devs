FROM mysql:5.7 as BASE

ADD create_database.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD mysql-pass
ENV MYSQL_DATABASE chat
ENV MYSQL_USER root
ENV MYSQL_PASSWORD mysql-pass

EXPOSE 3306