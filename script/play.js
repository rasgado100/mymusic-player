// definition des variables 
const playBouton = document.querySelector('#play');
const nextBouton = document.querySelector('#next');
const previousBouton = document.querySelector('#previous');
const Irange = document.querySelector('#Irange');
const timeline = document.querySelector('#timeline .carre')
const timeMax = document.querySelector('#timeMax')
const link_clip = document.querySelector('#link_clip')
const nom_clip = document.querySelector('#nom_clip')
const cover_album = document.querySelector('#cover_album')
const backLink = document.querySelector('#backLink')

const CoverIMG = [
    "assets/ks_album.jpg",
    "assets/lauren_album.jpg",
    "assets/morijah_album.jpg",
    "assets/fally_album.jpeg",
    "assets/gims_album.jpeg",
    "assets/tayc_album.jpg",
]
const params = new URLSearchParams(window.location.search)
var i = params.get("i");
var j = params.get("j");
cover_album.src = CoverIMG[i]
backLink.href=`playlist.html?id=${i}`

var audio = new Audio();

var cpt = 1;
var Musics = [
    [
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
                src:"hit/KS_BLOOM_-_DIVORCE__Clip_Officiel_(256k).mp3",
                timeSeconde : 233,
                timeMinute : "03:53",
                name:"KS_BLOOM_-_DIVORCE__Clip_Officiel_(256k).mp3"
            },
            {
                src:"hit/KS_BLOOM_-_Dans_Dos__Lyrics_Video__Feat_NK_Divine(720p).mp3",
                timeSeconde : 172,
                timeMinute : "02:52",
                name:"KS_BLOOM_-_Dans_Dos__Lyrics_Video__Feat_NK_Divine(720p).mp3"
            },
            {
                src:"hit/KS_bloom_-_Coulé__Lyrics_Video_(720p).mp3",
                timeSeconde : 135,
                timeMinute : "02:15",
                name:"KS_bloom_-_Coulé__Lyrics_Video_(720p).mp3"
            },
    ],
    [
        {
                src : "hit/Lauren Daigle - Everything (Starstruck Sessions) ( 128kbps ).mp3",
                timeSeconde : 252,
                timeMinute : "04:12",
                name:"Lauren Daigle - Everything (Starstruck Sessions) ( 128kbps ).mp3"
            },
            {
                src : "hit/Lauren Daigle - Little Drummer Boy (Audio) ( 160kbps ).mp3",
                timeSeconde : 230,
                timeMinute : "03:50",
                name:"Lauren Daigle - Little Drummer Boy (Audio) ( 160kbps ).mp3"
            },
            {
                src:"hit/Lauren Daigle - O Come All Ye Faithful (Audio) ( 160kbps ).mp3",
                timeSeconde : 266,
                timeMinute : "04:26",
                name:"Lauren Daigle - O Come All Ye Faithful (Audio) ( 160kbps ).mp3"
            },
            {
                src:"hit/Lauren Daigle - O Holy Night (Audio) ( 160kbps ).mp3",
                timeSeconde : 293,
                timeMinute : "04:53",
                name:"Lauren Daigle - O Holy Night (Audio) ( 160kbps ).mp3"
            },
            {
                src:"hit/Lauren Daigle - You Say (Clip officiel) ( 160kbps ).mp3",
                timeSeconde : 270,
                timeMinute : "04:30",
                name:"Lauren Daigle - You Say (Clip officiel) ( 160kbps ).mp3"
            },
    ],
    [
        {
                src : "hit/Faceless_-_Venus__Lyric_Visualizer__ft._Serøtonin(256k).mp3",
                timeSeconde : 140,
                timeMinute : "02:20",
                name:"Faceless_-_Venus__Lyric_Visualizer__ft._Serøtonin(256k).mp3"
            },
            {
                src : "hit/Ayra_Starr_-_Commas__Lyric_Video_(256k).mp3",
                timeSeconde : 156,
                timeMinute : "02:36",
                name:"Ayra_Starr_-_Commas__Lyric_Video_(256k).mp3"
            },
            {
                src:"hit/Burna_Boy_-_Higher_[Official_Music_Video](256k).mp3",
                timeSeconde : 264,
                timeMinute : "04:24",
                name:"Burna_Boy_-_Higher_[Official_Music_Video](256k).mp3"
            },
            {
                src:"hit/Kunmie_-_Arike__Official_Video_(256k).mp3",
                timeSeconde : 124,
                timeMinute : "02:04",
                name:"Kunmie_-_Arike__Official_Video_(256k).mp3"
            },
            {
                src:"hit/Tems_-_Me___U__Official_Video_(256k).mp3",
                timeSeconde : 203,
                timeMinute : "03:23",
                name:"Tems_-_Me___U__Official_Video_(256k).mp3"
            },
    ],
    [
        {
                src : "hit/Fally_Ipupa_-_Le_Temps__Visualizer_(256k).mp3",
                timeSeconde : 449,
                timeMinute : "07:29",
                name:"Fally_Ipupa_-_Le_Temps__Visualizer_(256k).mp3",
            },
            {
                src : "hit/Fally_Ipupa_-_Mayday__Clip_Officiel_(256k).mp3",
                timeSeconde : 437,
                timeMinute : "07:17",
                name:"Fally_Ipupa_-_Mayday__Clip_Officiel_(256k).mp3",
            },
            {
                src:"hit/Fally_Ipupa_-_Nidja_feat__R_Kelly.mp3",
                timeSeconde : 265,
                timeMinute : "04:25",
                name:"Fally_Ipupa_-_Nidja_feat__R_Kelly.mp3",
            },
            {
                src:"hit/Fally_Ipupa_-_Se_Yo__Clip_officiel_(256k).mp3",
                timeSeconde : 452,
                timeMinute : "07:32",
                name:"Fally_Ipupa_-_Se_Yo__Clip_officiel_(256k).mp3",
            },
            {
                src:"hit/Fally_Ipupa_-_SL__Clip_Officiel_(256k).mp3",
                timeSeconde : 448,
                timeMinute : "07:28",
                name:"Fally_Ipupa_-_SL__Clip_Officiel_(256k).mp3",
            },
    ],
    [
        {
                src : "hit/GIMS__-_DIANA__Clip_officiel_(256k).mp3",
                timeSeconde : 139,
                timeMinute : "02:19",
                name:"GIMS__-_DIANA__Clip_officiel_(256k).mp3",
            },
            {
                src : "hit/GIMS___DYSTINCT_-_SPIDER__Clip_officiel_(256k).mp3",
                timeSeconde : 225,
                timeMinute : "03:45",
                name:"GIMS___DYSTINCT_-_SPIDER__Clip_officiel_(256k).mp3",
            },
            {
                src:"hit/GIMS___La_Mano_1.9_-_PARISIENNE__Clip_officiel_(256k).mp3",
                timeSeconde : 159,
                timeMinute : "02:39",
                name:"GIMS___La_Mano_1.9_-_PARISIENNE__Clip_officiel_(256k).mp3",
            },
            {
                src:"hit/GIMS__-_NINAO__Clip_officiel_(256k).mp3",
                timeSeconde : 172,
                timeMinute : "02:52",
                name:"GIMS__-_NINAO__Clip_officiel_(256k).mp3",
            },
            {
                src:"hit/GIMS_-_SENTIMENTAL__Clip_officiel_(256k).mp3",
                timeSeconde : 217,
                timeMinute : "03:37",
                name:"GIMS_-_SENTIMENTAL__Clip_officiel_(256k).mp3",
            },
    ],
    [
        {
                src : "hit/Tayc - Aloviou.mp3",
                timeSeconde : 279,
                timeMinute : "04:39",
                name:"Tayc - Aloviou.mp3",
            },
            {
                src : "hit/Tayc - Carry Me - Acoustic (Official Lyrics Video).mp3",
                timeSeconde : 204,
                timeMinute : "03:24",
                name:"Tayc - Carry Me - Acoustic (Official Lyrics Video).mp3",
            },
            {
                src:"hit/Tayc_-_Comme_toi_(Clip_Officiel)(480p).mp3",
                timeSeconde : 225,
                timeMinute : "03:45",
                name:"Tayc_-_Comme_toi_(Clip_Officiel)(480p).mp3",
            },
            {
                src:"hit/Tayc - C'est lui.mp3",
                timeSeconde : 245,
                timeMinute : "04:05",
                name:"Tayc - C'est lui.mp3",
            },
            {
                src:"hit/Tayc - Vous deux [FLEUR FROIDE].mp3",
                timeSeconde : 219,
                timeMinute : "03:39",
                name:"Tayc - Vous deux [FLEUR FROIDE].mp3",
            },
    ],
    
];
    audio.src = Musics[i][j-1].src;
    const audioTime = Musics[i][j-1].timeSeconde;
    const donwloadd= Musics[i][j-1].name;
    nom_clip.innerHTML = Musics[i][j-1].name;

    playBouton.addEventListener('click',(e)=>{
       timeMax.innerHTML = Musics[i][j-1].timeMinute


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
    j++;
    if(j>=4){
        j=1;
    }
      audio.src = Musics[i][j-1].src;
    const audioTime = Musics[i][j-1].timeSeconde;
    const donwloadd= Musics[i][j-1].name;
    nom_clip.innerHTML = Musics[i][j-1].name;
    console.log(i);
   clearInterval(timerInterval)
        totalSeconds = 0
        isRunning = false;
        timerElement.textContent = "00:00"
    timeline.removeAttribute('style')
})
previousBouton.addEventListener('click',(e)=>{
    j--;
     if(j<=1){
        j=4;
    }
      audio.src = Musics[i][j-1].src;
    const audioTime = Musics[i][j-1].timeSeconde;
    const donwloadd= Musics[i][j-1].name;
    nom_clip.innerHTML = Musics[i][j-1].name;
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