import { database } from './aquariumData.js';


export const locationList = () => {
    // Generate an HTML representation of each location
    let html = `<article class="locations">`;

    for (const location of database.locations) {
        html += `
            <section class="location">
                <h3>${location.name}</h3>
                <p>Country: ${location.country}</p>
                <p>${location.description}</p>
            </section>
        `
    }
    html += `</article>`
    return html
};