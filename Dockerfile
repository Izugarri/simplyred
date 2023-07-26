FROM nginx
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./ /usr/share/nginx/html