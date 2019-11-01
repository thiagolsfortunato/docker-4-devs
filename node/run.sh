#!/bin/bash

docker run --dit \
  --name node \
  -p 3000:3000 \
  -e MYSQL_DB=[DB-CHAT] \
  -e MYSQL_HOST=[container-mysql] \
  --link [container-mysql] \
  [imagem-node]