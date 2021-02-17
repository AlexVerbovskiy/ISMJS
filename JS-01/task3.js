document.getElementById('btask3').addEventListener('click', function ()
{
    let N=parseFloat(document.getElementById('iN3').value);
    let res=0;
    for(let i=1;i<=N;i++){
    res+=Math.pow(i,N+1-i);
    }
    document.getElementById('res3').style.display="block";
    document.getElementById('res3').innerHTML="Відповідь: "+res;
});