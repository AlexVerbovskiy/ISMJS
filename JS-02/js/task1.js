document.getElementById("chenger").addEventListener("click", function(){toCamelCase()});
document.getElementById("reChenger").addEventListener("click", function(){toSnakeCase()});

lowerString="qwertyuiopasdfghjklzxcvbnm";
upperString="QWERTYUIOPASDFGHJKLZXCVBNM";
lowerUaString="йцукенгшщзхфівапролджєячсмитьбюї";
upperUaString="ЙЦУКЕНГШЩЗХФІВАПРОЛДЖЄЯЧСМИТЬБЮЇ";
function toCamelCase(){
    let str=document.getElementById("getText").value;
    let res="";
    for(let i=0;i<str.length;i++){
        if(str[i]==='_'){
            i++;
            for(let j=0;j<lowerString.length;j++){
                if(str[i]===lowerString[j]){
                    res+=upperString[j];
                    break;
                }if(str[i]===lowerUaString[j]){
                    res+=upperUaString[j];
                    break;
                }
            }
        }else{
          res+=str[i];  
        }
        
    }
    document.getElementById("res").innerHTML="Результат виконання дії:"+res;
}

function  toSnakeCase(){
    let str=document.getElementById("getNewText").value;
    let res="";
    for(let i=0;i<str.length;i++){
        let c=0;
            for(let j=0;j<lowerString.length;j++){
                if(str[i]===upperString[j]){
                    res+="_"+lowerString[j];
                    c++;
                    break;
                }
                if(str[i]===upperUaString[j]){
                    res+="_"+lowerUaString[j];
                    c++;
                    break;
                }
            }
            if(c===0){
              res+=str[i];    
            }
          
        }

        document.getElementById("newRes").innerHTML="Результат виконання дії:"+res;
}

