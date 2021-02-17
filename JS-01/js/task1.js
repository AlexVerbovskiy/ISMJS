document.getElementById('btask1').addEventListener('click', function ()
{
    let x=parseFloat(document.getElementById('ix1').value);
    let y=parseFloat(document.getElementById('iy1').value);
    let z=parseFloat(document.getElementById('iz1').value);
    let res=(2*Math.cos(Math.pow(x,2))-0.5)/(0.5+Math.sin(Math.pow(y,2-z)))+Math.pow(z,2)/(7-z/3);
    document.getElementById('res1').style.display="block";
    document.getElementById('res1').innerHTML="Відповідь: "+res;
});
