# Dockerfile

# Use Alpine Linux as the base image
# we're using it since it's tiny in size (~5 MB)
FROM python:3.9.6-alpine

# Set the working directory
WORKDIR /app

# Set environmental variables
ENV PYTHONDONTWRITEBYTECODE 1  # Prevents Python from writing out .pyc files
ENV PYTHONUNBUFFERED 1         # Keeps Python from buffering stdin/stdout

# Copy over the requirements file and install the dependencies
COPY ./requirements.txt .
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt

# Copy over the source code
COPY . .

# Expose the port
EXPOSE 80

# Run the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]