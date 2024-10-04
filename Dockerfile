# Etapa 1: Construcción de la aplicación Vue.js
FROM node:18-alpine as build-stage

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el proyecto a la imagen
COPY . .

# Compilar la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación usando Nginx
FROM nginx:stable-alpine as production-stage

# Copiar el build generado en la primera etapa a Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exponer el puerto que Nginx usará
EXPOSE 80
