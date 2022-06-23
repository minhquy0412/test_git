alert("Hình tam giác rỗng");
const a = 4;

for( i=1; i<=a; i++){
    
    for( k=a; k>i; k--){
        document.write("&nbsp;&nbsp;");
    }
    for( j=1; j<=2*i-1; j++){
        if(i==1 || i==a || j==1|| j==2*i-1){
            document.write("*");
        }
        else{
            document.write("&nbsp;&nbsp;");
        }
    }

    document.write("<br/>");
}