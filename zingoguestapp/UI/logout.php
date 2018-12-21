<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 18-Sep-18
 * Time: 5:45 PM
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
header("location:../login.html");
?>


