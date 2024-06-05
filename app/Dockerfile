FROM alpine

WORKDIR /app
COPY . .
RUN apk add --no-cache python3 py3-pip

EXPOSE 80

CMD ["python3", "-m", "http.server", "80"]
