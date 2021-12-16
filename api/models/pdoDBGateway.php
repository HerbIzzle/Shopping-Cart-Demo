<?php


class pdoDBGateway extends Database
{

    public function __construct()
    {
        parent::__construct(DBHost, DBName, DBUsername, DBPassword);
    }
}
