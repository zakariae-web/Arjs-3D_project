var pokemonModels = ["#planet1-model", "#planet2-model"];  // Ajouter d'autres modèles
        var currentModelIndex = 0;

        function changePokemon() {
            var pokemonEntity = document.getElementById('planet');

            currentModelIndex = (currentModelIndex + 1) % pokemonModels.length;
            var newModel = pokemonModels[currentModelIndex];
            pokemonEntity.setAttribute('gltf-model', newModel);

            pokemonEntity.setAttribute('position', '1 0 0');
            
        }