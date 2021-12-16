<?php

include "controller/ProductsController.php";
include "services/Database.php";
include "models/pdoDBGateway.php";
include "models/productTypesModel.php";
include "models/productsModel.php";
include "views/JsonView.php";
include "models/cartModel.php";

define("DBHost", "localhost");
define("DBName", "");
define("DBPassword", "");
define("DBUsername", "root");
