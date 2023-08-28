function formatCurrency (number, currency) {
    return number.toLocaleString('pt-br', {
        style: 'currency',
        currency
    })
}

export default formatCurrency