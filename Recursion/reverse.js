console.log("reverse ");

function reverseString(str){
    if (str === "" )return "";
    else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));


// hello -- ello + h;
// ello -- llo + e;
// llo --- lo +  l ;
// lo ---  o + l;
// o  ---- o
