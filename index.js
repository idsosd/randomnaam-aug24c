const namen=[
    "Noah", 
    "Angela", 
    "Alivina", 
    "Pascal",
    "Dinand",
    "Marnick",
    "Ahmad",
    "Taha",
    "Martijn",
    "Lars",
    "Brendan",
    "Dylan",
    "Nick",
    "Ids",
    "Michiel",
    "Ismail",
    "Janine",
    "Junior"
];
//voorb: namen[0] = "Noah"; namen[7]="Taha"; namen[13]="Ids"; namen[14]="undefined"
//als we dus een random getal tussen 0 en 13 genereren, kunnen we met dat getal
//de random naam pakken

function randomname()
{
    let random_nmbr = Math.floor(Math.random() * namen.length);
    //alert("De gekozen naam is: " + namen[random_nmbr]);
    document.getElementById("naam").innerText = namen[random_nmbr];
}

function random2names()
{
    if(namen.length > 0){
    let naam1 = randomnameanddestroy();
    let naam2 = randomnameanddestroy();
    document.getElementById("naam").innerHTML += naam1 + " en " + naam2 + "<br>";
    } else {
        document.getElementById("naam").innerHTML += "de namen zijn op!";
    }
}


function randomnameanddestroy()
{
    let random_nmbr = Math.floor(Math.random() * namen.length);
    let name = namen[random_nmbr];
    namen.splice(random_nmbr, 1);
    console.log(name + " " + namen);
    return name;
}

function randomduos()
{
    while(namen.length > 0){
        let naam1 = randomnameanddestroy();
        let naam2 = randomnameanddestroy();
        document.getElementById("naam").innerHTML += naam1 + " en " + naam2 + "<br>";
    }
    
    //de twee namen die net gekozen zijn, moeten uit de namen-array gegooid worden
    //dit kan met de splice-functie van javascript
    //daarna: weer random2names met de nieuwe namen-array
}