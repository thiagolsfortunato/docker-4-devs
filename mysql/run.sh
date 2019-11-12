#!/bin/bash

docker run -dit \
  --name mysql \
  -p 3306:3306 \
  etec-mysql