// definition des variables 
const playBouton = document.querySelector('#play');
const nextBouton = document.querySelector('#next');
const previousBouton = document.querySelector('#previous');
const Irange = document.querySelector('#Irange');
const timeline = document.querySelector('#timeline .carre')
const timeMax = document.querySelector('#timeMax')
const link_clip = document.querySelector('#link_clip')
const nom_clip = document.querySelector('#nom_clip')

var audio = new Audio();

var cpt = 1;
var i = 0;
var Musics = [
    {
        src : "hit/KS_bloom_-_Cathérine_est_malade__Lyrics_Video_(720p).mp3",
        timeSeconde : 173,
        timeMinute : "02:53",
        name:"KS_bloom_-_Cathérine_est_malade__Lyrics_Video_(720p).mp3"
    },
    {
        src : "hit/KS_BLOOM_-__satan_dehors___CLIP_OFFICIEL__(135).mp3",
        timeSeconde : 165,
        timeMinute : "02:45",
        name:"KS_BLOOM_-__satan_dehors___CLIP_OFFICIEL__(135).mp3"
    },
    {
        src:"hit/Lauren Daigle - Everything (Starstruck Sessions) ( 128kbps ).mp3"
    },
    {
        src:"hit/Lauren Daigle - Little Drummer Boy (Audio) ( 160kbps ).mp3"
    },
];
    audio.src = Musics[i].src;
    const audioTime = Musics[i].timeSeconde;
    const donwloadd= Musics[i].name;
    nom_clip.innerHTML = Musics[i].name;

    playBouton.addEventListener('click',(e)=>{
       timeMax.innerHTML = Musics[i].timeMinute


        if(cpt == 1 ){
        audio.play();
        
        timeline.style.animationPlayState=""
        timeline.style.animation = `play linear ${Math.round(audio.duration)}s`
        // timeline.classList.add('move') 
        playBouton.innerHTML = ' <svg  id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" class="h-12 w-12"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/><path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/></g></svg>';
        link_clip.href = audio.src
        link_clip.download = donwloadd
       
        
        cpt = 0;
    }else {
        
         playBouton.innerHTML = ' <svg id="play" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z" />';

         audio.pause();
         timeline.style.animationPlayState="paused"
        cpt = 1;
    }
    
    
})

nextBouton.addEventListener('click',(e)=>{
    i++;
      audio.src = Musics[i].src;
    const audioTime = Musics[i].timeSeconde;
    const donwloadd= Musics[i].name;
    nom_clip.innerHTML = Musics[i].name;
    console.log(i);
   clearInterval(timerInterval)
        totalSeconds = 0
        isRunning = false;
        timerElement.textContent = "00:00"
    timeline.removeAttribute('style')
})
previousBouton.addEventListener('click',(e)=>{
    i--;
      audio.src = Musics[i].src;
    const audioTime = Musics[i].timeSeconde;
    const donwloadd= Musics[i].name;
    nom_clip.innerHTML = Musics[i].name;
    console.log(i);
        
        
        
        // 
        clearInterval(timerInterval)
        totalSeconds = 0
        isRunning = false;
        timerElement.textContent = "00:00"
   timeline.removeAttribute('style')
})


let timerInterval = null;
let totalSeconds = 0;
let isRunning = false;

const timerElement = document.getElementById('timer');

function updateTimer(){
    if(totalSeconds >= audioTime){
        clearInterval(timerInterval)
        isRunning = false;
        return;
    }
  totalSeconds++;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
 
  timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function playTimer() {
    

  if (!isRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

playBouton.addEventListener('click', () => {
  if (isRunning ) {
    pauseTimer();
  } else {
    playTimer();
  }
  
});