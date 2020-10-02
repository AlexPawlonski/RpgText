<?php
include 'View/View.php';
include 'Controller/Controller.php';

include 'Controller/HomeController.php';

class Dispatcher{

    public function dispatch(){
            
        $controller = $_GET['controller']??'home';
        $controller = ucfirst($controller) . 'Controller';        
        $action = $_GET['action']??'index';
        
        $action .= "Action";

        //condition pour forcer la classe et la méthode si mauvaise saisie comme URL
        if(!class_exists($controller) || !method_exists($controller, $action)){
            $controller = 'homeController';
            $action = 'homeAction';
        }

        $my_controller = new $controller();
        $my_controller->$action();
    }        

}