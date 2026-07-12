/*=================================================
CWM WEATHER API
Open-Meteo API
=================================================*/


const kotaPapua = [

    {
        nama:"Sorong",
        lat:-0.876,
        lon:131.255
    },

    {
        nama:"Raja Ampat",
        lat:-0.233,
        lon:130.520
    },

    {
        nama:"Maybrat",
        lat:-1.392,
        lon:132.250
    },

    {
        nama:"Tambrauw",
        lat:-0.700,
        lon:132.600
    },

    {
        nama:"Sorong Selatan",
        lat:-1.600,
        lon:131.150
    },

    {
        nama:"Kabupaten Sorong",
        lat:-0.950,
        lon:131.800
    }

];



async function getWeather(){

    const container =
    document.querySelector(".weather marquee");


    if(!container) return;



    let hasil = "";



    for(let kota of kotaPapua){


        try{


            const response =
            await fetch(

            `https://api.open-meteo.com/v1/forecast?
            latitude=${kota.lat}
            &longitude=${kota.lon}
            &current_weather=true`

            );


            const data =
            await response.json();



            let suhu =
            data.current_weather.temperature;



            let icon="☀";


            if(suhu < 25){

                icon="🌧";

            }


            hasil += `

            ${icon}
            ${kota.nama}
            ${suhu}°C

            &nbsp;&nbsp;&nbsp;

            `;



        }

        catch(error){


            console.log(error);


        }


    }


    container.innerHTML = hasil;


}



getWeather();