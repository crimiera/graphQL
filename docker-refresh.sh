#!/bin/bash
#imageName=xx:my-image
#containerName=my-container

#docker build -t $imageName -f Dockerfile  .

#echo Delete old container...
#docker rm -f $containerName

#echo Run new container...
#docker run -d -p 5000:5000 --name $containerName $imageName
cd /src

echo Run new container...
docker-compose build --no-cache --force-rm

echo RemoStops containers and removes containers, networks, volumes, and images created by up.
docker-compose down -v

echo Build containers up 
docker-compose up