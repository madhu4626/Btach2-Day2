//question 3
let BioData = [
{
    name: "Anjali",
    Age : 25,
    country : "India",
    hobbies: ["singing", "swimming"],
},
{
    name: "Tarun",
    Age : 32,
    country : "India",
    hobbies: ["Football", "painting"],
},
{
    name: "Mary",
    Age : 20,
    country : "USA",
    hobbies: ["Dancing", "Running"],
},
{
    name: "Tom",
    Age : 32,
    country : "USA",
    hobbies: ["Music", "coding"],
},

];

function printValue(){
    for(let i=0; i<BioData.length;i++)
    {
        console.log(BioData[i]);
    
    };
}
printValue();



//question 4

function showCountry(){
    for(let i=0;i< BioData.length;i++){
        if(BioData[i].country == "India"){
            console.log(BioData[i]);
        }
       
    }
}

showCountry();



function showAge(){
    for(let i=0;i< BioData.length;i++){
        if(BioData[i].Age < 30){
            console.log(BioData[i]);
        }
       
    }
}

showAge();


