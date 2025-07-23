import {mostHolyFish, regularFish, soldierFish } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// // Generate the fish list
// const fishHTML = fishList()

//Generate holy fish list 
const holyHTML = mostHolyFish()

//Generate soldier fish list 
const soldierHTML = soldierFish()

//Generate regular fish list 
const regularHTML = regularFish()

 // Generate the care tips
const tipHTML = tipList()

// // Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element


let fishContainer = document.querySelector("#fishList")
fishContainer.innerHTML += `${holyHTML} ${soldierHTML} ${regularHTML}`

let tipContainer = document.querySelector("#tipList")
tipContainer.innerHTML += tipHTML

let locationContainer = document.querySelector("#locationList")
locationContainer.innerHTML += locationHTML

