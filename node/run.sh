#!/bin/bash

docker run -dit \
  --name node \
  -p 3000:3000 \
  -e MYSQL_DB=chat \
  -e MYSQL_HOST=mysql \
  --link mysql \
  my-node