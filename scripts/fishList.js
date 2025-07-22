import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    return database.fish.map(fish => 
        `<div class="fish">
            <h3>Meet ${fish.name}!</h3>
            <p>Species: ${fish.species}</p>
            <p>Diet: ${fish.diet}</p>
            <p>Location: ${fish.location}</p>
            <img src= "${fish.image}" />
        </div>`
    ).join("");
};