alert("Hình tam giác ngược");
const a = 5;

for( i=a; i>=1; --i){
    
    for( j=1; j<=a-i; ++j){
        document.write("&nbsp;&nbsp;");
    }
    for( j=i; j<=2*i-1; ++j){
        document.write("*");
    }
    for( j=0; j<i-1; ++j){
        document.write("*");
    }

    document.write("<br/>");
}