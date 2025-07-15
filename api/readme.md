#RUN COMMAND 
#Step1
docker build -t my-node-api .
#Step2
docker run -d -p 3000:3000 --name node-api-container my-node-api


