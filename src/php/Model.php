<?php

abstract class Model {

    protected $connexion;
    protected $requete;

    public function __construct(){
        define('SERVER' ,"localhost");
        define('USER' ,"root");
        define('PASSWORD',"");
        define('BASE' ,"rpgtexter");

        try {
                $this->connexion = new PDO
                ("mysql:host=" .
                SERVER . ";dbname=" .
                BASE, USER, PASSWORD);
                // Activation des erreurs PDO
                $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // mode de fetch par défaut : FETCH_ASSOC / FETCH_OBJ / FETCH_BOTH
                //$this->connexion->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (Exception $e) {
                die('Erreur:' . $e->getMessage());
        }
    }
}