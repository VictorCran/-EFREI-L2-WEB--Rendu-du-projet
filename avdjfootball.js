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
    ["Dans quel pays est né le football ?", "Allemagne", "Angleterre", "France", "B"],
    ["En quelle année s'est déroulée la 1ère Coupe du Monde ?", "1920", "1930", "1945", "B"],
    ["A ce jour, qui détient le plus de Ballons d'Or ?", "Zinedine Zidane", "Cristiano Ronaldo", "Lionel Messi", "C"],
    ["Que signifie 'FIFA ?' ", "Fédération Internationale de Football Association", "Football International Federation Authority", "Federation of International Football Authorities", "A"],
    ["Quelle est la longueur d'un terrain ?", "120-150 mètres", "100-130 mètres" , "90-120 mètres", "C"],
    ["Combien y'a-t-il de pays dans une Coupe du Monde", "32 pays", "30 pays" , "28 pays", "A"],
    ["Quelle équipe a remporté la Coupe du Monde 2018 ?", "L'Allemagne", "l'Equipe de France" , "L'Espagne", "B"],
    ["Pour quel club Cristiano Ronaldo joue-t-il actuellement ?", "Juventus de Turin", "Real Madrid" , "Sporting Portugal", "A"],
    ["Combien de Coupe du Monde a remporté l'Equipe de France ?", "1", "2" , "3", "B"],
    ["Combien de Coupe du Monde a remporté le Brésil ?", "3", "4" , "5", "C"]
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