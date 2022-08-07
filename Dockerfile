FROM nginxinc/nginx-unprivileged:stable-alpine 
COPY ./ /usr/share/nginx/html
CMD nginx -g 'daemon off;'
