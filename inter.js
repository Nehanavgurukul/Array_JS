const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
    });

readline.question("give any string" , str =>{
    var con=0;
    var vow=0;
    for ( i in str){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" ||str[i]=="u"){
            vow++;
        }else{
            con++;
        }

    }
    console.log("vowels are",vow);
    console.log("consonants are",con);
    readline.close();
});

