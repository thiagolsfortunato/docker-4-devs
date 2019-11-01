#!/bin/bash

docker run --dit \
  --name mysql \
  -p 3006:3306 \
  [imagem-mysql]