/*
!   PERULANGAN DI JAVASCRIPT
? for, for of, for in, foreach
* while & do while
**/

for (let z = 1; z <= 5; z++) {
    console.log('data ke -', z)
}

let x = 1
while(x <= 5) {
        console.log('data x ke -', x)
    x++
}

let y = 1
do {
    console.log('data y ke -', y)
    y++
} while (y <= 10)

/*
! PERULANGAN DI JAVASCRIPT
? FOR, FOR OF, FOR IN, FOREACH
* WHILE & DO WHILE 
! MAP
**/

const pacarSaya = ['rabin','yuri', 'kefier','andreas','Ci-N']
// for of supaya tau isian index atau dalam pacar saya itu apa atau mendapatkan value nya langsung

for(let pacar of pacarSaya) {
    console.log(pacar)
}

// for in = index dapat index nya
for(let pacar in pacarSaya) {
    console.log(pacar)
}

// for each dapat value dan index array nya

pacarSaya.forEach((pacar, index) => {
    console.log(pacar, index)
})


pacarSaya.map((pacar, index) => {
    console.log(pacar, index)
})

