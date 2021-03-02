let arr=[];
let rows;
let columns;
let min;
let max;
document.getElementById("count").addEventListener("click", function(){
    arr=[];
    rows=+document.getElementById("getRows").value;
    columns=+document.getElementById("getColumns").value;
    min=+document.getElementById("getMin").value;
    max=+document.getElementById("getMax").value;
    let myTable=document.createElement("table");
    for(let i=0;i<rows;i++){
        let arrDop=[];
        for(let j=0;j<columns;j++){
            let randNum=Math.floor(Math.random()*(max-min)+min);
            arrDop.push(randNum);
        }
        arr.push(arrDop)
    }
    createTable();
});
document.getElementById("transp").addEventListener("click", function(){
    let arr1=[]
    for(let i=0;i<columns;i++){
        let arr2=[];
        for(let j=0;j<rows;j++){
            arr2.push(arr[j][i]);
        }
        arr1.push(arr2);
    }
    arr=arr1;
    let t=columns;
    columns=rows;
    rows=t;
    createTable();
});

document.getElementById("swap").addEventListener("click",function(){
    let arr1=[];
    for(let i=0;i<rows;i++){
        let a=arr[i][columns-1];
        for(let j=columns-2;j>=0;j--){
            arr[i][j+1]=arr[i][j];
        }
        arr[i][0]=a;
    }
    createTable();
});

document.getElementById("addColumns").addEventListener("click",function(){
for(let i=0;i<rows;i++){
    let arr1=arr[i];
    arr1.push(Math.floor(Math.random()*(max-min)+min));
    arr[i]=arr1;
}
columns++;
createTable();
});

document.getElementById("addRows").addEventListener("click",function(){
    let arr1=[];
    for(let i=0;i<columns;i++){
        arr1.push(Math.floor(Math.random()*(max-min)+min));
    }
    arr.push(arr1);
    rows++;
    createTable();
});
function createTable(){
    if(document.getElementById("t1")){
        document.getElementById("t1").remove();
    }
    
    let myTable=document.createElement("table");
    myTable.id="t1";
    for(let i=0;i<rows;i++){
        let myTr=document.createElement("tr");
        for(let j=0;j<columns;j++){
            let myTd=document.createElement("td");
            myTd.innerHTML=arr[i][j];
            myTd.style.border="1px solid black";
            myTr.appendChild(myTd);
        }
        myTable.appendChild(myTr);
    }
    myTable.style.border="1px solid black";
    document.body.appendChild(myTable);
}

document.getElementById("dete").addEventListener("click",function(){
    let res;
    if(rows===columns){
    res="Визначник:"+Determinant(arr);
    }else{
        res="Кількість рядків не співпадає з кількістю стовпців, тому визначник матриці 0";
    }
    document.getElementById("resDete").innerHTML=res;
});

function Determinant( arr1)
{ 
    var n =  arr1.length, subA = [], detA = 0;
    if (n==1) return  arr1[0][0];
    if (n==2) return ( arr1[0][0]* arr1[1][1]- arr1[0][1]* arr1[1][0]);
    if (n==3)
       { return (( arr1[0][0]* arr1[1][1]* arr1[2][2]+ arr1[0][1]* arr1[1][2]* arr1[2][0]+ arr1[0][2]* arr1[1][0]* arr1[2][1])
                 -( arr1[0][0]* arr1[1][2]* arr1[2][1]+ arr1[0][1]* arr1[1][0]* arr1[2][2]+ arr1[0][2]* arr1[1][1]* arr1[2][0]));
       }
    for (var i=0; i<n; i++)
        { for (var h=0; h<n-1; h++) subA[h]=[];
          for (var a=1; a<n; a++)
              { for (var b=0; b<n; b++)
                    { if (b<i)       subA[a-1][ b ] =  arr1[ a ][ b ];
                      else if (b>i)  subA[a-1][b-1] =  arr1[ a ][ b ];
                    }
              }
              var sign=0;
              if((i%2==0)){
                sign=1;
              }else{
                  sign=-1;
              }
          detA += sign *  arr1[0][i] * Determinant(subA);
        }
    return detA;
}



