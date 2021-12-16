class productView {

productAjax() {
    $("#product-type").change(() => {
        let id = $("#product-type").val();
        $.ajax({
            url: 'api/index.php',
            method: 'get',
            data: {action: "listProductsByTypeId", typeId: id}
        })
            .fail(() => {
                $('#products').empty();
            })
            .then((response) => {
                $('#products').empty();
                this.fillDropDownProducts(response);
             })
        })
}
fillDropDownProducts(response){
    for (let i in response) {
        $('#products').append($('<option class="products-list">' + response[i].productName + '</option>')
        );}
    response.forEach((element, index) => {
        $('.products-list')[index].value = element.productId;
    });
    }
}