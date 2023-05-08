# Utiliza una imagen de node.js como base
FROM node:lts-alpine3.14 as build-stage

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package.json /app/

# Instala las dependencias
RUN npm i --force

# Copia todo el contenido de la aplicación al contenedor
COPY ./ /app/

# Construye la aplicación para producción
RUN npm run build && rm -rf /app/node_modules

# Copia los archivos de la aplicación al directorio de trabajo
FROM nginx:latest

COPY --from=build-stage /app/dist/front /usr/share/nginx/html
COPY --from=build-stage /app/dist/front /usr/share/nginx/html/front

EXPOSE 4200 80

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Instrucciones para construir la imagen
# Detener y eliminar el contenedor
# Eliminar la imagen
# Construir la imagen
# Ejecutar el contenedor
# Validar que la aplicación esté corriendo
# Ver los logs del contenedor
# Petición a la aplicación

# docker stop arquisoftwebapp
# docker rm arquisoftwebapp
# docker rmi arquisoftwebapp
# docker build -t arquisoftwebapp .
# docker run -d -p 80:80 --name arquisoftwebapp arquisoftwebapp
# docker ps
# docker logs arquisoftwebapp
# curl http://localhost:80
# 
