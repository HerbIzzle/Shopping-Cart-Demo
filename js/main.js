/*
 *  For configuration add DbName in api/config.php
 *
 */

$(document).ready(()=> {
    let productTypeHandler = new productTypeView();
    productTypeHandler.loadProductsInit();
})


    let shopping = new shoppingCartView();
    shopping.shoppingCartInit();
