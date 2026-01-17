FROM nginx:alpine

# Copiar nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos
COPY . /usr/share/nginx/html

# Puerto
EXPOSE 80

# Sin healthcheck (causa problemas a veces)
# CMD simplificado
CMD ["nginx", "-g", "daemon off;"]
