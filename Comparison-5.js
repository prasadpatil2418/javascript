
        var a = 10;
        var b = 20;
        console.log(a == b); //output false
        console.log(a>b); //output false
        console.log(a<b); //output true
        console.log(a!=b); //output true
        console.log(a>=b); //output false
        console.log(a<=b); //output true
        console.log(a===b); //output false (checking value and datatypes)
        console.log(a!==b); //output true (checking value and datatypes)
        console.log(a == 10); //output true 
        console.log(a == "10"); //output true
        console.log(null == undefined); //output true


        //logical operators
        var x = 10;
        var y = 20;
        console.log(x > 5 && y < 30); //output true
        console.log(x > 5 && y > 30); //output false
        console.log(x > 5 || y < 30); //output true
        console.log(x > 5 || y > 30); //output true
        console.log(!(x > 5)); //output false
        console.log(!(x < 5)); //output true
        console.log(!(x > 5 && y < 30)); //output false
        console.log(!(x > 5 || y < 30)); //output false
        console.log(!(x > 5 || y > 30)); //output false
        console.log(!(x > 5 && y > 30)); //output true
        console.log(!(x > 5) && !(y < 30)); //output false
        console.log(!(x > 5) || !(y < 30)); //output false

        //ternary operator
        var age = 18;
        var eligible = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
        console.log(eligible); //output Eligible to vote
        var num = 10;
        var result = (num % 2 === 0) ? "Even number" : "Odd number";
        console.log(result); //output Even number

