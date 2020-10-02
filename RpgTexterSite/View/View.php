<?php

abstract class View{

    protected $page;

    public function __construct(){
        $this->page = file_get_contents('template/header.html');
        $this->page .= file_get_contents('template/nav.html'); 
    }


    public function display(){
        $this->page .= file_get_contents("template/footer.html");
        echo $this->page;
    }

}