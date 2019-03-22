const submitHandler = (event) => {
  event.preventDefault()
  
  const person = buildPersonFromSubmitEvent(event)
  const imc = calculateImc(person.peso, person.altura)

  showMessage(`Seu IMC é: ${imc}.`)
  
}

const buildPersonFromSubmitEvent = (event) => {
  const person = {
    peso: event.target[0].value,
    altura: event.target[1].value,
    sexo: event.target[2].value,
  }

  return person
}

const calculateImc = (peso, altura) => {
  return Math.floor(peso / Math.pow((altura / 100), 2))
}

const showMessage = (message) => {
  alert(message)
}

window.onload = () => {
  const form = document.querySelector('.form')
  
  form.onsubmit = submitHandler
}