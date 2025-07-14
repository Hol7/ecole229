# Step 1: Use Nginx image
FROM nginx:alpine

# Step 2: Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy custom files to the container
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Done: Nginx will now serve index.html and styles.css
