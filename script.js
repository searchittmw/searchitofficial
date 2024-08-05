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
"https://www.youtube.com/embed/KYc5H7VvZbc?si=VPNvwjjPcbgTdw60" , //tiana 
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
"https://www.youtube.com/embed/17ywQS6XO-M?si=hh1hO-m6n8693vOX" , // harry potter
"https://www.youtube.com/embed/bLvqoHBptjg?si=OYBsyfxMkzq_DhsQ" , // forest gump
"https://www.youtube.com/embed/TLnQXsKn5-E?si=9XmxOJDy2Ui2r6QI" , // war of the worlds 
"https://www.youtube.com/embed/CH_OHepiHJw?si=JQjeJDkOERuOR21w", // harriet 
"https://www.youtube.com/embed/7BWWWQzTpNU?si=1W-lmgeC4C9fMKaP" , // Passengers
"https://www.youtube.com/embed/Pj0wz7zu3Ms?si=8qCfeUSvIm6YjkhT" , // rednotice


]; 

let upComingTrailerArray = [ 
 "https://www.youtube.com/embed/_OKAwz2MsJs?si=kXrW6ZNJV5V9YZhO", // Joker: Foilie a Duex
 "https://www.youtube.com/embed/As-vKW4ZboU?si=elJixJvYoPKKp-XN" , // Beetle Juice Beetle Juice
 "https://www.youtube.com/embed/r-GQvSc5ZGw?si=tTTljgAJugrfC0Z3", // It ends with us 
 "https://www.youtube.com/embed/qkgkUCqEum4?si=SQWK0TMMqT5eaCrZ", // Moana two

]

let MovieEditArray = [
    "https://www.youtube.com/embed/iiRFOqEiMLI?si=jXDZmgMpZ1sZ3hzx", // I just Want to Dance 
    "https://www.youtube.com/embed/_aXM8ukJSNg?si=Q51d0R_QTfsO8TI_" ,// Gwen Stacy (amazing spide man)
    "https://www.youtube.com/embed/FD1hqvhIVXY?si=vOt2AGI5KK93FTZu", //inersetller
    "https://www.youtube.com/embed/KQT32vW61eI?si=a8vRFZvOwov4yIVV" , //call my your name
"https://www.youtube.com/embed/M5VXCixTdEg?si=pZTXeM5N9kceG06k" , //smile 
"https://www.youtube.com/embed/CFG8DtIt7X0?si=D4uB2T0ZnH3ZXFc5", //cars
"https://www.youtube.com/embed/SOnY2xlu80M?si=JywEDTys2lOmzN9m",  // we are infinite 
"https://www.youtube.com/embed/SOnY2xlu80M?si=JywEDTys2lOmzN9m", // marvel 
"https://www.youtube.com/embed/O-HIpasERHM?si=vxxIqCc2lKY2knYO" ,// hack ridge 
"https://www.youtube.com/embed/ApyTD7whgL4?si=R3dzUUmJxq61Wk64", // zootopi
"https://www.youtube.com/embed/m1EAKIec6UU?si=L5s89UDSqNwcQVfM" , //fight club let it go 
"https://www.youtube.com/embed/VmumvWXme7I?si=csM33W0ZocYUtM0H" , // nothing new 
]

let spotifySongArray = [
    "https://open.spotify.com/embed/track/5fBcRH4CnYTaFMQtM0JtSl?utm_source=generator&theme=0", //coco
     "https://open.spotify.com/embed/track/17cia5k4BpGVlyEfqrFH50?utm_source=generator&theme=0" , //cant catch me now
     "https://open.spotify.com/embed/track/44EkzAU92xwm30YpD4p31i?utm_source=generator", // the amazing spider man 
     "https://open.spotify.com/embed/track/6i0V12jOa3mr6uu4WYhUBr?utm_source=generator", // heathens 
     "https://open.spotify.com/embed/track/6wf7Yu7cxBSPrRlWeSeK0Q?utm_source=generator", // what was I made for 
     "https://open.spotify.com/embed/track/11C4y2Yz1XbHmaQwO06s9f?utm_source=generator", // dance the night away 
     "https://open.spotify.com/embed/track/6ywSF3o1SjDcmP6hSqTGF6?utm_source=generator&theme=0", // when Im gone 
     "https://open.spotify.com/embed/track/5kRBzRZmZTXVg8okC7SJFZ?utm_source=generator" ,// another day in the sun
     "https://open.spotify.com/embed/track/3S1tTwSKIZgf4QGltFyCxM?utm_source=generator", // every wants to rule the world 
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