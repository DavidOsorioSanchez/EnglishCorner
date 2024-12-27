var points = 0; // puntos totales de el jugador
var actualask = 0; // index de la apregunta actual
const TPP= 30; // tiempo por pregunta

    const test = {
        pregunta: [{
            header: "1- ¿cual de las sigientes es correcta?.",
            img: "../img/test1.gif",
            respuestas: [{
                i: "1",
                r: "I am a student",
                correcta: true
            },{
                i: "2",
                r: "I are study",
                correcta: false
            },{
                i: "3",
                r: "They is student",
                correcta: false
            },{
                i: "4",
                r: "I not are study",
                correcta: false
            }
            ]
        },
    
        {
            header: " 2-  _______ is my mother.",
            img: "../img/test2.gif",
            respuestas: [{
                i: "1",
                r: "I",
                correcta: false
            },{
                i: "2",
                r: "They",
                correcta: false
            },{
                i: "3",
                r: "He",
                correcta: false
            },{
                i: "4",
                r: "She",
                correcta: true
            }
            ]
        },{
            header: "3- _________ am a farmer..",
            img: "../img/test3.gif",
            respuestas: [{
                i: "1",
                r: "They",
                correcta: false
            },{
                i: "2",
                r: "I",
                correcta: true
            },{
                i: "3",
                r: "He",
                correcta: false
            },{
                i: "4",
                r: "She",
                correcta: false
            }
            ]
        },{
            header: "4- ________ are very bad doctors.",
            img: "../img/test4.gif",
            respuestas: [{
                i: "1",
                r: "It",
                correcta: false
            },{
                i: "2",
                r: "He",
                correcta: false
            },{
                i: "3",
                r: "She",
                correcta: false
            },{
                i: "4",
                r: "They",
                correcta: true
            }
            ]
        },{
            header: "5- _________ are very intelligent.",
            img: "../img/test5.gif",
            respuestas: [{
                i: "1",
                r: "It",
                correcta: false
            },{
                i: "2",
                r: "we",
                correcta: true
            },{
                i: "3",
                r: "I",
                correcta: false
            },{
                i: "4",
                r: "He",
                correcta: false
            }
            ]
        },{
            header: "6- My friends are the most intelligent in the school.",
            img: "../img/test6.gif",
            respuestas: [{
                i: "1",
                r: "Mis amigos son los mas inteligentes en la escuela.",
                correcta: true
            },{
                i: "2",
                r: "Mi amigo es el mas sabio en la preparatoria.",
                correcta: false
            },{
                i: "3",
                r: "Mis amigos son los mas inteligentes de la escuela.",
                correcta: false
            },{
                i: "4",
                r: "Mi amigo es el mas inteligente en el trabajo.",
                correcta: false
            }
            ]
        },{
            header: "7- She is very thirsty.",
            img: "../img/test7.gif",
            respuestas: [{
                i: "1",
                r: "Ellas estan muy sedientas.",
                correcta: false
            },{
                i: "2",
                r: "Ellos estan muy sedientos.",
                correcta: false
            },{
                i: "3",
                r: "Ellos estan sedientos.",
                correcta: false
            },{
                i: "4",
                r: "Ella está muy sedienta.",
                correcta: true
            }
            ]
        },{
            header: "8- My son is writing a love letter to his partner.",
            img: "../img/test8.gif",
            respuestas: [{
                i: "1",
                r: "Mi hija le esta ecribiendo una carta al banquero.",
                correcta: false
            },{
                i: "2",
                r: "Ellos le esta escribiendo una carta de amor a su compañera.",
                correcta: false
            },{
                i: "3",
                r: "Mi hijo le esta escribiendo una carta de amor a su compañera.",
                correcta: true
            },{
                i: "4",
                r: "Mi hijo le esta escribiendo una carta al banquero.",
                correcta: false
            }
            ]
        },
    
    ]
    }




function printer(i){
    actualask = i;
    const aski = test.pregunta[i];
    console.log(aski);

    // pregunta si ya todas las preguntas se hicieron y si es asi ejecuta finish para terminar de jugar y mostrar los resultados
    if(!aski){
        finish();
    }{

    //se obtienen los elementos de el DOM por los id 
    let ask = document.getElementById("ask");
    let image = document.getElementById("image");
    let preguntas = document.getElementById("preguntas");
    //se definen los estilos y colores de los botones
    buttonscollors = ["success","warning","danger","primary"];
    buttonspos= ["position: absolute; left: 0px; top: 61%; width: 50%; height: 125px;",
    "position: absolute; right: 0px; top: 61%; width: 50%; height: 125px; color: white;",
    "position: absolute; left: 0%; top: 80%; width: 50%; height: 125px;",
    "position: absolute; right: 0%; top: 80%; width: 50%; height: 125px;"]
    //pinta la pregunta
    ask.innerHTML = `<h1 class="bien">${aski.header}</h1>`
    //muestra la imagen
    image.innerHTML = `
    <img src="${aski.img}" class="imagen" alt="farmer">
    `;
    //muestra los botones de las respuestas
    let buttons = "";
    for (let x = 0; x < aski.respuestas.length; x++) {
        buttons+=`<button type="button" onclick="verify(${i},${x})" style="${buttonspos[x]}" class="btn btn-${buttonscollors[x]}"><h4>${aski.respuestas[x].r}</h4></button>`;
    }

    // pintar la pregunta
    preguntas.innerHTML = buttons;
    // ejecutar conteo de segundos
    Countdown(TPP, i);
    }
}


function Countdown(totaltime, ask){
    if(ask!=actualask){
     document.getElementById('countdown').innerHTML = TPP;
    }else if(totaltime==0){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'se te acabo el tiempo',
            confirmButtonColor: 'orange',
            confirmButtonText: '<a">siguiente</a>',
            showClass: {
                popup: 'animate__animated animate__headShake'
            }
            })
        printer((ask+1));
     }else{
     document.getElementById('countdown').innerHTML = totaltime;
     setTimeout(function(){ Countdown((totaltime-1), ask); }, 1000);
 }
}

       



function verify(idr,r){

let nexquest = (idr+1);
let countdown = document.getElementById("counter-label");
const aski = test.pregunta[idr];
if(aski.respuestas[r].correcta){
    points++;

    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'se te acabo el tiempo',
        confirmButtonColor: 'orange',
        confirmButtonText: '<a">siguiente</a>',
        showClass: {
            popup: 'animate__animated animate__headShake'
        }
        })

}else{

     Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'se te acabo el tiempo',
            confirmButtonColor: 'orange',
            confirmButtonText: '<a">siguiente</a>',
            showClass: {
                popup: 'animate__animated animate__headShake'
            }
            })

}
// actualiza los puntos
countdown.innerHTML = points;
printer(nexquest);
}


function finish(){
    
    document.getElementById("ask").innerHTML="";
    document.getElementById("image").innerHTML="";
    document.getElementById("counter-label").innerHTML="";
    document.getElementById("preguntas").innerHTML="";
    document.getElementById("buenas").innerHTML="";
    document.getElementById("f").innerHTML = "";
    document.getElementById("resultados").innerHTML = "";




    const resp = `
    <br>
    <h4 style="display: flex; top: 0px; left: 40px; height: 4px; font-size: 5vw; position: absolute;"> hola ${points}/${test.pregunta.length}</h4>
    <br> 
    `;




    document.getElementById("resultados").innerHTML = resp;
}