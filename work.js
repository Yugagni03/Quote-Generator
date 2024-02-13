let btn= document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let output=  await getInfo();
    console.log(output);
    let h3= document.querySelector("#kotha");
    h3.innerText = output;
})


let url= "https://api.kanye.rest/";

async function getInfo(){
    try{
        let result= await axios.get(url);
        return result.data.quote;
    }
    catch(e){
        console.log("ERROR--", e);
        return "Data not found";
    }
}