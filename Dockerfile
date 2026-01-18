# Etapa 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar vite globalmente primero
RUN npm install -g vite

# Instalar dependencias del proyecto
RUN npm install

# Copiar código fuente
COPY . .

# Construir usando vite global
RUN vite build

# Etapa 2: Producción con Nginx
FROM nginx:alpine

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos construidos
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]