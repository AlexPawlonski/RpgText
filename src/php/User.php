<?php
include 'Model.php';
class User extends Model{
    
    public function addUser($name, $save){
        (isset($_GET[''])
        try {
            $this->requete = $this->connexion->prepare("INSERT INTO user VALUES(NULL, :nameP, :saveP)");
            
            $this->requete->bindParam(':nameP', $name);
            $this->requete->bindParam(':saveP', $save);
            $result = $this->requete->execute();
            if($result){
                $response = "succes"; 
            }else{
                $response = "failed";
            }
            return $response;
        } catch (Exception $e) {
            die('Erreur:' . $e->getMessage());
        }
    }
    
    public function getSave($name){
        try {
            $this->requete = "SELECT * FROM user WHERE nameP = $name";
            $result = $this->connexion->query($this->requete);
            $list = array();

            if($result){
                $list = $result->fetchAll(PDO::FETCH_ASSOC);
            }
            return $list;
        } catch (Exception $e) {
            die('Erreur:' . $e->getMessage());
        }
    }
    
}