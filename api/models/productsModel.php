<?php


class productsModel
{

    private $dbGateway;

    public function __construct()
    {
        $this->dbGateway = new pdoDBGateway();
    }

    public function listProductsByTypeId($productTypeId)
    {
        $query = "SELECT t.name AS productTypeName, p.name AS productName, p.id AS productId
            FROM product_types t
            JOIN products p ON t.id = p.id_product_types
            WHERE t.id = {$productTypeId};";
        $products = $this->dbGateway->query($query);

        return $products;
    }

}
