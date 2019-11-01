#!/bin/bash

docker run --dit \
  --name python \
  -p 8000:8000 \
  -e NODE_HOST=[container-node] \
  --link [container-node] \
  [imagem-python]