// while loop - choice equals 'y'
let rl = require("readline-sync");
let choice = 'y';
while (choice == 'y'){
    // index for loop
    for (let i = 0; i < 100; i+= 4) {
        console.log(i);
        
    }
    let names:string[] = ['Jim','Andy','Adrian','Heath','Christian','Abigail']
    // for of loop
    for(let s of names){
        console.log(s);
    }
    
    names.sort();

    names.forEach(str => console.log(`name is ${str}`))

    choice = rl.question("continue? (y/n) ").toLowerCase();
    if (choice = 'z'){
        console.log('z entered');
    }
}

