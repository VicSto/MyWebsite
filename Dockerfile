# installing version 21 of Node
FROM node:21
# specifying the workspace in the container
WORKDIR /usr/src/app/MyWebsite
# copy and install packages
COPY package*.json ./
RUN npm install
# helps provide faster, reliable, reproducible builds for production environments. 
RUN npm ci --omit=dev
# Bundle app source
COPY . .
# expose the port for the app
EXPOSE 5000
# start the Node app
CMD [ "node", "index.js" ]
