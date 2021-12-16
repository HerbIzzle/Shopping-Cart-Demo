class shoppingCartView {

    shoppingCartInit() {
        let self = this;
        self.shoppingCartAjax();
        self.dynamicAddButtonAjax();
        self.dynamicRemoveButtonAjax();
    }

    shoppingCartAjax() {

        let self = this;

        $('.button').on('click', function() {

            let action = (this.id);
            let params = {};

            switch (action) {
                case 'add_article' || 'increment_button':
                    params.action = 'addarticle';
                    params.articleId = $("#products").val();
                    break;
                case 'remove_article' || 'decrement_button':
                    params.action = 'removearticle';
                    params.articleId = $("#products").val();
                    break;
            }
            $.ajax({
                url: 'api/index.php',
                type: 'get',
                data: params
            })
                .fail((errorData) => {
                    console.log(errorData);
                })
                .then((response) => {
                    console.log(response);
                    self.updateCartView();
                })
        })
    }

    updateCartView() {
        $.ajax({
            url: 'api/index.php',
            type: 'get',
            data: {
                action: "listcart"
            }
        })
            .fail((errorData) => {
                console.log(errorData);
            })
            .then((response) => {

                $('#category-table').find('tbody').empty();

                for (let i in response.cart) {

                    let productType = response.cart[i];
                    let $tr = $('<tr></tr>');

                    $tr.append("<td>" + productType.articleName + "</td>");
                    $tr.append("<td>" + this.MathRoundHelper(productType.price * productType.amount) + "€</td>");
                    $tr.append("<td>" + productType.amount + "</td>");
                    $tr.append('<td>' + '<button class="removearticle">-</button>' + '</td>');
                    $tr.append('<td>' + '<button class="addarticle">+</button>' + '</td>');

                    $('#category-table').find('tbody').append($tr);
                }

                response.cart.forEach((element, index) => {
                    $('.removearticle')[index].value = element.id;
                    $('.addarticle')[index].value = element.id;
                });

                this.showTotal(response);
            })
    }

    dynamicRemoveButtonAjax() {

        let self = this;

        $(document).on('click', '.addarticle', function() {

            let params = {};
            params.action = 'addarticle';
            params.articleId = (this.value);

            $.ajax({
                url: 'api/index.php',
                type: 'get',
                data: params
            })
                .fail((errorData) => {
                    console.log(errorData);
                })
                .then((response) => {
                    console.log(response);
                    self.updateCartView();
                })
        })
    }

    dynamicAddButtonAjax() {
        let self = this;

        $(document).on('click', '.removearticle', function() {

            let params = {};
            params.action = 'removearticle';
            params.articleId = (this.value);

            $.ajax({
                url: 'api/index.php',
                type: 'get',
                data: params
            })
                .fail((errorData) => {
                    console.log(errorData);
                })
                .then((response) => {
                    console.log(response);
                    self.updateCartView();
                })
        })
    }

    showTotal(response) {

        let self = this;

        $('.total').empty();


        let result = [];

        $.each(response.cart, function(key, value) {
            result.push(self.MathRoundHelper(value.price * value.amount));
        });

        let sum = 0;

        for (let index = 0; index < result.length; index++) {
            sum += result[index];
        }

        $('.total').append('<ul class="total"> TOTAL : ' + self.MathRoundHelper(sum) + '€</ul>');
    }


    MathRoundHelper(num) {
        return Math.round(num * 100) / 100;
    }
}