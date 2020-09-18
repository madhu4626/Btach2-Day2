
 
  window.onload = function()
  {
      let buses= [ ];

    if(localStorage.getItem("buses")== null) {
        let stringbuses =  JSON.stringify(buses);
        localStorage.setItem("buses", stringbuses);
       }

  };

 function display(superarray=""){
    let tabledata = "";
    let buses;
    if (superarray == "") {
      buses = JSON.parse(localStorage.getItem("buses"));
    } else {
      buses = superarray;
    }
    buses.forEach(function(bus,index){
        let currentrow = `<tr>
        <td>${index+1}</td>
        <td>${bus.name} </td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.numberplate}</td>
        <td>${bus.capacity}</td>
        </tr>`;

        tabledata+= currentrow;
    });

    document.getElementById("tdata").innerHTML = tabledata;
  }
  display();
 
  function addBus(e){
    e.preventDefault();
    let bus = {};
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let numberplate = document.getElementById('numberplate').value;
    let capacity = document.getElementById('capacity').value;

    bus.name= name;
    bus.source= source;
    bus.destination= destination;
    bus.numberplate = Number(numberplate);
    bus.capacity = Number(capacity);

    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));

    display(buses);

    //code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none"; 
}
function searchByName(){
    let searchvalue = document.getElementById("searchname").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function(bus){
      return (bus.source.toUpperCase().indexOf(searchvalue.toUpperCase())!= -1 ||
      bus.destination.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1);
    });
    display(newdata);
  }
  

function showModal(index) {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";

}

function hideModal(event) {
  if (event.target.className == "modal") {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
}