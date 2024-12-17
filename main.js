const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_14.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_14[currentQuestionIndex].question
    questions_page_14[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_14.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_14 = [
    {
        question: 'Qual tamanho de saco para montagem é o correto?',
        answer: [
            { text: 'Saco A: 4 a 6 itens.', correct: false },
            { text: 'Saco B: 1 a 3 itens.', correct: false },
            { text: 'Saco A: 1 a 3 itens.', correct: true },
            { text: 'Saco C: 3 a 5 itens.', correct: false },
        ]
    },
    {
        question: 'Qual tempo de vida secundário da cebola reidratada?',
        answer: [
            { text: '12 horas, incluindo 1 hora de reidratação.', correct: false },
            { text: '24 horas, incluindo 1 hora de reidratação.', correct: true },
            { text: '24 horas, sem tempo de reidratação.', correct: false },
            { text: '12 horas, sem tempo de reidratação.', correct: false },
        ]
    },
    {
        question: 'Qual tempo de vida secundário das tortas?',
        answer: [
            { text: '240 minutos.', correct: true },
            { text: '120 minutos.', correct: false },
            { text: '200 minutos.', correct: false },
            { text: '300 minutos.', correct: false },
        ]
    },
    {
        question: 'Quando devemos peneirar o óleo?',
        answer: [
            { text: 'A cada 20 minutos.', correct: false },
            { text: 'Quando o óleo estiver quente.', correct: false },
            { text: 'A cada 30 minutos e quando o óleo tiver muitos resíduos.', correct: true },
            { text: 'Somente no final do turno.', correct: false },
        ]
    },
    {
        question: 'Quando devo trocar o saco de uma lixeira?',
        answer: [
            { text: 'Quando estiver 3/4 cheias depois de compactadas.', correct: true },
            { text: 'Quando estiver metade cheia.', correct: false },
            { text: 'Quando estiver cheia até o topo.', correct: false },
            { text: 'Somente no final do dia.', correct: false },
        ]
    },
    {
        question: 'Quando falamos de modificar pedido, qual é a alternativa incorreta?',
        answer: [
            { text: 'O cliente não pode alterar seu pedido no último minuto.', correct: true },
            { text: 'O cliente pode solicitar alterações no pedido.', correct: false },
            { text: 'As modificações devem ser registradas corretamente.', correct: false },
            { text: 'Respeitamos as preferências do cliente.', correct: false },
        ]
    },
    {
        question: 'Quando houver reclamações o que NÃO deve ser feito?',
        answer: [
            { text: 'Não apresentar hospitalidade e não dar atenção ao cliente.', correct: true },
            { text: 'Escutar o cliente com atenção.', correct: false },
            { text: 'Resolver o problema imediatamente.', correct: false },
            { text: 'Acompanhar o cliente até a solução.', correct: false },
        ]
    },
    {
        question: 'Quantas carnes de 4:1 podemos ativar de uma só vez na chapa, seguindo o Made For You?',
        answer: [
            { text: 'Podemos ativar 4 carnes.', correct: false },
            { text: 'Podemos ativar 6 carnes.', correct: true },
            { text: 'Podemos ativar 8 carnes.', correct: false },
            { text: 'Podemos ativar 10 carnes.', correct: false },
        ]
    },
    {
        question: 'Quantas voltas usamos na casquinha sem encher o cone?',
        answer: [
            { text: '4 voltas incluindo a ponta da casquinha.', correct: false },
            { text: '2 voltas incluindo a ponta da casquinha.', correct: false },
            { text: '3 voltas incluindo a ponta da casquinha.', correct: true },
            { text: '5 voltas incluindo a ponta da casquinha.', correct: false },
        ]
    },
    {
        question: 'Quantos itens usamos no saco B?',
        answer: [
            { text: 'Saco B - 1 a 3 itens.', correct: false },
            { text: 'Saco B - 4 a 6 itens.', correct: true },
            { text: 'Saco B - 6 a 8 itens.', correct: false },
            { text: 'Saco B - 3 a 5 itens.', correct: false },
        ]
    },
    {
        question: 'Quem é o responsável por realizar o Checklist diário de carnes?',
        answer: [
            { text: 'O funcionário da cozinha.', correct: false },
            { text: 'O Gerente de Plantão.', correct: true },
            { text: 'O responsável pelo turno anterior.', correct: false },
            { text: 'Todos os funcionários.', correct: false },
        ]
    },
    {
        question: 'Quem é responsável por manter o restaurante limpo?',
        answer: [
            { text: 'Manter um restaurante limpo é responsabilidade de todos.', correct: true },
            { text: 'A equipe de limpeza.', correct: false },
            { text: 'A gerência.', correct: false },
            { text: 'O atendente de balcão.', correct: false },
        ]
    },
    {
        question: 'Se o alimento passou da data de validade ele pode ser servido?',
        answer: [
            { text: 'VERDADEIRO.', correct: false },
            { text: 'FALSO.', correct: true },
        ]
    },
    {
        question: 'Selecione a afirmação correta:',
        answer: [
            { text: 'Sirva alimentos mesmo fora do padrão.', correct: false },
            { text: 'Sirva somente o alimento que foi preparado da maneira correta.', correct: true },
            { text: 'Priorize a rapidez ao invés da qualidade.', correct: false },
            { text: 'Sirva qualquer produto em estoque.', correct: false },
        ]
    },
    {
        question: 'Sobre o Método de preparação, qual é a alternativa incorreta?',
        answer: [
            { text: 'Para pedidos feitos por celular, há um ícone especial na tela de pedido.', correct: true },
            { text: 'Pedidos balcão têm processos padrões.', correct: false },
            { text: 'Há padrões específicos para o NGK.', correct: false },
            { text: 'Os processos são baseados no Made For You.', correct: false },
        ]
    },
    {
        question: 'Todas as temperaturas internas dos produtos de frango devem estar a 74°C (165°F) ou mais depois de ser cozidos?',
        answer: [
            { text: 'VERDADEIRO.', correct: true },
            { text: 'FALSO.', correct: false },
        ]
    },
    {
        question: 'Um cliente está com a expressão preocupada olhando a nota, o que você faz?',
        answer: [
            { text: 'Ignoro a situação.', correct: false },
            { text: 'Pergunto apenas se ele quer algo mais.', correct: false },
            { text: 'Peço desculpas sem saber o motivo e ofereço um desconto.', correct: false },
            { text: 'Abordo o cliente, perguntando como está a refeição ou se posso ajudar em algo.', correct: true },
        ]
    },
    {
        question: 'Um grande grupo chega ao restaurante, como você conduz o serviço?',
        answer: [
            { text: 'Deixa o grupo esperando até que todas as mesas sejam arrumadas.', correct: false },
            { text: 'Apenas direciona para o balcão e não oferece serviço à mesa.', correct: false },
            { text: 'Recepciona e direciona o grupo para mesas disponíveis e oferece serviço à mesa.', correct: true },
            { text: 'Não oferece atendimento prioritário ao grupo.', correct: false },
        ]
    },
    {
        question: 'Uma criança derruba refrigerante no salão, o que você faz?',
        answer: [
            { text: 'Prontamente repõe a bebida derramada e avisa a pessoa do salão para realizar a limpeza.', correct: true },
            { text: 'Ignora a situação e espera que a criança se vire.', correct: false },
            { text: 'Deixa para repor a bebida depois que a limpeza for feita.', correct: false },
            { text: 'Repreende a criança pela ação.', correct: false },
        ]
    },
];
