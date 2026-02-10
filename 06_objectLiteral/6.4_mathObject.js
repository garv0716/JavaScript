/*
 => properties 
 -Math.Pi 
 -Math.E

 => methods
 -Math.abs(n) //absolute                \
 -Math.pow(a,b)                         
 -Math.floor(n) //roundOf the number nearest smallest value
 -Math.celi(n) // roundof to the next number eg: 5.5->6
 -Math.random() // it gives vakue b/w 0 to 1, but not include 1
   -> Generate random integer betweeh 1 to 10
     -step 1: let num = Math.random(); // 0.454554
     -step 2: num = num * 10  // 4.4554
     -step 3: num = Math.floor(num) // 4
     -step 4: num = num + 1  // 5

 */


     let random = Math.floor(Math.random()* 10) + 1;

