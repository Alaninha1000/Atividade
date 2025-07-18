//obter objeto do formulario do usuario
const userForm = document.getElementById("user-form");

//obter os campos de entrada de formulario
const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");

//Obter o corpo da tabela onde os os usuarios serao listados
const tableBody= document.getElementById("user-list-body")

//Adicionar Listener para o evento  de envio do formulário
userForm.addEventListener("submit", function (event){

    //Desativa o funcionamento padrão do formulário
    event.preventDefault();

    //recupera o valor do name e retira os espaços em brancos
    const name= nameInput.value.trim();
    const email= emailInput.value.trim();

    if (name=== "" || email === ""){
        alert("Por favor, preencha todos os campos.")
        return;
    }

    const newUser = document.createElement("tr");
    newUser.innerHTML=`
        <td> ${name}</td>
        <td> ${email}</td>
        <td>
            <button class="delete-btn">Excluir</button>
        </td>
    `

    tableBody.appendChild(newUser)

})


