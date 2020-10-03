
     data = JSON.parse(localStorage.getItem("members"));
     originalData = JSON.parse(localStorage.getItem("members"));
     if(data == null)
     {
      data = [];

     }
     // FUNCTION TO DISPLAY DATA
let output = () => {
    display = "";
    for(let detail of data){
        if (data.indexOf(detail)!=null || data.indexOf(detail)!=undefined ){
            display += `
            <div> 
                <img src="${detail.Pix}" alt="" style="height:100px"> <br>
                <strong> Name </strong>: ${detail.Name} <br>
                <strong> Email </strong>: ${detail.Email} <br>
                <strong> Phone </strong>: ${detail.Phone} <br>
                <strong> Stack </strong>: ${detail.Stack} <br>
                <strong> Pix </strong>: ${detail.Pix} <br>
                <button onclick="del(${data.indexOf(detail)})" style="background:red">Delete</button>
                <button onclick="edit(${data.indexOf(detail)})" style="background:yellow">Edit</button>
            </div> `
            }
        }
        document.getElementById("profile").innerHTML = display;
}

 // FUNCTION TO ADD DATA 
 let add = () => {
    newData={
    "Name" : document.getElementById("name").value,
    "Email" :document.getElementById("email").value,
    "Phone" : document.getElementById("tel").value,
    "Stack" :document.getElementById("stack").value,
    "Pix": document.getElementById("pix").value.split("\\")[2]
    }
    data.push(newData);
    localStorage.setItem("members",JSON.stringify(data))
   output();
   clearForm()
 }
//  FUNCTION TO EDIT DATA 
 let edit = (id) => {
    originalIndex = originalData.findIndex(x => x.Name == data[id].Name)
     editData = {
            "" :  document.getElementById("index").value = originalIndex,
         "Name" :  document.getElementById("name").value = data[id].Name,
         "Email" : document.getElementById("email").value =data[id].Email,
         "Phone" : document.getElementById("tel").value =data[id].Phone,
         "Stack" : document.getElementById("stack").value =data[id].Stack,
         "Pix" :  document.getElementById("pix").value.split("\\")[2] = data[id].Pix
     }
   
 }
 //  FUNCTION TO UPDATE DATA
 function update(){
     id= document.getElementById("index").value
    editData = {
        "Name" : document.getElementById("name").value,
        "Email" :document.getElementById("email").value,
        "Phone" : document.getElementById("tel").value,
        "Stack" :document.getElementById("stack").value,
        "Pix": document.getElementById("pix").value.split("\\")[2]

     }
     originalData[id]= editData;
     data = originalData;
     localStorage.setItem("members",JSON.stringify(originalData))
    output();
    clearForm();
 }
 

        //  FUNCTION TO DELETE DATA 
 let del = (id) => {
    originalIndex = originalData.findIndex(x => x.Name == [id].Name);

     check= confirm(`delete ${data[id].Name}'s  data?`);
     if(check){
        originalData.splice(originalIndex,1);
       
        data = originalData;
        localStorage.setItem("members",JSON.stringify(originalData))
        output();
     }
     
 }
 //  FUNCTION TO RESET FORM DATA
 function clearForm(){
    document.getElementById("index").value =  ""
    document.getElementById("name").value =  ""
    document.getElementById("email").value =  ""
    document.getElementById("tel").value =  ""
    document.getElementById("stack").value =  ""
    document.getElementById("pix").value =  ""

 }
//  FUNCTION TO SEARCH PROFILE DATA
 function allSearch() {

     pName = document.getElementById("search").value.toLowerCase();
     data = data.filter(x => x.Name.toLowerCase().includes(pName))

    
     if(data.length >= 1) {
       
        if(data.length == 1) {
            result = "found " + data.length + " profile with "+ pName;
           
        }
        else {
            result = "found " + data.length + " profiles with "+ pName;
        } 
        alert(result)
         output()
     }
     else {
      
         alert("no record found!")
     }
    
 }

output();