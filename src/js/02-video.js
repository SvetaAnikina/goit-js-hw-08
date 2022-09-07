import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000)
);
if (localStorage.getItem('videoplayer-current-time')) {
   player.setCurrentTime(localStorage.getItem('videoplayer-current-time')); 
}


