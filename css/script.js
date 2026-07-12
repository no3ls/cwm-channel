/*=========================================================
CWM NEWS PORTAL
script.js FINAL
=========================================================*/


document.addEventListener("DOMContentLoaded", () => {



/*=====================================================
SMART AI SEARCH
=====================================================*/


const searchInput = document.getElementById("searchInput");

const searchResult = document.getElementById("searchResult");



const dataSearch = [


{
text:"Berita Sorong Hari Ini",
icon:"📰",
url:"berita.html"
},


{
text:"10 Berita Terbaru",
icon:"📰",
url:"berita.html"
},


{
text:"Live CWM TV",
icon:"🔴",
url:"live.html"
},


{
text:"Jadwal Program Hari Ini",
icon:"📺",
url:"live.html"
},


{
text:"Program Berita Pagi",
icon:"📺",
url:"live.html"
},


{
text:"Program Dialog Papua",
icon:"📺",
url:"live.html"
},


{
text:"Market Update",
icon:"📈",
url:"market.html"
},


{
text:"Harga Gold Global",
icon:"🥇",
url:"market.html"
},


{
text:"IHSG Indonesia",
icon:"🇮🇩",
url:"market.html"
},


{
text:"Bitcoin",
icon:"₿",
url:"market.html"
},


{
text:"Berlangganan CWM",
icon:"📡",
url:"layanan.html"
},


{
text:"Layanan Internet",
icon:"🌐",
url:"layanan.html"
},


{
text:"Pengaduan Pelanggan",
icon:"📋",
url:"pengaduan.html"
},


{
text:"Profil PT CWM",
icon:"🏢",
url:"profil.html"
},


{
text:"Tentang Kami",
icon:"ℹ️",
url:"profil.html"
}


];







function tampilkanData(keyword){



    // CEK SEARCH RESULT ADA ATAU TIDAK

    if(!searchResult) return;




    searchResult.innerHTML="";




    const hasil = dataSearch.filter(item =>

        item.text
        .toLowerCase()
        .includes(keyword.toLowerCase())

    );





    if(hasil.length === 0){


        searchResult.innerHTML = `

        <div class="search-item">

        ❌ Data tidak ditemukan

        </div>

        `;


        searchResult.style.display="block";


        return;


    }







    hasil.forEach(item => {



        const div=document.createElement("div");



        div.className="search-item";



        div.innerHTML=`

        <span class="search-icon">

        ${item.icon}

        </span>


        <span>

        ${item.text}

        </span>


        `;




        div.addEventListener("click",()=>{


            window.location.href=item.url;


        });




        searchResult.appendChild(div);



    });





    searchResult.style.display="block";



}









if(searchInput && searchResult){



    searchInput.addEventListener("keyup",function(){



        const keyword=this.value.trim();




        if(keyword===""){


            searchResult.style.display="none";


            return;


        }



        tampilkanData(keyword);



    });






    searchInput.addEventListener("focus",()=>{



        if(searchInput.value.trim() !== ""){


            tampilkanData(searchInput.value);



        }



    });





}









// CLOSE SEARCH


document.addEventListener("click",function(e){



    if(

        searchInput &&

        searchResult &&

        !searchInput.contains(e.target) &&

        !searchResult.contains(e.target)

    ){


        searchResult.style.display="none";


    }



});









/*=====================================================
AUTO SCROLL PROGRAM TV
=====================================================*/


const program=document.querySelector(".program-scroll");



if(program){



let posisi=0;



setInterval(()=>{



posisi++;



program.scrollTop=posisi;



if(
program.scrollTop + program.clientHeight
>= program.scrollHeight
){


posisi=0;


}



},40);



}









/*=====================================================
SMOOTH SCROLL
=====================================================*/


document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{



anchor.addEventListener("click",function(e){



const target=document.querySelector(
this.getAttribute("href")
);



if(target){



e.preventDefault();



target.scrollIntoView({


behavior:"smooth"


});



}



});



});









/*=====================================================
ACTIVE NAVBAR
=====================================================*/


const currentPage =
window.location.pathname
.split("/")
.pop();




document
.querySelectorAll(".navbar a")
.forEach(link=>{



const href =
link.getAttribute("href");



if(href===currentPage){



link.classList.add("active");



}



});









/*=====================================================
CARD HOVER EFFECT
=====================================================*/


const cards =
document.querySelectorAll(".news-card");



cards.forEach(card=>{



card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-10px)";


});





card.addEventListener("mouseleave",()=>{


card.style.transform="translateY(0)";


});



});









/*=====================================================
TREND GLOBAL HOVER
=====================================================*/


const trend =
document.querySelectorAll(".trend-item");



trend.forEach(item=>{


item.addEventListener("mouseenter",()=>{


item.style.transform=
"translateY(-8px)";


});





item.addEventListener("mouseleave",()=>{


item.style.transform=
"translateY(0)";


});



});









/*=====================================================
LIVE PLAYER RESPONSIVE
=====================================================*/


window.addEventListener("resize",()=>{



const iframe =
document.querySelector(".live-player iframe");



if(!iframe) return;



if(window.innerWidth < 768){



iframe.style.height="320px";


}

else{


iframe.style.height="560px";


}



});









/*=====================================================
PAGE LOADING
=====================================================*/


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});



});