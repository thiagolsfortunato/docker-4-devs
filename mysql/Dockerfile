FROM mysql:5.7 as BASE

ADD create_database.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD pa$$w0rd123
ENV MYSQL_DATABASE chat
ENV MYSQL_USER mysql-user
ENV MYSQL_PASSWORD pa$$w0rd

EXPOSE 3306