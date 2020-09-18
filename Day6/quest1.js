let details = [
    {
      name: "Manju",
      age: 30,
      city: "Bangalore",
      salary: 600000,
    },
    {
      name: "Prithisha",
      age: 25,
      city: "Mysore",
      salary: 300000,
    },
    {
      name: "Tarun",
      age: 28,
      city: "Hyderabad",
      salary: 25000,
    },
  ];

  function display(alldetail){
      let tabledata = "";
      alldetail.forEach(function(detail,index){
          let currentrow = `<tr>
          <td>${index+1}</td>
          <td>${detail.name} </td>
          <td>${detail.age}</td>
          <td>${detail.city}</td>
          <td>${detail.salary}</td>
          <td><button onclick = 'deletedetails(${index})'>Delete</button></td>
          </tr>`;

          tabledata+= currentrow;
      });

      document.getElementById("tdata").innerHTML = tabledata;
    }
    display(details);

    function adddetails(e){
        e.preventDefault();
        let detail = {};
        let name=document.getElementById('name').value;
        let age=document.getElementById('age').value;
        let city=document.getElementById('city').value;
        let salary = document.getElementById('salary').value;

        detail.name = name;
        detail.age = Number(age);
        detail.city = city;
        detail.salary = Number(salary);

        details.push(detail);
        display(details);

        document.getElementById('name').value="";
        document.getElementById('age').value="";
        document.getElementById('city').value="";
        document.getElementById('salary').value ="";
    }

    function searchByName(){
      let searchvalue = document.getElementById("searchname").value;
     
      let newdata = details.filter(function(detail){
        return (detail.name.toUpperCase().indexOf(searchvalue.toUpperCase())!= -1 ||
        detail.city.toUpperCase().indexOf(searchvalue.toUpperCase())!= -1);  
      });

      display(newdata);
    }
     
    function deletedetails(index){
      details.splice(index,1);
      display(details);

    }