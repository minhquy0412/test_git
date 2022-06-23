alert("Hình vuông rỗng");
const a = 5;

for( i=1; i<=a; i++ ){
    
    if(i == a || i == 1){
        for(j=1; j<=a; j++){
            document.write("*&nbsp;&nbsp;");
        }       
    }
    else {
        document.write("*&nbsp;&nbsp;");
        for(j=1; j<=a-2; j++){
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        document.write("*&nbsp;&nbsp;");
    }

    document.write("<br/>");
}
