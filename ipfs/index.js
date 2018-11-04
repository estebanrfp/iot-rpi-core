var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('127.0.0.1', '5001', {protocol: 'http'});

const topic = 'general';
var five = require('johnny-five');

five.Board().on('ready', function(){
  let led = new five.let (9);
  console.log('Ready');

  const receiveMsg = (msg) => {
    console.log(msg.data.toString());
    if(msg.data.toString() == "on"){
      let .on();
    } else {
      let .off();
    }

  }
  ipfs.pubsub.subscribe(topic, receiveMsg);
});

var msgSend;
var counter = 0
setInterval(function(){
  msgSend = new Buffer(counter.toString());
  ipfs.pubsub.publish(topic, msgSend, (err) => {
    if (err) {
      throw err
    }
    // msg was broadcasted
  })
  counter++
}, 3000);