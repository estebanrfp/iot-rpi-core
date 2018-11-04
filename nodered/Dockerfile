# Dockerfile
FROM nodered/node-red-docker:rpi
COPY my_flows.json ./
RUN npm install node-red-node-wordpos \
    node-red-dashboard \
    node-red-contrib-mqtt-broker \
    leapjs node-red-contrib-leap-motion \
    node-red-contrib-telegrambot \
    node-red-contrib-chatbot \
    node-red-contrib-cryptocompare \
    node-red-contrib-opencv \
    node-red-contrib-homekit \
    node-red-contrib-binance \ 
    node-red-contrib-google-action \
    node-red-contrib-google-action-dialogflow \
    node-red-contrib-google-home-notify \
    node-red-contrib-google-home-notify-volume-adjustable \
    node-red-contrib-home-assistant \
    node-red-contrib-home-assistant-ws \
    node-red-node-email \
    node-red-contrib-node-hue