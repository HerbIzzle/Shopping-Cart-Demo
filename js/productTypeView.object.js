class productTypeView {

constructor() {
    let productList = new productView();
    productList.productAjax();
}

loadProductsInit(){
    $.ajax({
        url: 'api/index.php',
        type: 'get',
        data: {action: "listTypes"}
        })
        .fail((errorData) => {console.log(errorData);})
        .then((response) => { this.fillDropBox(response);})
}

fillDropBox(response){
    for (let i in response) {
    $('#product-type').append($('<option class="product-type-list">' + response[i].name + '</option>'));
    }
    response.forEach((element, index) => {
        $('.product-type-list')[index].value = element.id;
    });
}


}