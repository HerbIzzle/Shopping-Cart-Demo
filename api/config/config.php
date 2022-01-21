<?php

include "controller/ProductsController.php";
include "services/Database.php";
include "models/pdoDBGateway.php";
include "models/productTypesModel.php";
include "models/productsModel.php";
include "views/JsonView.php";
include "models/cartModel.php";

$cleardb_url = parse_url(getenv("CLEAR_DATABASE_URL"));
define("DBHost", $cleardb_url["host"]);
define("DBName", $cleardb_url["path"]);
define("DBPassword", $cleardb_url["pass"]);
define("DBUsername", $cleardb_url["user"]);
