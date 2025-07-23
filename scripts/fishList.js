import { database } from './aquariumData.js';

// export const fishList = () => {
//     // Generate an HTML representation of each fish
//     return database.fish.map(fish => 
//         `<div class="fishCard">
//             <h3>Meet ${fish.name}!</h3>
//             <p>Species: ${fish.species}</p>
//             <p>Diet: ${fish.diet}</p>
//             <p>Location: ${fish.location}</p>
//             <img src= "${fish.image}" alt="${fish.name} image" class="fish__image">
//         </div>`
//     ).join("");
// };



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const fish of database.fish) {
        if (fish.length % 3 === 0){
            holyFish += `<div class="fishCard">
                <h3>Meet ${fish.name}!</h3>
                <p>Species: ${fish.species}</p>
                <p>Diet: ${fish.diet}</p>
                <p>Location: ${fish.location}</p>
                <img src= "${fish.image}" alt="${fish.name} image" class="fish__image">
        </div>`
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
     let soldierFish = ""

    for (const fish of database.fish) {
        if (fish.length % 5 === 0 && fish.length %3 != 0){
            soldierFish += `<div class="fishCard">
                <h3>Meet ${fish.name}!</h3>
                <p>Species: ${fish.species}</p>
                <p>Diet: ${fish.diet}</p>
                <p>Location: ${fish.location}</p>
                <img src= "${fish.image}" alt="${fish.name} image" class="fish__image">
        </div>`
            }
        }

    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
     let regularFish = ""

    for (const fish of database.fish) {
        if (fish.length % 3 != 0 && fish.length % 5 != 0){
        regularFish += `<div class="fishCard">
                <h3>Meet ${fish.name}!</h3>
                <p>Species: ${fish.species}</p>
                <p>Diet: ${fish.diet}</p>
                <p>Location: ${fish.location}</p>
                <img src= "${fish.image}" alt="${fish.name} image" class="fish__image">
        </div>`
        }
    }

    return regularFish
}