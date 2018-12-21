<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if(!isset($_SESSION)){
    session_start();
}
?>
<script>
    localStorage.removeItem('authData');
</script>
<?php
session_unset();
session_destroy();
header("location:../login.php");
?>

