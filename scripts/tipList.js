import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each tip
    let html = `<ul class="tips">`
    for (const tip of database.tips) {
        html += `
            <li class="tip">
                ${tip.topic}: ${tip.text}
            </li>
        `
    }
    html += `</ul>`
    return html
};