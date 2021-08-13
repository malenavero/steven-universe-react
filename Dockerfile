#Partimos desde la version lts
FROM node:lts
#
WORKDIR /usr/src/app
#Copio los archivos a la img
COPY . .
#Corro el npm install
RUN npm install
#Expongo un puerto
EXPOSE 3000
#Corro el comando npm start
CMD ["npm", "start"]

#En consola:
#Ejecutar el dockerfile
#sudo docker build .
#sudo docker images (copiar id)
#sudo docker run -p 3000:3000 id

