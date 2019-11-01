FROM python:3.6

WORKDIR /app

# COPY APP 
COPY app.py requirements.txt /app/

# INSTALL DEPENDENCIES
RUN pip install -r requirements.txt

ENV NODE_HOST localhost
ENV NODE_PORT 3000

EXPOSE 8000

CMD ["python", "app.py"]