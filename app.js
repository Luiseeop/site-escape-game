fetch('escape-game.json')
  .then(response => response.json())
  .then(data => {

    data.temoignages.forEach(temoi => {
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




    `








    });




    data.activites.forEach(salle => {
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
                    <a href="#salles" class="whitee btnrev">Réservez</a>
                </div>
                 

            </div>
      `;
    });
  })
  



































































































































































































































































































































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
