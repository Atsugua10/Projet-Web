
 
function annuler() 
    {
    document.getElementsByName("message")[0].value = "";
    }
    function checkPw(form) {
        pw1 = form.mot-de-passe.value;
        pw2 = form.mot-de-passe2.value;
        
        if (pw1 != pw2) {
        alert ("\erreur: les mots de passes ne correspondent pas")
        return false;
        }
        else return true;
        }
    


        var inscriptionForm = document.forms.inscription; 
    
        function Ajouter()                                    
        { 
            var Nom= document.forms["inscription"]["nom"];               
            var Prenom = document.forms["inscription"]["prenom"];    
            var Tel = document.forms["inscription"]["te"];  
            var Email =  document.forms["inscription"]["email"];  
            var Password = document.forms["inscription"]["mot de passe"];  
            
            if (Nom.value == "")                                  
            { 
                alert("Mettez votre nom."); 
                Nom.focus(); 
                return false; 
            }    
            if (Prenom.value == "")                               
            { 
                alert("Mettez votre prenom."); 
                Prenom.focus(); 
                return false; 
            }    
            if (Tel.value == "")                           
            { 
                alert("Mettez votre numéro de téléphone."); 
                Tel.focus(); 
                return false; 
            }        
            if (Email.value == "")                                   
            { 
                alert("Mettez une adresse email valide."); 
                Email.focus(); 
                return false; 
            }    
            if (Email.value.indexOf("@", 0) < 0)                 
            { 
                alert("Mettez une adresse email valide."); 
                email.focus(); 
                return false; 
            }    
           
            if (Password.value == "")                        
            { 
                alert("Saisissez votre mot de passe"); 
                Password.focus(); 
                return false; 
            }    
           
        }
    
        // supprimer toutes les lignes du tableau
        //ex2)3)viii)
    function supprimer() {
            const tbody = document.querySelector('.datatable tbody' )
            while (tbody.firstChild) {
              tbody.removeChild(tbody.firstChild)
            }
        
    }
    
    
    
// suppression de toutes les lignes du tableau

function supprimer() {
    const tbody = document.querySelector('.datatable tbody' )
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild)
    }

}

function pause(ms) 
{
return new Promise(resolve => setTimeout(resolve, ms));
}

//afficherDate();

async function afficherDate() 
{
while(true) 
{
await pause(1);
var cejour = new Date();
var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
var date = cejour.toLocaleDateString("fr-FR", options);
var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
var dateheure = date + " " + heure;
var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
document.getElementById('dateheure').innerHTML = dateheure;
}
}