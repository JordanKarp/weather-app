(()=>{const e=document.getElementById("searchBtn"),t=document.getElementById("searchInput");document.getElementById("searchForm").addEventListener("submit",(e=>{e.preventDefault()})),e.addEventListener("click",(async()=>{const e=await async function(e){console.log(t.value);const n=`http://api.weatherstack.com/current?access_key=8b505d4177a8b436d10e8eb25541de30&query=${e}`;try{const t=await fetch(n,{mode:"cors"});if(!t.ok)throw new Error(`${e} not found.`);const o=await t.json();return console.log(o),o}catch(e){return alert(e),null}}(t.value),n=document.getElementById("cityName"),o=document.getElementById("temperature"),c=document.getElementById("feelsLike"),r=document.getElementById("humidity"),d=document.getElementById("wind"),u=Math.round(1.8*e.current.temperature+3200)/100,a=Math.round(1.8*e.current.feelslike+3200)/100;n.textContent=`${e.location.name}`,o.textContent=`${u} °F`,c.textContent=`Feels like: ${a} °F`,r.textContent=`Humidity: ${e.current.humidity} %`,d.textContent=`Wind: ${e.current.wind_speed} km/h`}))})();