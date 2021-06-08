let kommentar = document.querySelector("#info");
let informasjon = document
function boks(){
        let innerHTML = kommentar.value 
        console.log(innerHTML)
}
const input = document.querySelectorAll("#info");
let message = [];

function PersonligeMeldinger(){
        document.getElementById("Johan").innerHTML = ""
        input.forEach((inputs)=>{
        event.preventDefault();
        message.push(inputs.value)
        inputs.value="";
        document.getElementById("Johan").innerHTML = message.join("<br />") 
    
})
}

function Vis(){
        document.getElementById("Johan").style.display = "block";
        
     }

   