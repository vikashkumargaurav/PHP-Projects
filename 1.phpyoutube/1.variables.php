<!-- <h1>hello</h1>    Valid  -->

<?php

    /*Printing*/

//    print ' Hello World ' ;   // valid it returns 1

    echo "<h3> Hello World  </h3>" ;

    /*variables

        - prefix $
        - Starts with letter or _
        - Only letters, numbers and underscore
        - Case Sensitive
    */
    $var1 = 'Hello';
    echo $var1 ;


    /*Data Types

        String
        Integers
        Floats
        Booleans
        Arrays
        Objects
        NULL
        Resource
    */

    $num1 = 20;
    $float1 = 25.6;
    $hasAccess = false;
    $m1 = 'Hello'; $m2 = 'World' ;

    echo '<br>'. $num1 ;  // Concatenation  Operator ( . )
    echo $hasAccess ;
    echo '<br>'.$float1 ;
    echo '<br>';

    echo $m1. ' '. $m2 . '!';  // Hello World!  (Method 1)
    echo " <br>  $m1 $m2!" ;  //   Use " " instead of ' ' to concatenate. " " parses the value inside it.  (Method 2)

    $statement = 'You shouldn\'t go there..' ; // Escape character \
    echo  '<br>' .  $statement;


    /*Constants
     You cannot change the constants.They are final;
    */
    define("MYDBNAME", "THISISACONSTANT", true); // true is case-insensitive optional
    echo '<br>'. MYDBNAME;
    echo "<br>".  mydbname; // lowercase valid

//    define("MYDBNAME", "THISISACONSTANT1");  // error constant already defined
//    echo MYDBNAME;







?>