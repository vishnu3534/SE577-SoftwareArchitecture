# Use and install node v16 first
FROM node:16
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Create app directory
#USER node
WORKDIR /home/node/app
#USER node

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY server.js ./
COPY data.yaml ./


# If you are building your code for production
# RUN npm ci --only=production
#RUN npm init typescript
RUN npm install typescript 
RUN npm install ts-node 
RUN npm install express
RUN npm install js-yaml
RUN npm init -y

#npm run start

EXPOSE 3000
CMD [ "node", "server.js" ]