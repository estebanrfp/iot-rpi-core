const git = require('simple-git')

// process.on('SIGINT', function() {
//   process.exit()
// });

var running = false

setInterval(function() {
  if (running == true) return false
  running = true
  autoPull()
}, 30000)

function autoPull () {
  console.log('autoPull')
  // console.log(data.val())
  git()
    .exec(function() {
      console.log('Starting pull ...')
    })
    .pull('origin', 'master', function(err, update) {
      if(update && update.summary.changes) {
        console.log(update)
        console.log('processing and restarting app ...')
      }
    })
    .exec(function() {
      console.log('pull done.')
      running = false
    })
}
