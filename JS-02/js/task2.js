document.getElementById("createTable").addEventListener("click",function(){
    if(document.getElementById("t1")){
    document.getElementById("t1").remove();}
    let infos =document.getElementById("areaInfo").value;
    let info=infos.split('\n\n');
    let FirstName=[],LastName=[],Gender=[], Address=[], BirthDate=[], Nickname=[], Password=[], Email=[];
    let myth=["Номер","FirstName","LastName","Gender", "Address", "BirthDate", "Nickname", "Password", "Email"];
    for(let i=0;i<info.length;i++){
        let person=info[i].split('\n');
        let nameAndSecondName=person[0].split(' ');
        FirstName.push(nameAndSecondName[0]);
        LastName.push(nameAndSecondName[1]);
        Gender.push(person[1]);
        Address.push(person[1]+person[2]);
        BirthDate.push(person[3]);
        Nickname.push(person[4]);
        Password.push(person[5]);
        Email.push(person[6]);
    }
    let myTable=document.createElement("table");
    myTable.id="t1";
    let myTr=document.createElement("tr");
    for(let i=0;i<9;i++){
        let dpz=document.createElement("th");
        dpz.innerHTML=myth[i];
        dpz.style.border="1px solid black";
        dpz.style.backgroundColor="lightgreen";
        myTr.appendChild(dpz);
    }
    myTable.appendChild(myTr);
    for(let i=0;i<info.length;i++){
        let myTr=document.createElement("tr");

        let id=document.createElement("td");
        id.innerHTML=i+1;
        id.style.border="1px solid black";
        id.style.fontWeight="bold";
        myTr.appendChild(id);

        let name=document.createElement("td");
        name.innerHTML=FirstName[i];
        name.style.border="1px solid black";
        myTr.appendChild(name);

        let lastName=document.createElement("td");
        lastName.innerHTML=LastName[i];
        lastName.style.border="1px solid black";
        myTr.appendChild(lastName);

        let gender=document.createElement("td");
        gender.innerHTML=Gender[i];
        gender.style.border="1px solid black";
        myTr.appendChild(gender);

        let address=document.createElement("td");
        address.innerHTML=Address[i];
        address.style.border="1px solid black";
        myTr.appendChild(address);

        let birthDate=document.createElement("td");
        birthDate.innerHTML=BirthDate[i];
        birthDate.style.border="1px solid black";
        myTr.appendChild(birthDate);

        let nickname=document.createElement("td");
        nickname.innerHTML=Nickname[i];
        nickname.style.border="1px solid black";
        myTr.appendChild(nickname);

        let password=document.createElement("td");
        password.innerHTML=Password[i];
        password.style.border="1px solid black";
        myTr.appendChild(password);

        let email=document.createElement("td");
        email.innerHTML=Email[i];
        email.style.border="1px solid black";
        myTr.appendChild(email);
        
        myTable.appendChild(myTr);
    }
    myTable.style.border="1px solid black";
    document.body.appendChild(myTable);
});