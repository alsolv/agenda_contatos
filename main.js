const form = document.getElementById("form-atividade");
const nomes = [];
const telefone = [];

linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinha();
    atualizarTabela();
});

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

function adicionarLinha(){
    const imputNomeContato = document.getElementById('nome-contato');
    const imputNumberContato = document.getElementById('number-contato');
    
if (telefone.includes(imputNumberContato.value)){
    alert(`O Número: ${imputNumberContato.value} já existe na sua lista de contatos`);
} else {
    nomes.push(imputNomeContato.value);
    telefone.push(imputNumberContato.value);

    let linha = '<tr>';
    linha += `<td>${imputNomeContato.value}</td> `;
    linha += `<td>${imputNumberContato.value}</td> `;
    linha += `</tr>`;

    linhas += linha;
}
    imputNomeContato.value = "";
    imputNumberContato.value ="";
}

function atualizarTabela(){
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas

}


