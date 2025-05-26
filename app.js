fetch('escape-game.json')
  .then(response => response.json())
  .then(data => {
    afficherActivites(data)
    afficheravis(data)
    afficheravantage(data)
    afficherhero(data)


   
    




  })


//role : ma fonction sert a afficher le hero elle crees des constantes pour assigner les donne du json et les affiche avec le innerhtml
//parametres/arguments: elle recupere le tableau (le json)
//return : en a pas car elle affiche 

function afficherhero (tableau){

    const titre = tableau.nomCommercial
    const phrase = tableau.phraseAccroche
    const accroche = tableau.texteAppelAction
        
        document.getElementById("hero").innerHTML += `
         <div class="container div1">
            <h1 class="whitee">${titre}</h1>
            <p class="whitee">${phrase}</p>
            <a href="#salles" class="btn whitee">${accroche}</a>
        </div>
        
        `
}







//role : ma fonction sert a afficher les avantage elle fait un foreach pour lire le tableau et les affiche avec le innerhtml
//parametres/arguments: elle recupere le tableau (le json)
//return : en a pas car elle affiche 


function afficheravantage (tableau){



    tableau.avantagesClients.forEach(avantage => {
        
        document.getElementById("avantage").innerHTML += `
        <div class="div4">
            <p class="p1">${avantage}</p>
        </div>
        
        
        
        `


    });
}


//role : ma fonction sert a afficher les activites elle fait un foreach pour lire le tableau et les affiche avec le innerhtml
//parametres/arguments: elle recupere le tableau (le json)
//return : en a pas car elle affiche 

function afficherActivites (tableauActivites){

    tableauActivites.activites.forEach(salle => {
      document.getElementById("salle").innerHTML += `
       <div class="cartesa"> <!-- carte -->
                <div>
                    <img src="${salle.image}" alt="${salle.nom}" class="imgcard">

                </div>
                <div class="flex">
                    <p class="black div2 bold">${salle.nom}</p>
                    <p class="black div2">${salle.description}</p>
                </div>
                <div class="carte-footer">
                    <a href="" class="whitee btnrev">Réservez</a>
                </div>
                 

            </div>
      `;
    });

}

function afficheravis (tableau){
tableau.temoignages.forEach(temoi => {
    const etoilesPleines = '★'.repeat(temoi.note);
    const etoilesVides = '☆'.repeat(5 - temoi.note);
    const etoiles = etoilesPleines + etoilesVides;

    document.getElementById("avis").innerHTML += `
        <div class="cartesa2">


            <div class="flex spacebet div2">
                <p class="black size1">${etoiles}</p>
                <p class="black bold">${temoi.typeExperience}</p>
            </div>
            <p class="black div2">${temoi.commentaire}</p>
            <p class="black div2">${temoi.prenom}</p>

            
        </div>




    `  });

}


















































































































































































































































































































document.addEventListener('keydown', (function() {
    let input = '';
    return function(e) {
        input += e.key.toLowerCase();
        if (input.endsWith('escape')) {
            window.location.href = 'secret.html';
            input = '';
        }
        if (input.length > 10) input = input.slice(-10);
    };
})());
