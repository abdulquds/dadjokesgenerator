const btnE1=document.getElementById('btn');
const JokeEl=document.getElementById('joke');
const apiKey="mtrsnN/yAZ40SpaAKieVVw==MWtGwfrqjTsqRCzD";
const options={
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey,
    }
}
const apiUrl="https://api.api-ninjas.com/v1/dadjokes"
async function getJoke(){
    try {
    JokeEl.innerText="Updating....";
    btnE1.disabled=true;
    btnE1.innerText="Loading....";
    const response=await fetch(apiUrl,options);
    const data=await response.json();
    JokeEl.innerText=data[0].joke;
    btnE1.disabled=false;
    btnE1.innerText="Tell Me a Joke"; 
    } catch (error) {
        JokeEl.innerText="An Error Happend try again!!";
        console.log(error)
    }
   
}
btnE1.addEventListener('click',getJoke);