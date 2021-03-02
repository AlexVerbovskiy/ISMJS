function addClass(obj, newClass){
    document.getElementById("res").style.display="none";
        const arrClass=document.getElementById(obj).className.split(' ');
        for(let i=0;i<arrClass.length;i++){
            if(arrClass[i]===newClass){
                document.getElementById("res").style.display="block";
            document.getElementById("res").innerHTML="Даний клас існує";
            return;
        }
    }
    if(document.getElementById(obj).className!==""){
        document.getElementById(obj).className+=" ";
    }
    document.getElementById(obj).className+=newClass; 
}

function removeClass(obj, delClass){
    document.getElementById("res").style.display="none";
        const arrClass=document.getElementById(obj).className.split(' ');
        let c=0;
        let resClass="";
        for(let i=0;i<arrClass.length;i++){
            if(arrClass[i]===delClass){
                c++;
                continue;
        }else{
            if(i!=0){
                resClass+=" ";
            }
            resClass+=arrClass[i];
        }
    }
    if(c==0){
        document.getElementById("res").style.display="block";
        document.getElementById("res").innerHTML="Даного класу не існує";
    }else{
        document.getElementById(obj).className=resClass;
    }
}

document.getElementById("adder").addEventListener("click", function(){addClass(document.getElementById("getId").value, document.getElementById("getClass").value)});
document.getElementById("remover").addEventListener("click", function(){removeClass(document.getElementById("removeId").value, document.getElementById("removeClass").value)});


/*Якщо функція використовуватиметься не для елемента по id, а просто для якогось об`єкта, то треба використовувати ці версії функцій
function addClass(obj, newClass){
        const arrClass=obj.className.split(' ');
        for(let i=0;i<arrClass.length;i++){
            if(arrClass[i]===newClass){
            return;
        }
    }
    if(obj.className!==""){
        obj.className+=" ";
    }
    obj.className+=newClass; 
}

function removeClass(obj, delClass){
        const arrClass=obj.className.split(' ');
        let c=0;
        let resClass="";
        for(let i=0;i<arrClass.length;i++){
            if(arrClass[i]===delClass){
                c++;
                continue;
        }else{
            if(i!=0){
                resClass+=" ";
            }
            resClass+=arrClass[i];
        }
    }
    if(c!=0){
        obj.className=resClass;
    }
}*/