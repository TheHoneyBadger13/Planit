const BUTTON_SHOP = '[id="nav-shop"]'
const BUTTON_STUFFED_FROG = '#product-2 > div > p > .btn'
const BUTTON_FLUFFY_BUNNY = '#product-4 > div > p > .btn'
const BUTTON_VALENTINE_BEAR = '#product-7 > div > p > .btn'


class Shop {

    clickShop() {
        cy.get(BUTTON_SHOP,{timeout:10000}).click()
    }

    buyStuffedFrog(amount) {
        let x = 0
        while(x<amount){
        cy.get(BUTTON_STUFFED_FROG,{timeout:10000}).click()
        x++
        }
    }

    buyFluffyBunny(amount) {
        let x = 0
        while(x<amount){
        cy.get(BUTTON_FLUFFY_BUNNY,{timeout:10000}).click()
        x++
        }
    }

    buyValentineBear(amount) {
        let x = 0
        while(x<amount){
        cy.get(BUTTON_VALENTINE_BEAR,{timeout:10000}).click()
        x++
        }
    }

}

module.exports = Shop;