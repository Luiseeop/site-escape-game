fetch('escape-game.json')
  .then(response => response.json())
  .then(data => {

    data.temoignages.forEach(temoi => {
        document.getElementById("avis").innerHTML += `
        
        <div class="cartesa2">
                <div class="flex spacebet div2">
                    <p class="black">${temoi.note}/5</p>
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
                <div>
                    <p class="black div2 bold">${salle.nom}</p>
                    <p class="black div2">${salle.description}</p>
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
