document.getElementById('btask2').addEventListener('click', function ()
{
    let a=parseFloat(document.getElementById('ia2').value);
    let b=parseFloat(document.getElementById('ib2').value);
    let c=parseFloat(document.getElementById('ic2').value);
    let D=b*b-4*a*c;
    let k=0;
    document.getElementById('res2').style.display="block";
    if(D>0){
        k=2;
        let result1=(-b+Math.sqrt(D))/(2*a);
        let result2=(-b+Math.sqrt(D))/(2*a);
        document.getElementById('res2').innerHTML="Відповідь: D="+D+"<br>Кількість розвязків: "+k+"<br>Корінь1: "+result1+"<br>Корінь2: "+result2;
    }else if(D==0){
        k=1;
        let result1=(-b)/(2*a);
        document.getElementById('res2').innerHTML="Відповідь: D="+D+"<br>Кількість розвязків: "+k+"<br>Корінь1: "+result1;
    }else{
        k=0;
        document.getElementById('res2').innerHTML="Відповідь: D="+D+"<br>Кількість розвязків: "+k+"<br>Коренів немає!";
    }
   
    
});