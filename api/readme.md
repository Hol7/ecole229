<!-- RUN COMMAND  -->
<!-- COMMAND TO INSTALL YOUR PACKAGES (MAKE SURE TO USE NODE 22) -->
NPM INSTALL
<!-- #command to start the node project -->
node server.js
<!-- #Step1 FOR DOCKER -->
docker build -t my-node-api .
<!-- #Step2  FOR DOCKER-->
docker run -d -p 3000:3000 --name node-api-container my-node-api


