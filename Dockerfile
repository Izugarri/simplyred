FROM nginx:stable-alpine
COPY ./ /usr/share/nginx/html
COPY health-check.conf /etc/nginx/conf.d/health-check.conf