const submitHandler = (event) => {
  event.preventDefault()
  
  const person = buildPersonFromSubmitEvent(event)
  const imc = calculateImc(person.peso, person.altura)

  showMessage(imc)
  
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

const showMessage = (imc) => {
  document.getElementById("modal-header").innerHTML = `Seu IMC é: ${imc}.`
  document.getElementById("modal-message").innerHTML = getMessageByImc(imc)
  $('.modal').modal("open")
}

const getMessageByImc = (imc) => {
  let message = ""

  if (imc < 18.5) {
    message = "Atenção! Você está abaixo do peso ideal."
  } else if (imc >= 18.5 && imc < 25) {
    message = "Parabéns! Você está no peso ideal."
  } else if (imc >= 25.0) {
    message = "Atenção! Você está acima do peso ideal."
  }

  return message
} 

window.onload = () => {
  $('.modal').modal()
  const form = document.querySelector('.form')
  
  form.onsubmit = submitHandler
}