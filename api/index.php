<?php
session_name('shopping_cart_demo_session');
session_start();
include "config/config.php";

$productListController = new ProductsController();
$productListController->route();
