let changeButton = document.getElementById("change_button");
let changeButtonTwo = document.getElementById("change_buttontwo");
let changeButtonThree = document.getElementById("change_buttonthree"); 
let changeButtonFour = document.getElementById("change_buttonfour");
let changeButtonFive = document.getElementById("change_buttonfive");
let changeButtonSeven = document.getElementById("change_buttonseven");
let changeButtonEight = document.getElementById("change_buttoneight");
let changeButtonNine = document.getElementById("change_buttonnine");
let changeButtonTen = document.getElementById("change_buttonten");
let changeButtonEleven = document.getElementById("change_buttoneleven");
let changeButtonTwelve = document.getElementById("change_buttontwelve");
let changeButtonThirteenth = document.getElementById("change_buttonthirteenth");


let videoDiv = document.getElementById ("video_div");
let trailerDiv = document.getElementById ("trailer_div");
let upComingTrailerDiv = document.getElementById ("upComingTrailer_div");
let movieEditDiv = document.getElementById ("movieEdit_div");
let spotifySongDiv = document.getElementById("spotifySong_div"); 
let rectangleEditDiv = document.getElementById("rectangleEdit_div");
let actionTrailerDiv = document.getElementById("actionTrailer_div");
let thrillerTrailerDiv = document.getElementById("thrillerTrailer_div");
let comedyTrailerDiv = document.getElementById("comedyTrailer_div");
let dramaTrailerDiv = document.getElementById("dramaTrailer_div");
let familyTrailerDiv = document.getElementById("familyTrailer_div");
let adventureTrailerDiv = document.getElementById("adventureTrailer_div");

let firstVideo = videoDiv.children[0]; 
let firstTrailer = trailerDiv.children[0]; 
let firstUpcomingTrailer = upComingTrailerDiv.children[0]; 
let firstMovieEdit = movieEditDiv.children[0]; 
let firstSpotifySong = spotifySongDiv.children[0];
let firstRectangleEdit = rectangleEditDiv.children[0];
let firstActionTrailer = actionTrailerDiv.children[0];
let firstThrillerTrailer = thrillerTrailerDiv.children[0];
let firstComedyTrailer = comedyTrailerDiv.children[0];
let fristDramaTrailer = dramaTrailerDiv.children[0];
let firstFamilyTrailer = familyTrailerDiv.children[0];
let firstAdventureTrailer = adventureTrailerDiv.children[0];

let adventureTrailerArray =[
"https://www.youtube.com/embed/LLAaW1EgyY8?si=rC8ZzK6_OzuDc7hh", // harry potter
"https://www.youtube.com/embed/t-0XuYxh67w?si=EIqAy0iznnS8wkRT", // super eight
"https://www.youtube.com/embed/fSpZU7KAGfk?si=jFjcqyqPUQB3stHz", // the mummy
"https://www.youtube.com/embed/QD6cy4PBQPI?si=NVzgohJQmBEkBOrQ", // secret life of walter schimity
"https://www.youtube.com/embed/VZtQH_cwTOw?si=p_u6-WwtxOZWOvYG", // the fall
"https://www.youtube.com/embed/C1M-vhN8lsg?si=jPVHPys5HrukSz7R", // the adventure of Baron Munchausen
"https://www.youtube.com/embed/_eOI3AamSm8?si=xcHs5XTeRWyEVPzk", // moonrise kingdom

]

let familyTrailerArray = [
"https://www.youtube.com/embed/k98Afd7Nf3Y?si=P28FD1Y2DRzw_qPR", // marcel the shell with shoes on
"https://www.youtube.com/embed/26R6JVJ6KOw?si=H__3RixgGwk82L0P", // instant family
"https://www.youtube.com/embed/5_EVHeNEIJY?si=_yoX2xCOLDhLdvGT", // singing in the rain
"https://www.youtube.com/embed/oIPq9Kp-9A0?si=QRvrD5kpuzFvcaW4", // cat in the hat
"https://www.youtube.com/embed/ooJJX3R42WM?si=4gWY1EbTjjPqJ08g", // shrek
// "https://www.youtube.com/embed/E6sHWQcCUsQ?si=56wPdpdMGOKFZfQy", // barbie
"https://www.youtube.com/embed/otNh9bTjXWg?si=DI-Yhf13YI9PSmnx", // wonka
"https://www.youtube.com/embed/p6JAQ2aoXm0?si=Q0uT4uo0jlP1PgiO", // charlie and the choclate factory
]

let dramaTrailerArray = [
"https://www.youtube.com/embed/Gtl-6RCOl84?si=RcBc_LyEuOdGygVJ", // the Fallout
// "https://www.youtube.com/embed/AXEK7y1BuNQ?si=DeCXJtZBRL9Zdunc", // challengers
"https://www.youtube.com/embed/bLvqoHBptjg?si=OYBsyfxMkzq_DhsQ", // forest gump
"https://www.youtube.com/embed/7BWWWQzTpNU?si=1W-lmgeC4C9fMKaP", // passengers
"https://www.youtube.com/embed/ne6p6MfLBxc?si=vb8SjylGKZJbnclp", // her
"https://www.youtube.com/embed/6cKafIqhEvk?si=BoKzqKZJEgpHghZM", // the graduate
"https://www.youtube.com/embed/PLl99DlL6b4?si=xm_lt-oj8_zaJ2J0", // shawshank rempedetion



]

let comedyTrailerArray = [
"https://www.youtube.com/embed/4OzaexEqDa8?si=jF1s-mLckqZnFFva" , // quiz lady
"https://www.youtube.com/embed/c_7i57oQZ0g?si=oXyV9-88Bpw7qLEY", // bottoms
// "https://www.youtube.com/embed/8_nv0q5ztYE?si=JM6Ronhbn3HJyWxV", // pitch perfect
"https://www.youtube.com/embed/qmxMAdV6s4U?si=KS-LCT05vk6mU4Bi", // game night
"https://www.youtube.com/embed/P15S6ND8kbQ?si=5LKvfniw3jj9cWuW", // no hard feelings
"https://www.youtube.com/embed/7wd5KEaOtm4?si=f09WRv1i4H3tdmlF", // scott pilgrim vs the world
"https://www.youtube.com/embed/VjGJm3wV5-I?si=EzDrYMeEjgxB0YEL", // booksmart
"https://www.youtube.com/embed/_j5hwooOHVE?si=_GBanSjGAkGtdOdX", // the hustle
"https://www.youtube.com/embed/7sULyUPHAOA?si=oEBGIcT4OSsIV56r", // amsterdam

]

let thrillerTrailerArray = [
    "https://www.youtube.com/embed/ODUdpwddTQk?si=JL0FgzIphgcHNhPW", // woman of the hour
"https://www.youtube.com/embed/KBiOF3y1W0Y?si=uori8N4seOljJGPS", // drive
"https://www.youtube.com/embed/zpmAR4oRUXg?si=w4jisXwHnboUf_6e", // red Sparrow
"https://www.youtube.com/embed/sk37tj2OdA4?si=SSEePmdVZGc5wIUG", // dont worry darling
"https://www.youtube.com/embed/8hP9D6kZseM?si=F8KQkcqzQn2ZTRX_", // inception
"https://www.youtube.com/embed/C_uTkUGcHv4?si=wewOoFLmbuKUWlCW", // the menu
"https://www.youtube.com/embed/tB9WUIv9KH8?si=xMjRwstT-0zS1mLD", // last night in soho

]
let actionTrailerArray = [
    "https://www.youtube.com/embed/aDyQxtg0V2w?si=xJDg1-h-bPbxji3o", // Civil War
    "https://www.youtube.com/embed/EAzGXqJSDJ8?si=Oq10jl7uDy2iVb-4", // catching fire
    "https://www.youtube.com/embed/CbX_SIz_9fk?si=l2b7gjRVCfL0fAsa", // transformers
    "https://www.youtube.com/embed/XJMuhwVlca4?si=fu0_1c5RyFJMuA2T", // furiosa
    "https://www.youtube.com/embed/gCcx85zbxz4?si=zs3F1DSOwEZ71Mg4", // Blade Runner
    // "https://www.youtube.com/embed/2LqzF5WauAw?si=H6UA58O4wXjsRPzh", // Interstellar
    "https://www.youtube.com/embed/_PZpmTj1Q8Q?si=g_p1lQA07q1drnzr", // The dark night
    // "https://www.youtube.com/embed/XtFI7SNtVpY?si=xD0blk9AE_qL2FCE", // kingdom of the planet of the apes
    "https://www.youtube.com/embed/3cxixDgHUYw?si=aHTgmyoWTCfmHfQI", //justice league
    "https://www.youtube.com/embed/RDE6Uz73A7g?si=K_KGSkmCO9P6ipcE", // hungergames songbirds and snakes
    "https://www.youtube.com/embed/x_me3xsvDgk?si=3D6Nwhg9pgq5VqUN", // enternals
    "https://www.youtube.com/embed/KVu3gS7iJu4?si=_2JcYRMyiHFscWGO", // man of steel
    "https://www.youtube.com/embed/fAIX12F6958?si=rAqNw6M7Kcc91saK", // bumblebee
"https://www.youtube.com/embed/sutgWjz10sM?si=MIPVBeAO8KK343V3", // divergent 
"https://www.youtube.com/embed/XuDwndGaCFo?si=lE8G4m73BMhbcajQ" , // stone of heart


]

let rectangleEditArray = [
    "itonya.mp4",
    "mencrytoo.mp4",
    "Ilovedancing.mp4",
    "karensmith.mp4",
]

let musicInFilmVideosArray =[
    "https://www.youtube.com/embed/92w5ozZgzG0?si=7ZS0fg_8adTg3HFs", // Shrek 2 - Snow White Baracuda
"https://www.youtube.com/embed/rkmQWyK2h3c?si=pSHrhxu6wAaBzBXQ", // Pitch Perfect 3 - Toxic
"https://www.youtube.com/embed/w5SRH6Ac1LI?si=7kP8hVC-T4136vms", // La La Land - A lovely Night
"https://www.youtube.com/embed/vZPzZ_NEwEQ?si=_6PqFAYmZdBOTCGW", // The Hunger Game - Hanging Tree
// "https://www.youtube.com/embed/tEM5jJWfKFY?si=KgjknxpeM-7Ou4ca", 
// "https://www.youtube.com/embed/tSc-pkW4GHE?si=g1NPUczQclFNovD3", 
"https://www.youtube.com/embed/j9Vit2vq22M?si=tGyZw1K1n7a5cncN",  // Toy Story 2 - When Somebody Loved Me
"https://www.youtube.com/embed/OXQ8oI6B6T0?si=NeNoLF_BYJnRD062", // Singing In The Rain - All I Do Is Dream Of You
"https://www.youtube.com/embed/26NOGYsTWOI?si=U4GSYAJdXz7MW1CX" , //  No Hard Feelings - Maneater 
"https://www.youtube.com/embed/A_HjMIjzyMU?si=nVeDbNrX_H1-uvP_" , // Shrek - I need A Hero
"https://www.youtube.com/embed/pyMU8O2B2Vs?si=b-EXv54dmixTDflt" , // Singing In The Rain - good moring 
// "https://www.youtube.com/embed/1lDc2Cce7fc?si=l3Kpr_H3KgfV8nIP" , // nothing you can take from me
// "https://www.youtube.com/embed/YKLT6_7Y1nc?si=Uf1Ghi2H-Gg8kfKx", // great show

]

let trailerArray = [
    "https://www.youtube.com/embed/zrMnGDzmyI0?si=4vur7z0dIQ506UBm", // wildflower
    // "https://www.youtube.com/embed/ZLO4X6UI8OY?si=4OtFEuEh_I_ZOYE9", // arrival
     "https://www.youtube.com/embed/0pdqf4P9MB8?si=_7OcWOITE-7TU3fP", // la la land
    // "https://www.youtube.com/embed/E_Ci-pAL4eE?si=_EGwRAMA54xKQ7Ep", // gravity
"https://www.youtube.com/embed/OiTiKOy59o4?si=k223AtH1tziYiyDU", // gravity
// "https://www.youtube.com/embed/AST2-4db4ic?si=8MGKqGfms3qLFqtR", // little women
// "https://www.youtube.com/embed/LjLamj-b0I8?si=pJ_0DZWVWcSwI6r5", // alien
// "https://www.youtube.com/embed/k98Afd7Nf3Y?si=PhELJNgQNClQbsGO", // marcel the shell
// "https://www.youtube.com/embed/x0XDEhP4MQs?si=wQ5y8E5OqUzOGGBl", // alien romulous
// "https://www.youtube.com/embed/7wd5KEaOtm4?si=_bD86et5lgAZaSvg", // scott pilgrim
// "https://www.youtube.com/embed/Z9AYPxH5NTM?si=CExnYB4OpSCSkZB9", // call me by your name
// "https://www.youtube.com/embed/P15S6ND8kbQ?si=g-wRFUXohBrEahGj", // no hard feelings
"https://www.youtube.com/embed/hEJnMQG9ev8?si=V7ENGp_hHyBaTRTC", // mad max fury road
// "https://www.youtube.com/embed/XuDwndGaCFo?si=lE8G4m73BMhbcajQ" , // stone of heart
"https://www.youtube.com/embed/sSmBIIGZoGI?si=kTlbhqjNt6mVNpVM" , // dont worry darling
// "https://www.youtube.com/embed/hCBWOfCgRh4?si=ix2kFf3yIsSIJSTw", // fallout
"https://www.youtube.com/embed/c_7i57oQZ0g?si=oXyV9-88Bpw7qLEY", // bottoms
// "https://www.youtube.com/embed/lpnW8atCkkg?si=QzHeALiHmYHIp169" , // supw eight
 "https://www.youtube.com/embed/TLnQXsKn5-E?si=9XmxOJDy2Ui2r6QI" , // war of the worlds 
// "https://www.youtube.com/embed/CH_OHepiHJw?si=JQjeJDkOERuOR21w", // harriet 
// "https://www.youtube.com/embed/Pj0wz7zu3Ms?si=8qCfeUSvIm6YjkhT" , // rednotice
"https://www.youtube.com/embed/ZLO4X6UI8OY?si=4OtFEuEh_I_ZOYE9", // arriva room
"https://www.youtube.com/embed/tGpTpVyI_OQ?si=2yMrogNUuHQMFUVc", // pulp fiction
"https://www.youtube.com/embed/BkL9l7qovsE?si=zoOsNIhFOXyVCiSB", //casablanca
"https://www.youtube.com/embed/sFXoAVi4FPk?si=v9N8YMZC123WcaFV", // its a wonderful life
]; 

let upComingTrailerArray = [ 
    "https://www.youtube.com/embed/PE2YZhcC4NY?si=01S8W-mmh7yt0JJx", // Minecraft
    "https://www.youtube.com/embed/4h7j_EcZ5fU?si=92J2WoGIHg1rW_CE", // emilia perez 
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
// "https://www.youtube.com/embed/CFG8DtIt7X0?si=D4uB2T0ZnH3ZXFc5", //cars
"https://www.youtube.com/embed/CFJNHhA-vWQ?si=xsWB8mH7zR4pRU3F" , // arrival 
"https://www.youtube.com/embed/yqjPI_m1ulA?si=RBk6qqLaQG5rC4-H" , // oppenheimer
"https://www.youtube.com/embed/d85vBCq_E38?si=akEUMyazBdisHNim" , // blade runner
"https://www.youtube.com/embed/TMhKNAyebzA?si=ROFkoVCULGTOHLa6" , // katniss 
// "https://www.youtube.com/embed/GrFJ7OLQrLE?si=gb9f7lY3O6kvoE-j" , // harry potter
// "https://www.youtube.com/embed/HThvXXj3Iqc?si=JtvbILNHbRsVvA-_" , // grown ups
// "https://www.youtube.com/embed/vMbtSva7oLE?si=NfBukLstdrk-uD9B" , // ted 
"https://www.youtube.com/embed/58R8GY_mqN4?si=s8ipGgVsR8FA59wj", // 1917
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
"https://open.spotify.com/embed/track/4ylWMuGbMXNDgDd8lErEle?utm_source=generator", // greatest showman
"https://open.spotify.com/embed/track/0Gl5s8IhMmQE5YQwM8Qx1J?utm_source=generator", // never enough
"https://open.spotify.com/embed/track/74wySERHHxB8Ul9A0CNBla?utm_source=generator", /// lay all your love on me momma mia
"https://open.spotify.com/embed/track/12j5ByuhjK6vsb0vJS1cwM?utm_source=generator" , // desafinado
]

changeButtonThirteenth.onclick = function(){
    let firstAdventureTrailer = adventureTrailerDiv.children[0];
    let rantInt = Math.floor(Math.random()* adventureTrailerArray.length);
    let randAdventureTrailer = adventureTrailerArray[rantInt];
    firstAdventureTrailer.src = randAdventureTrailer
}

changeButtonTwelve.onclick = function() {
    let firstFamilyTrailer = familyTrailerDiv.children[0];
    let randInt = Math.floor(Math.random()* familyTrailerArray.length);
    let randFamilyTrailer = familyTrailerArray[randInt];
    firstFamilyTrailer.src = randFamilyTrailer
}

changeButtonEleven.onclick = function() {
    let firstDramaTrailer = dramaTrailerDiv.children[0];
    let randInt = Math.floor(Math.random()* dramaTrailerArray.length);
    let randDramaTrailer = dramaTrailerArray[randInt];
    firstDramaTrailer.src = randDramaTrailer
}
 
changeButtonTen.onclick = function(){
    let firstComedyTrailer = comedyTrailerDiv.children[0];
    let randInt = Math.floor(Math.random()* comedyTrailerArray.length);
    let randComedyTrailer = comedyTrailerArray[randInt];
    firstComedyTrailer.src = randComedyTrailer
}
changeButtonNine.onclick = function(){
    let firstThrillerTrailer = thrillerTrailerDiv.children[0];
    let randInt = Math.floor(Math.random()* thrillerTrailerArray.length)
    let randThrillerTrailer = thrillerTrailerArray[randInt];
    firstThrillerTrailer.src = randThrillerTrailer
}

changeButtonEight.onclick = function(){
    let firstActionTrailer = actionTrailerDiv.children[0];
    let randInt = Math.floor(Math.random()* actionTrailerArray.length)
    let randActionTrailer = actionTrailerArray[randInt];
    firstActionTrailer.src = randActionTrailer
}

changeButtonSeven.onclick = function(){
    let firstRectangleEdit = rectangleEditDiv.children[0];
    let randInt = Math.floor(Math.random()* rectangleEditArray.length)
    let randRectangleEdit = rectangleEditArray[randInt];
    firstRectangleEdit.src = randRectangleEdit
}
changeButtonThree.onclick = function(){ 
    let firstupComingTrailer = upComingTrailerDiv.children[0]; 

    let randInt = Math.floor(Math.random()*upComingTrailerArray.length)

    let randUpComingTrailer = upComingTrailerArray[randInt]; 

    firstupComingTrailer.src = randUpComingTrailer
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


