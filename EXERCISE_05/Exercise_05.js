
     data = JSON.parse(localStorage.getItem("members"))
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
                <img src="${detail.logo}" alt="" style="height:100px"> <br>
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
    "phone" : document.getElementById("tel").value,
    "Stack" :document.getElementById("stack").value,
    "Pix": document.getElementById("pix").value.split("\\")[2],
    }
    data.push(newData);
    localStorage.setItem("members",JSON.stringify(data))
   output();
 }
//  FUNCTION TO EDIT DATA 
 let edit = (id) => {
     editData = {
         "Name" :  prompt("Enter your full Name",data[id].Name),
         "Email" :  prompt("Enter your email",data[id].Email),
         "phone" :  prompt("Enter your phone",data[id].Phone),
         "Stack" :  prompt("upload profile pics",data[id].Stack),
         "Pix" :  prompt("upload profile pics",data[id].Pix)
     }
     data[id]= editData;
     localStorage.setItem("members",JSON.stringify(data))
    output();
 }

        //  FUNCTION TO DELETE DATA 
 let del = (id) => {
     check= confirm(`delete ${data[id].Name}'s  data?`);
     if(check){
        data.splice(id,1);
        // localStorage.removeItem("companies[id]")
        localStorage.setItem("members",JSON.stringify(data))
        output();
     }
     
 }
 
output();