/* ARRAY WITH OBJECT DATA */
details = [
    {
        "name" :"Tiidelab",
        "email" : "Tiidelab@gmail.com",
        "phone" : "123456",
        "location" : "Africa",
        "logo": "logo1.jpg"
    },
    {
        "name" :"kSolutions",
        "email" : "kSolutions@gmail.com",
        "phone" : "123456",
        "location" : "Africa",
        "logo": "logo2.jpg"
    },
    {
        "name" :"techSpecialist",
        "email" : "techSpecialist@gmail.com",
        "phone" : "123456",
        "location" : "Africa",
        "logo": "logo3.jpg"
    }
];

/* DATA TO DISPLAY IN  DOM  */
display = '';
for(let detail of details){
    display += `
    <div> 
    <img src="${detail.logo}" alt="" style="height:100px"> <br>
    <strong> Name </strong>: ${detail.name} <br>
    <strong> Email </strong>: ${detail.email} <br>
    <strong> Phone </strong>: ${detail.phone} <br>
    <strong> Location </strong>: ${detail.location} <br>
    <button onclick="del()" style="background:red">Delete</button>
    <button onclick="edit()" style="background:yellow">Edit</button>
    </div> <hr>
    `
}
/* FUNCTION TO ADD DATA  */
 add = () => {
    newDetails={
    "name" : prompt('Input Company\'s Name'),
    "email" : prompt('Input Company\'s Email'),
    "phone" : prompt('Input Company\'s Phone'),
    "location" : prompt('Input Company\'s Phone'),
    "logo": "logo2.jpg"
    }
    
    // APPENDS OBJECT 'addDetails' TO ARRAY 'newDetails'
    details.push(newDetails);
    for(i=details.length-1; i<details.length; i++) {
        display += `
        <div> 
        <img src="${details[i].logo}" alt="" style="height:100px"> <br>
        <strong> Name </strong>: ${details[i].name} <br>
        <strong> Email </strong>: ${details[i].email} <br>
        <strong> Phone </strong>: ${details[i].phone} <br>
        <strong> Location </strong>: ${details[i].location} <br>
        <button onclick="del()" style="background:red">Delete</button>
        <button onclick="edit()" style="background:yellow">Edit</button>
        </div> <hr>
        `
    }
    document.getElementById("data").innerHTML = display;
}

/* FUNCTION TO DELETE DATA  */
del = () => {
    details.slice(0,1)
    for(let detail of details) {
        details.splice(details[detail],1);
    }
}

/* ASSIGNING VARIABLE TO DISPLAY IN DOM  */
document.getElementById("data").innerHTML = display;