<?php
class HomeView extends View{
    public function home(){
        $this->page .= file_get_contents('template/mainHome.html');
        $this->page = str_replace("{title}","RpgTexter",$this->page);
        $this->page = str_replace("{titreSite}","RpgTexter",$this->page);
        $this->page = str_replace("{titrepower}","POWERED By ",$this->page);
        $this->page = str_replace("{src}","img/logoreact.png",$this->page);
        $this->display();
    }

    public function game(){
        $this->page .= file_get_contents('template/appliReact.html');
        $this->page = str_replace("{title}","RpgTexter",$this->page);
        $this->page = str_replace("{titreSite}","RpgTexter",$this->page);
        
        $this->display();
    }

}