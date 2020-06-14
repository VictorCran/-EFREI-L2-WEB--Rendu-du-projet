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
    ["Combien de fois Lewis Hamilton a été champion du monde ?", "3", "7", "9", "B"],
    ["Combien de circuits sont selectionnés pour le championnat du monde de Formule 1 ?", "15", "18", "21", "C"],
    ["Combien de courses l'écurie Mclaren a-t-elle disputées ?", "383", "863", "286", "B"],
    ["Que veut dire FIA ?", "Fédération Internationale Automobile", "Formula International Automobile", "Formule 1 In Automobile", "A"],
    ["Quand a réellement commencé la formule 1 ?", "1946", "1950" , "1958", "A"],
    ["A quelle écurie appartient Lewis Hamilton ?", "Renault", "Mclaren-Mercedes" , "Ferrari", "B"],
    ["Quel est le surnom de Michael SCHUMACHER ?", "Schum", "Michou" , "Schumi", "C"],
    ["A quel âge Michael SCHUMACHER a pris sa retraite ?", "38 ans", "40 ans" , "43 ans", "C"],
    ["Quel est le circuit le plus long du championnat de 2018 ?", "Circuit de Spa-Franchorchamps", "Autodrome de Sotchi" , "Monaco", "A"],
    ["Quelle écurie a le plus de victoires ?", "Redbull", "Mercedes" , "Ferrari", "C"]
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