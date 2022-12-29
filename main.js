const form = document.getElementById('form');
const secondCard = document.getElementById('secondCard');
const btnSubmit = document.getElementById('submit');
const btnContinue = document.getElementById('buttonContinue');
const inputs = document.querySelectorAll('#form input');
const cardName = document.getElementById('label1');
const cardNumber = document.getElementById('label2');
const cardMonth = document.getElementById('label3');
const cardCvc = document.getElementById('label4');
const cardYear = document.getElementById('label5');


const users = JSON.parse(localStorage.getItem("user"))||[];

const expresions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    card: /\d{4}\s\d{4}\s\d{4}\s\d{4}/

}

const allRight = {
    cardName: false,
    cardNumber: false,
    month: false,
    year: false,
    cvc: false
}

const handleSubmit = () => {
    const newUser ={
        name        : cardName.value,
        cardNumber  : cardNumber.value,
        cardMonth   : cardMonth.value,
        cardYear    : cardYear.value,
        cardCvc     : cardCvc.value
    }
    
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));

    form.classList.add('hidden');
    secondCard.classList.remove('hidden');
    form.reset();

}
const validation = (e) => {
    switch (e.target.name) {
        case 'cardName':
            if (expresions.nombre.test(e.target.value)) {
                document.getElementById('label1').classList.remove('denegate');
                document.getElementById('label1').classList.add('success');
                document.getElementById('error1').classList.add('invisible')
                allRight['cardName'] = true;

            }
            else {
                document.getElementById('label1').classList.add('denegate');
                document.getElementById('error1').classList.remove('invisible')
                allRight['cardName'] = false;
            }

            break
        case 'cardNumber':
            if (expresions.card.test(e.target.value)) {
                document.getElementById('label2').classList.remove('denegate');
                document.getElementById('label2').classList.add('success');
                document.getElementById('error2').classList.add('invisible')

                allRight['cardNumber'] = true;

            }
            else {
                document.getElementById('label2').classList.add('denegate');
                document.getElementById('error2').classList.remove('invisible')
                allRight['cardNumber'] = false;
            }

            break
        case 'month':
            if (e.target.value.lenght != 0) {
                if (e.target.value >= 1 && e.target.value <= 12) {
                    document.getElementById('label3').classList.remove('denegate');
                    document.getElementById('label3').classList.add('success');
                    document.getElementById('error3').classList.add('invisible')
                    allRight['month'] = true;
                }
                else {
                    document.getElementById('label3').classList.add('denegate');
                    document.getElementById('error3').classList.remove('invisible')
                    allRight['month'] = false;
                }

            }
            break
        case 'year':
            if (e.target.value != 0) {
                if (e.target.value != 00) {
                    document.getElementById('label5').classList.remove('denegate');
                    document.getElementById('label5').classList.add('success');
                    document.getElementById('error4').classList.add('invisible')
                    allRight['year'] = true;
                }

            }
            else {
                document.getElementById('label5').classList.add('denegate');
                document.getElementById('error4').classList.remove('invisible')
                allRight['year'] = false;
            }

            break
        case 'cvc':
            if (e.target.value.length == 3 && e.target.value >= 1) {
                document.getElementById('label4').classList.remove('denegate');
                document.getElementById('label4').classList.add('success');
                document.getElementById('error5').classList.add('invisible')
                allRight['cvc'] = true;

            }
            else {
                document.getElementById('label4').classList.add('denegate');
                document.getElementById('error5').classList.remove('invisible')
                allRight['cvc'] = false;
            }

            break
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validation);
    // input.addEventListener('blur', validation);

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (allRight.cardName && allRight.cardNumber && allRight.month && allRight.year && allRight.cvc) {

        handleSubmit();
        form.reset();
        

    }

});

btnContinue.addEventListener('click', () => {
    form.classList.remove('hidden');
    secondCard.classList.add('hidden');
    document.getElementById('p1').innerHTML = 'JANE APPLESEED';
    document.getElementById('numberCard').innerHTML = '0000 0000 0000 0000';
    document.getElementById('month').innerHTML = '00';
    document.getElementById('year').innerHTML = '00';
    document.getElementById('key').innerHTML = '000';

    allRight['cardName', 'cardNumber'] = false;

    document.getElementById('label1').classList.remove('success')
    document.getElementById('label2').classList.remove('success')
    document.getElementById('label3').classList.remove('success')
    document.getElementById('label4').classList.remove('success')
    document.getElementById('label5').classList.remove('success')

})

function mostrar(valor) {
    document.getElementById('p1').innerHTML = valor;

}
function mostrarNumberCard(valor) {
    document.getElementById('numberCard').innerHTML = valor;
}
function mostrarMonth(valor) {
    document.getElementById('month').innerHTML = valor;
}

function mostrarYear(valor) {
    document.getElementById('year').innerHTML = valor;
}

function mostrarCVC(valor) {
    document.getElementById('key').innerHTML = valor;
}
cardMonth.addEventListener('input', (e) => {
    label3.value = e.target.value.slice(0, 2);
})
cardYear.addEventListener('input', (e) => {
    label5.value = e.target.value.slice(0, 2);
})
cardCvc.addEventListener('input', (e) => {
    label4.value = e.target.value.slice(0, 3);
})






