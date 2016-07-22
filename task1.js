/**
 * Created by Fly-mydream on 16.6.30.
 */

    var colors;
    colors = ["red", "green", "blue"];
    var numbers;
    numbers=[0,1,2,3,4,5,6,7,8];
     var i;
    function changeColor(){
        var aaa,bbb;
        aaa = colors[Math.floor(Math.random() * 3)];
        bbb=numbers[Math.floor(Math.random() * 9)];
        for( i=0;i<9;i++) {
            document.getElementById("color-"+i).style.backgroundColor="#e8830d";
        }
        if(i==8) {
            i=0;
        }
        document.getElementById("color-"+bbb).style.backgroundColor=aaa;
        console.log("格子"+bbb+"变成了"+aaa);
        
      }
     function func(){
         setInterval("changeColor()",1000);
     }
