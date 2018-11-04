# iot-rpi-core

# install node-red on raspberry pi 3 model b plus

wget https://github.com/estebanrfp/iot-rpi-core

git clone git@github.com:estebanrfp/iot-rpi-core.git

docker run -it -p 1880:1880 --name mynodered nodered/node-red-docker

# remove
docker run -it -p 1880:1880 --rm --privileged -v /home/pi/.node-red:/root/.node-red nieleyde/rpi-nodered

# Define env.sh
    #!/bin/sh

    DEVICE=rpi1
    FLOWS=my_flows.json

# install from dockerhub

docker build -t estebanrfp/iot-rpi-core:latest https://github.com/estebanrfp/iot-rpi-core.git && docker run --privileged -e DEVICE='rpi1' -e estebanrfp/iot-rpi-core
