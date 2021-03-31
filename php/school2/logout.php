<?php
session_start();
unset($_SESSION['user_id']);//delete the session.
header("location:index.php?error_message=logout successful.");
?>