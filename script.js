const quizDB=[
    {
        question:"Q1: What is the full form of HTML",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"Hyper Text Markup Language",
        d:"Hyper Text Makeup Language",
        ans:"ans3"
    },
    {
        question:"Q2: What is the full form of CSS",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question:"Q3: What is the full form of HTTP",
        a:"Hyper Text Transfer Product",
        b:"Hyper Text Test Protocal",
        c:"Hey Transfer Protocol",
        d:"Hyper Text Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4: What is the full form of JS",
        a:"JustScript",
        b:"JavaScript",
        c:"JavaSuper",
        d:"JordenShoes",
        ans:"ans2"
    }
];

const question =document.querySelector(".question");

const option1 =document.querySelector("#option1");
const option2 =document.querySelector("#option2");
const option3 =document.querySelector("#option3");
const option4 =document.querySelector("#option4");

const answers=document.querySelectorAll(".answer");

const submit =document.querySelector("#submit");

const showScore=document.querySelector("#showScore");

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionlist=quizDB[questionCount]
    question.innerHTML=questionlist.question;
    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}
loadQuestion();

const getCheckedAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        };
    });
    return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckedAnswer();
    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>Your Score ${score}/${quizDB.length}<h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        
        submit.style.display="none";
        showScore.classList.remove('scoreArea');
    }
})



