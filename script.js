let changeButton = document.getElementById("change_button");
let changeButtonTwo = document.getElementById("change_buttontwo");
let changeButtonThree = document.getElementById("change_buttonthree"); 
let changeButtonFour = document.getElementById("change_buttonfour");
let changeButtonFive = document.getElementById("change_buttonfive"); 


let videoDiv = document.getElementById ("video_div");
let trailerDiv = document.getElementById ("trailer_div");
let upComingTrailerDiv = document.getElementById ("upComingTrailer_div");
let movieEditDiv = document.getElementById ("movieEdit_div");
let spotifySongDiv = document.getElementById("spotifySong_div"); 


let firstVideo = videoDiv.children[0]; 
let firstTrailer = trailerDiv.children[0]; 
let firstUpcomingTrailer = upComingTrailerDiv.children[0]; 
let firstMovieEdit = movieEditDiv.children[0]; 
let firstSpotifySong = spotifySongDiv.children[0]; 

let musicInFilmVideosArray =[
    "https://www.youtube.com/embed/92w5ozZgzG0?si=7ZS0fg_8adTg3HFs",
"https://www.youtube.com/embed/rkmQWyK2h3c?si=pSHrhxu6wAaBzBXQ",
"https://www.youtube.com/embed/w5SRH6Ac1LI?si=7kP8hVC-T4136vms",
"https://www.youtube.com/embed/vZPzZ_NEwEQ?si=_6PqFAYmZdBOTCGW",
"https://www.youtube.com/embed/tEM5jJWfKFY?si=KgjknxpeM-7Ou4ca", 
"https://www.youtube.com/embed/tSc-pkW4GHE?si=g1NPUczQclFNovD3", 
"https://www.youtube.com/embed/j9Vit2vq22M?si=tGyZw1K1n7a5cncN", 
"https://www.youtube.com/embed/OXQ8oI6B6T0?si=NeNoLF_BYJnRD062",
"https://www.youtube.com/embed/26NOGYsTWOI?si=U4GSYAJdXz7MW1CX" , //maneater 
"https://www.youtube.com/embed/A_HjMIjzyMU?si=nVeDbNrX_H1-uvP_" , // i need ahero 
"https://www.youtube.com/embed/pyMU8O2B2Vs?si=b-EXv54dmixTDflt" , // good moring 
"https://www.youtube.com/embed/1lDc2Cce7fc?si=l3Kpr_H3KgfV8nIP" , // nothing you can take from me
"https://www.youtube.com/embed/Qk9tnC-_y70?si=XrSR6SbcEVr0Rk3d" , // rriff off pitch perfect two 
"https://www.youtube.com/embed/ThwgavWbVCc?si=pJxM7XcTD7K3jXfA" , // final performannce pitch perfect two
   
    "https://www.youtube.com/embed/hGdz2rMbTIM?si=JGyXcnxRJwRZ_FlI" , // riff off pitch perfect one

]; 

let trailerArray = [
    "https://www.youtube.com/embed/zrMnGDzmyI0?si=4vur7z0dIQ506UBm", 
    "https://www.youtube.com/embed/ZLO4X6UI8OY?si=4OtFEuEh_I_ZOYE9", 
    "https://www.youtube.com/embed/0pdqf4P9MB8?si=_7OcWOITE-7TU3fP", 
    "https://www.youtube.com/embed/E_Ci-pAL4eE?si=_EGwRAMA54xKQ7Ep", 
"https://www.youtube.com/embed/OiTiKOy59o4?si=k223AtH1tziYiyDU", 
"https://www.youtube.com/embed/AST2-4db4ic?si=8MGKqGfms3qLFqtR", 
"https://www.youtube.com/embed/LjLamj-b0I8?si=pJ_0DZWVWcSwI6r5", 
"https://www.youtube.com/embed/k98Afd7Nf3Y?si=PhELJNgQNClQbsGO", 
"https://www.youtube.com/embed/x0XDEhP4MQs?si=wQ5y8E5OqUzOGGBl", 
"https://www.youtube.com/embed/7wd5KEaOtm4?si=_bD86et5lgAZaSvg", 
"https://www.youtube.com/embed/Z9AYPxH5NTM?si=CExnYB4OpSCSkZB9", 
"https://www.youtube.com/embed/P15S6ND8kbQ?si=g-wRFUXohBrEahGj", 
"https://www.youtube.com/embed/hEJnMQG9ev8?si=V7ENGp_hHyBaTRTC", 
"https://www.youtube.com/embed/XuDwndGaCFo?si=lE8G4m73BMhbcajQ" , 
"https://www.youtube.com/embed/sSmBIIGZoGI?si=kTlbhqjNt6mVNpVM" , 
"https://www.youtube.com/embed/hCBWOfCgRh4?si=ix2kFf3yIsSIJSTw", 
"https://www.youtube.com/embed/c_7i57oQZ0g?si=oXyV9-88Bpw7qLEY", // bottoms
"https://www.youtube.com/embed/lpnW8atCkkg?si=QzHeALiHmYHIp169" , // supw eight
"https://www.youtube.com/embed/bLvqoHBptjg?si=OYBsyfxMkzq_DhsQ" , // forest gump
"https://www.youtube.com/embed/TLnQXsKn5-E?si=9XmxOJDy2Ui2r6QI" , // war of the worlds 
"https://www.youtube.com/embed/CH_OHepiHJw?si=JQjeJDkOERuOR21w", // harriet 
"https://www.youtube.com/embed/7BWWWQzTpNU?si=1W-lmgeC4C9fMKaP" , // Passengers
"https://www.youtube.com/embed/Pj0wz7zu3Ms?si=8qCfeUSvIm6YjkhT" , // rednotice
"https://www.youtube.com/embed/4OzaexEqDa8?si=jF1s-mLckqZnFFva" , // quiz lady 
]; 

let upComingTrailerArray = [ 
 "https://www.youtube.com/embed/_OKAwz2MsJs?si=kXrW6ZNJV5V9YZhO", // Joker: Foilie a Duex
 "https://www.youtube.com/embed/As-vKW4ZboU?si=elJixJvYoPKKp-XN" , // Beetle Juice Beetle Juice
 
 "https://www.youtube.com/embed/qkgkUCqEum4?si=SQWK0TMMqT5eaCrZ", // Moana two
 "https://www.youtube.com/embed/MH02yagHaNw?si=ew5OREilxKD36wGs", // we live in time
 "https://www.youtube.com/embed/5jXLBJguAl4?si=TNP3uxio664F_jdu" , // the good half 
 
 "https://www.youtube.com/embed/I_id-SkGU2k?si=k4Ej3mba08FM2TUo" , // here 
 "https://www.youtube.com/embed/TbiPcMCz0Ek?si=w8LMITOlzsuVl5RL" ,// snow white
 "https://www.youtube.com/embed/7Bc6trBc1kc?si=PxPRaf-oV3byXAX-" , // piece by piece
 "https://www.youtube.com/embed/67vbA5ZJdKQ?si=VZfgRTZEt_W5KEFh" , // the wild robot



]; 

let MovieEditArray = [
    "https://www.youtube.com/embed/iiRFOqEiMLI?si=jXDZmgMpZ1sZ3hzx", // I just Want to Dance 
    "https://www.youtube.com/embed/_aXM8ukJSNg?si=Q51d0R_QTfsO8TI_" ,// Gwen Stacy (amazing spide man)
    "https://www.youtube.com/embed/FD1hqvhIVXY?si=vOt2AGI5KK93FTZu", //inersetller
    "https://www.youtube.com/embed/KQT32vW61eI?si=a8vRFZvOwov4yIVV" , //call my your name
"https://www.youtube.com/embed/CFG8DtIt7X0?si=D4uB2T0ZnH3ZXFc5", //cars
"https://www.youtube.com/embed/CFJNHhA-vWQ?si=xsWB8mH7zR4pRU3F" , // arrival 
"https://www.youtube.com/embed/yqjPI_m1ulA?si=RBk6qqLaQG5rC4-H" , // oppenheimer
"https://www.youtube.com/embed/d85vBCq_E38?si=akEUMyazBdisHNim" , // blade runner
"https://www.youtube.com/embed/TMhKNAyebzA?si=ROFkoVCULGTOHLa6" , // katniss 
"https://www.youtube.com/embed/GrFJ7OLQrLE?si=gb9f7lY3O6kvoE-j" , // harry potter
"https://www.youtube.com/embed/HThvXXj3Iqc?si=JtvbILNHbRsVvA-_" , // grown ups
"https://www.youtube.com/embed/vMbtSva7oLE?si=NfBukLstdrk-uD9B" , // ted 
]

let spotifySongArray = [

     "https://open.spotify.com/embed/track/17cia5k4BpGVlyEfqrFH50?utm_source=generator&theme=0" , //cant catch me now
     "https://open.spotify.com/embed/track/44EkzAU92xwm30YpD4p31i?utm_source=generator", // the amazing spider man 
     "https://open.spotify.com/embed/track/6i0V12jOa3mr6uu4WYhUBr?utm_source=generator", // heathens 
     "https://open.spotify.com/embed/track/6wf7Yu7cxBSPrRlWeSeK0Q?utm_source=generator", // what was I made for 
     "https://open.spotify.com/embed/track/11C4y2Yz1XbHmaQwO06s9f?utm_source=generator", // dance the night away 
     "https://open.spotify.com/embed/track/5kRBzRZmZTXVg8okC7SJFZ?utm_source=generator" ,// another day in the sun
     "https://open.spotify.com/embed/track/3S1tTwSKIZgf4QGltFyCxM?utm_source=generator", // every wants to rule the world 
     "https://open.spotify.com/embed/track/73SpzrcaHk0RQPFP73vqVR?utm_source=generator", // no time to die 
     "https://open.spotify.com/embed/track/60TThBDrPpek5k520l0W0L?utm_source=generator" , //scott pilgrim
     "https://open.spotify.com/embed/track/2vz1CsL5WBsbpBcwgboTAw?utm_source=generator", // footloose
     "https://open.spotify.com/embed/track/28Tmk14BdrfaV2YzxpB35c?utm_source=generator" , // cell block tango 
"https://open.spotify.com/embed/track/28Tmk14BdrfaV2YzxpB35c?utm_source=generator" , // cel block tango 
"https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH?utm_source=generator&theme=0" , // happy
"https://open.spotify.com/embed/track/3GCdLUSnKSMJhs4Tj6CV3s?utm_source=generator", // all the stars 
"https://open.spotify.com/embed/track/5c9qm0bMYawSyRNUTmUMs5?utm_source=generator", // mystery of love 
"https://open.spotify.com/embed/track/5USZyz6dnBEn1oLsKcAKQy?utm_source=generator", // shrek 
"https://open.spotify.com/embed/track/45aBsnKRWUzhwbcqOJLwfe?utm_source=generator", // this is me 
"https://open.spotify.com/embed/track/4f4HLo6L9CJNhD4mEYxrCL?utm_source=generator" , // pure imagination 
]
 


changeButtonThree.onclick = function(){ 
    let firstupComingTrailer = upComingTrailerDiv.children[0]; 

    let randInt = Math.floor(Math.random()*upComingTrailerArray.length)

    let randUpComingTrailer = upComingTrailerArray[randInt]; 

    firstUpcomingTrailer.src = randUpComingTrailer
}
changeButton.onclick = function(){ 
 let firstVideo = videoDiv.children[0]; 

 let randInt = Math.floor (Math.random() * musicInFilmVideosArray.length)
 
let randMusicInFilmVideo = musicInFilmVideosArray[randInt]

firstVideo.src = randMusicInFilmVideo 
}

changeButtonTwo.onclick = function() { 
    let firstTrailer = trailerDiv.children[0]; 

    let randInt = Math.floor(Math.random()* trailerArray.length);

    let randTrailer = trailerArray[randInt]; 

    firstTrailer.src = randTrailer
    
}

changeButtonFour.onclick = function(){
    let firstMovieEdit = movieEditDiv.children[0]; 
    
    let randInt = Math.floor(Math.random()* MovieEditArray.length); 

    let randMovieEdit = MovieEditArray[randInt]; 

    firstMovieEdit.src = randMovieEdit
}

changeButtonFive.onclick = function(){ 
    let firstSpotifySong = spotifySongDiv.children[0]; 

    let randInt = Math.floor(Math.random()* spotifySongArray.length);

    let randSpotifySong = spotifySongArray[randInt]; 

    firstSpotifySong.src = randSpotifySong
}


