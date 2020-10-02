<?php

include 'View/HomeView.php';

class HomeController extends Controller{
    public function __construct(){
        $this->view = new HomeView();
    }
    public function indexAction(){
        $this->view->home();
    }
    public function gameAction(){
        $this->view->game();
    }

}