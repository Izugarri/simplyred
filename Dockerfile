# Dockerfile

# Use Alpine Linux as the base image
# we're using it since it's tiny in size (~5 MB)
FROM python:3.9.6-alpine

# Set the working directory
WORKDIR /app



# Copy over the source code
COPY . .

# Expose the port
EXPOSE 80

# Run the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]