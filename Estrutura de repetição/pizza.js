var fatiaPizza = 8

function comerPizza() {
    console.log(`Número de fatias ${fatiaPizza}`)
    if (fatiaPizza == 0) {
        console.log('Não há pizzas. :(')
    } else {
        for (fatiaPizza; fatiaPizza > 0; fatiaPizza = fatiaPizza - 1) {
            console.log(`Você comeu uma fatia!`)
            console.log(`Quantidade de fatias restantes: ${fatiaPizza}`)
        }
    }
}
comerPizza()