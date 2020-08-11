// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os canpos: Que campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada canto, Limpar
    fields.forEach(function (field) {
        // Pega o field do momentoe limpa ele
        field.value = ""
    })



    // Colocar na pagina: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
