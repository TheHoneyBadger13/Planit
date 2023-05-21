//for importing the page-action file
const Cart = require('../page-actions/cart.js'); 
const Contact = require('../page-actions/contact.js'); 
const Shop = require('../page-actions/shop.js'); 
    
    describe('Planit Technical Assessment ', function() {
        const cart = new Cart();
        const contact = new Contact();
        const shop = new Shop();

        
            beforeEach(function() {
                cy.visit('http://jupiter.cloud.planittesting.com')
                //setup so that for each test, it will go to the signup page
            });

            //below is a test
            it('Test case 1', function(){ 
                contact.clickContact();
                contact.clickSubmit();
                contact.inputField('forename','John')
                contact.inputField('email','babayaga@gmail.com');
                contact.inputField('message','OK');
                contact.validateError();
            });

            it('Test case 2', function(){ 
                contact.clickContact();
                contact.inputField('forename','John')
                contact.inputField('surname','Wick')
                contact.inputField('email','babayaga@gmail.com')
                contact.inputField('telephone', '123456789')
                contact.inputField('message','OK')
                contact.clickSubmit();
                contact.validateFeedback();

            });

            it('Test case 3', function(){ 
                shop.clickShop();
                shop.buyStuffedFrog(2);
                shop.buyFluffyBunny(5);
                shop.buyValentineBear(3);
                cart.clickCart();
                cart.validatePrice();

            
            });

           
    })