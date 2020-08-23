// Have header p appear after 3.5 seconds
setTimeout(function () {
  document.getElementById('down').classList.remove('hide');
}, 3050);




// Stop existing audio when you click a new audio button. (Thanks to this! https://stackoverflow.com/questions/43430897/javascript-to-stop-playing-sound-when-another-starts)
const allAudios = document.querySelectorAll('audio');
function stopAllAudio() {
  allAudios.forEach(function (audio) {
    audio.pause();
  });
}

// Event listener for each NDF track
const ndf = document.querySelectorAll('li.ndfTrax');
ndf.forEach(function (track) {
  track.addEventListener('click', playTrack)
})
const stop = document.querySelector('li.stopTrax');

function playTrack(e){
  stopAllAudio();
  const audio = document.querySelector(`audio[id=${e.target.id}]`);
  console.log(e.target.id);
  audio.currentTime = 0;
  audio.play();
  audio.loop=true;
  stop.classList.remove('hide');
};

stop.addEventListener('click', stopTrack);

function stopTrack() {
  stopAllAudio();
  stop.classList.add('hide');
};





// function stopTrack(e) {
//   const audio = document.querySelector(`audio[id=${e.target.id}]`);
//   if (audio.play() = true) {
//     audio.pause();
//     audio.currentTime = 0;
//   }
// };




// function playTrack(){
//   console.log(audio);
  
  // if (track.id === audio.id) {
  // } else {
    //   return
  // };







// ndf.addEventListener('click', function(e){
//   console.log(e.currentTarget)
//   console.log(audio)
// })