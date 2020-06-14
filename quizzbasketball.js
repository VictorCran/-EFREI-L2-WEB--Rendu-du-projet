var position = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var choix_A;
var choix_B;
var choix_C;
var correct = 0;

var questions = [
    ["Quelle est la deuxième meilleure nation au championnat du monde de basketball masculin ?", "Etats-Unis", "France", "Yougoslavie", "C"],
    ["Où se passe l'événement annuel Quai 54 ?", "Paris", "Los Angeles", "Madrid", "A"],
    ["Qui a inscrit 81 points en un match ?", "LeBron James", "Michael Jordan", "Kobe Bryant", "C"],
    ["Quelle est la seule franchise dans laquelle Kobe Bryant a joué ?", "Cleveland Cavaliers", "Toronto Raptors", "Los Angeles Lakers", "C"],
    ["Pour quoi d'autre Michael Jordan est-il connu ?", "Mannequin", "Marque de chaussures" , "Marque de bijoux", "B"],
    ["Les initiales NBA signifient :", "National Basketball Association", "National Basketball Application" , "National Basketball Art", "A"],
    ["Comment LeBron James a été décisif pendant la finale des playoffs ?", "Tir à 3 points", "Contre" , "Passe décisive", "B"],
    ["Comment s'appelle le fondateur du basketball ?", "James Naismith", "John Naismith" , "Jim Naismith", "A"],
    ["Combien y'a-t-il de franchises dans la NBA ?", "29", "33" , "30", "C"],
    ["Qu'est-ce qu'un crossover ?", "Une variante de tir", "Une variante de passe" , "Une variante de dribble", "C"]
];

function getID(x)
{
    return document.getElementById(x);
}

function renderQuestion()
{
    test = getID("test");
    /*Permet de montrer à la fin le nombre de réponses correctes*/
    if(position >= questions.length) 
    {
        getID("test_status").innerHTML = "FIN DU QUIZZ";
        test.innerHTML = "<h3>Tu as " + correct + " question(s) correcte(s) sur " + questions.length + " questions </h3><br>";
        test.innerHTML += "<button name='redirect' onclick='redirect()'>Retour</button>"
        position = 0;
        correct = 0;
        return false;
    }
    
    /*Permet d'afficher les questions du quizz */
    getID("test_status").innerHTML = "Question "+(position+1)+" sur "+questions.length;
    question = questions[position][0];
    choix_A = questions[position][1];
    choix_B = questions[position][2];
    choix_C = questions[position][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + choix_A + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + choix_B + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + choix_C + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Question Suivante</button>";
}

function required(inputx) 
   {
     if (inputx.value.length == 0)
      { 
        alert("Saisissez tous les champs SVP");  	
        return false; 
      }  	
      
    } 

function checkAnswer()
{
    choice = 0;
    choices = document.getElementsByName("choices");
    
    //Vérification du choix de l'utilisateur
    if (choices[0].checked == false && choices[1].checked == false && choices[2].checked == false)
    {
        return alert("Veuillez saisir une réponse !");
    }
    else
    {
        for(var i=0; i<choices.length; i++)
        {
            if(choices[i].checked)
            {
                choice = choices[i].value;
            }
        }
    }
    //Incrémente le résultat 
    if(choice == questions[position][4])
    {
        correct++;
    }
    position++;
    renderQuestion();
}

function redirect()
{
    document.location.href="avdj.html";
}

window.addEventListener("load", renderQuestion, false);