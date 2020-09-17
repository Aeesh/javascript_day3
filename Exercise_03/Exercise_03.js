details = [
    {
        "name" :"Tiidelab",
        "email" : "Tiidelab@gmail.com",
        "phone" : "123456",
        "location" : "Africa"
    },
    {
        "name" :"kSolutions",
        "email" : "kSolutions@gmail.com",
        "phone" : "123456",
        "location" : "Africa"
    },
    {
        "name" :"techSpecialist",
        "email" : "techSpecialist@gmail.com",
        "phone" : "123456",
        "location" : "Africa"
    }
];

display = `
<table>
<thead>
        <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
        </tr>
    </thead>
`
for(i=0; i<details.length; i++){
   
    display += `
   
    
    <tbody>
        <tr>
        <td>${i + 1}</td>
        <td>${details[i].name}</td>
        <td>${details[i].email}</td>
        <td>${details[i].phone}</td>
        <td>${details[i].location}</td>
    </tr> ` }
    display += `
   </tbody>
   </table>
   
 `
 document.getElementById("table-data").innerHTML = display;