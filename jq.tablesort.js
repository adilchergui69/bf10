////////////////////sort table///////////////////////////
function sort_Table(e, direction){
    var sort_tbl= e.parentElement.innerText.trim(); 
    if(direction == "desc"){
      AllData.sort(function(a,b){
            if(a[sort_tbl].toLowerCase() < b[sort_tbl].toLowerCase()){
              return -1
            }
            
        })
    }
    else{
      AllData.sort(function(a,b){
            if(a[sort_tbl].toLowerCase() > b[sort_tbl].toLowerCase()){
              return -1
            }
        })
    }
    document.getElementById("tbody").innerHTML="";
    table(AllData);
    // displayRows(x);
  }
  
  function sort_Table_nbr(e,direction){
    var sort_tbl= e.parentElement.innerText.trim(); 
    if(direction == "desc"){
      AllData.sort(function(a,b){
        // if(a[sort_tbl] > b[sort_tbl]){
        //   return 1
        // }
        return  a[sort_tbl] - b[sort_tbl]
    })
        
    }
    else if(direction == "asc"){
      AllData.sort(function(a,b){
            // if(a[sort_tbl] < b[sort_tbl]){
            //   return -1
            // }
            return   b[sort_tbl] - a[sort_tbl]
        })
    }
    document.getElementById("tbody").innerHTML=""
    table(AllData)
    // displayRows(x)
    
  }

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
var alldata 
function datarow(){
    $.getJSON('datos.json', function(data) {
        alldata = data
        console.log(alldata)
        getAll() 
    
})

}
datarow()

function getAll() {
 var ul = document.createElement("ul")

    alldata.forEach(element => {
        console.log(element.provider.address)
     
    
            let text = "";
            for (let i in element.stock) {
            text += "<li>" + element.stock[i] + "</li>" ;
            console.log(text)
            }
               
       
        tbody.innerHTML += `<tr>
        <td>${element.ID}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.category}</td>
        <td> <img src="${element.image}" alt="" srcset="" style="width: 50PX;"></td>
        <td>${element.provider.address}</td>
        <td>${text}</td>
        </tr>
       `
       

});
}

// function putData(alldata){

//     alldata.forEach(element => {

//         tbody.innerHTML += `<tr>
//         <td>${alldata.name}</td>
//        `
        
//     });

       


// }

