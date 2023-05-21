const BUTTON_CART = '[id="nav-cart"]'
class Cart {

    clickCart() {
        cy.get(BUTTON_CART,{timeout:10000}).click()
    }

    validatePrice(){
        const productPriceMap = {
            'Fluffy Bunny' : 9.99,
            'Stuffed Frog' : 10.99,
            'Teddy Bear' : 12.99,
            'Handmade Doll' :  10.99,
            'Smiley Bear'  :   14.99,
            'Funny Cow'    :   10.99,
            'Valentine Bear'   : 14.99,
            'Smiley Face'  :   9.99 
          };
        let totalPrice = 0;
        cy.get('table.table.table-striped.cart-items tbody tr.cart-item').each((row) => {
            cy.wrap(row).find('td').eq(0).invoke('text').then((productName) => {
                productName = productName.trim();
                const productPrice = parseFloat(productPriceMap[productName]);
                cy.log(`Product: ${productName}, Price: ${productPrice}`);
                // Used to get the price listed on the cart page and compare it to the priceMap created
                cy.get(row).find('td').eq(1).invoke('text').then((priceCellText) => {
                    const price = parseFloat(priceCellText.trim().substring(1));
                    expect(price).to.equal(productPrice);
                    cy.log(`Product: ${price}, Price: ${productPrice}`);
                    cy.get(row).find('td').eq(2).find('input').invoke('val').then((quantityInputValue) => {
                        cy.log(quantityInputValue)
                        const quantity = parseFloat(quantityInputValue);
                        cy.get(row).find('td').eq(3).invoke('text').then((subTotalCellText) => {
                            const subTotal = parseFloat(subTotalCellText.trim().substring(1));
                            const expectedSubTotal = price * quantity
                            expect(subTotal).to.equal(expectedSubTotal);
                            totalPrice = totalPrice + subTotal
                            cy.log(`TotalPrice: ${totalPrice}`)
                            });
                        });
                });
            });
        });
        cy.get('.total')
                .invoke('text')
                .then((text) => {
                    const numericValue = parseFloat(text.replace(/[^\d.]/g, ''));
                    console.log(numericValue);
                    expect(numericValue).to.equal(totalPrice);
                });
    }

}

module.exports = Cart;