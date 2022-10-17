let baseQuestion = [
    {
        question: '¿Quien pinto la Mona Lisa?',
        img: 'assets/img/Mona_Lisa.jpg',
        answer: 'Leonardo Da Vinci',
        distraction:[
            'Picasso',
            'Beethoven',
            'Miguel Angel'
        ]
    },

    {
        question: '¿Cual es el pais mas grande del mundo?',
        img: 'assets/img/question2.png',
        answer: 'Rusia',
        distraction:[
            'China',
            'Japon',
            'Canada'
        ]
    },

    {
        question: '¿Cual es el rio mas largo del mundo?',
        img: 'assets/img/question3.jpg',
        answer: 'Rio Amazonas',
        distraction:[
            'Rio Nilo',
            'Rio Yangtsé',
            'Rio Misisipi'
        ]
    },

    {
        question: '¿Quien es el?',
        img: 'assets/img/question4.jpg',
        answer: 'Elon Musk',
        distraction:[
            'Jeff Bezos',
            'Robert Kiyosaki',
            'Mark Zuckerberg'
        ]
    },

    {
        question: '¿A que pais pertenece esta bandera?',
        img: 'assets/img/question5.png',
        answer: 'Noruega',
        distraction:[
            'Suiza',
            'Rumania',
            'Canada'
        ]
    },

    {
        question: '¿En que pais esta la Torre Eiffel?',
        img: 'assets/img/question6.jpg',
        answer: 'Fancia',
        distraction:[
            'Paris',
            'España',
            'Italia'
        ]
    },

    {
        question: '¿Cual es el pais con la mayor deuda del mundo?',
        img: 'assets/img/question7.jpg',
        answer: 'Japon',
        distraction:[
            'Grecia',
            'Venezuela',
            'Libano'
        ]
    },

    {
        question: '¿Cual es el pais con la mayor poblacion del mundo?',
        img: 'assets/img/question8.jpeg',
        answer: 'China',
        distraction:[
            'India',
            'Rusia',
            'Estados Unidos'
        ]
    },

    {
        question: '¿Cual es la raza de Hashiko?',
        img: 'assets/img/question9.png',
        answer: 'Akita',
        distraction:[
            'Shiba Inu',
            'Bull Terrier',
            'Husky'
        ]
    },

    {
        question: '¿Quien creo Don Quijote De La Mancha?',
        img: 'assets/img/question10.jpg',
        answer: 'Miguel de Cervantes',
        distraction:[
            'Leonardo Dicrapio',
            'Ana Frank',
            'Robert Downey Jr'
        ]
    },

    {
        question: '¿Que Fue Vincent Van Gogh?',
        img: 'assets/img/question11.jpg',
        answer: 'Pintor',
        distraction:[
            'Actor',
            'Dramaturbo',
            'Escritor'
        ]
    },

    {
        question: '¿Cuantos huesos tiene el cuerpo humano?',
        img: 'assets/img/question12.webp',
        answer: '206',
        distraction:[
            '210',
            '180',
            '300'
        ]
    },

    {
        question: '¿Cuanto midio el hombre mas alto de la historia?',
        img: 'assets/img/question13.jpg',
        answer: '2,72 cm',
        distraction:[
            '2,30 cm',
            '3,22 cm',
            '2,45 cm'
        ]
    },

    {
        question: '¿Cual es el continente con la mayor poblacion del mundo?',
        img: 'assets/img/question14.jpg',
        answer: 'Asiatico',
        distraction:[
            'Americano',
            'Africano',
            'Auropeo'
        ]
    },

    {
        question: '¿En que continente se encuentra Tanzania?',
        img: 'assets/img/question15.png',
        answer: 'Africano',
        distraction:[
            'Americano',
            'Asiatico',
            'Auropeo'
        ]
    }
];


let indexQuestion = 0;
let points = 0;
let pointsDefead = 0;

loadQuestion(0);

function loadQuestion(i){
    objectQuestion = baseQuestion[i];
    options = [...objectQuestion.distraction];
    options.push(objectQuestion.answer);
    for(let i = 0; i < 4; i++){
        options.sort(()=> Math.random() - 0.5);
    }
    document.querySelector('.game__title').innerHTML = objectQuestion.question;
    if(objectQuestion.img){
        document.querySelector('.game__img').src = objectQuestion.img;
        document.querySelector('.game__img').style.display = '';
    }
    else{
        document.querySelector('.game__img').style.display = 'none';
    }
    document.getElementById('game_option-1').innerHTML = options[0];
    document.getElementById('game_option-2').innerHTML = options[1];
    document.getElementById('game_option-3').innerHTML = options[2];
    document.getElementById('game_option-4').innerHTML = options[3];
}

async function selectOption(i){
    let verifAnwer = options[i] == objectQuestion.answer;
    if(verifAnwer){
        await Swal.fire({
            title: 'Correcto',
            text: 'Felicidades, la respuesta es correcta',
            icon: 'success'
        })
        points++
    }
    else{
        await Swal.fire({
            title: 'Incorreto',
            text: `La respuesta correcta es "${objectQuestion.answer}"`,
            icon: 'error'
        })
        pointsDefead++
    }
    indexQuestion++
    if(indexQuestion >= baseQuestion.length){
        if(points > pointsDefead){
            await Swal.fire({
                title: 'Felicidades',
                text: `Tus puntos ${points}/${baseQuestion.length} - aciertos ${points} fallos ${pointsDefead}`,
                imageUrl: 'assets/img/success.png',
                imageWidth: 200,
                imageHeight: 200,
            })
        }
        else{
            await Swal.fire({
                title: 'Lo siento, fallaste',
                text: `Tus puntos ${points}/${baseQuestion.length} - aciertos ${points} fallos ${pointsDefead}`,
                imageUrl: 'assets/img/lose.png',
                imageWidth: 200,
                imageHeight: 200,
            })
        }
        
        indexQuestion = 0;
        points = 0;
        pointsDefead = 0;
    }else{

    }
    loadQuestion(indexQuestion)
}