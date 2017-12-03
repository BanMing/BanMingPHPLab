<?php
class MsgStruct
{
    public $msg;
    public $user;
    function __construct($post){
        // var_dump($post);
        $this->msg =$post['msg'];
        $this->user=$post['user'];        
    }
}


?>