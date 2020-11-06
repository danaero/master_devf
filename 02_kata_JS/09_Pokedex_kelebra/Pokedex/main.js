// Variable que llamarán el id del div container
var divMainContainer = document.getElementById("pokeContainer");

for (var i = 0; i < pokemons.length; i++) {

    for (var i = 0; i < pokemons.length; i += 4) {

        divMainContainer.innerHTML += `<div class="row d-lg-flex justify-content-md-around" id="rowId${i}">`;
        var rowId = document.getElementById("rowId" + i);


        for (var k = 0; k < 4; k++) {


            rowId.innerHTML += `<div class="col mb-4 md-3 lg-2">
                                        <div class="card my-card">
                                        <div class="img-div">
                                            <img src="${pokemons[k + i].image_url}" class="card-img-top my-img" alt="pokemon">
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title my-pokemonId">ID: ${pokemons[k + i].pkdx_id}</h5>
                                                <h6 class="card-text my-pokemonName">Nombre: ${pokemons[k + i].name}</h6>
                                                <p class="card-text my-pokemonType">Tipo: ${pokemons[k + i].types}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    `;

        }
    }
}