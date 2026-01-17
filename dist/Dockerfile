# Dockerfile para LuxuryRentals Landing (Dist ya compilado)
FROM nginx:alpine

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos del build (dist ya compilado)
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Healthcheck para verificar que nginx está funcionando
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
