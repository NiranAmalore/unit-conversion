const lengthElement = document.getElementById("length-el")
const volumeElement = document.getElementById("volume-el")
const massElement = document.getElementById("mass-el")

const convertBtn = document.getElementById("convert")
let input = document.getElementById("input-el")


convertBtn.addEventListener('click', function(){
     lengthElement.innerHTML = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(3)} meters`
     volumeElement.innerHTML = `${input.value} liters = ${(input.value * 0.264).toFixed(3)} gallons | ${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liters`
     massElement.innerHTML = `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kilos`
})

