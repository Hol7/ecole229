<!-- Step 1 -->
modify index.html with your Information
<!-- Firt command to run -->
docker build -t my-portfolio .
<!-- second command to run  -->
docker run -d -p 8080:80 --name portfolio-container my-portfolio
<!-- finally -->
http://localhost:8080
