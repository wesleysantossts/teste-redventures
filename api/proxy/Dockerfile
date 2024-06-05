FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443

VOLUME ["./nginx.conf", "/etc/nginx/conf.d/nginx.conf"]