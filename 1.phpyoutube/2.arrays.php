<?php
/**
 * Created by PhpStorm.
 * User: Vikash
 * Date: 11/25/2018
 * Time: 10:31 PM
 */

/*Arrays
    1.Indexed
    2.Associated
    3.Multidimensional
*/

// Indexed Arrays

    $people = array("Ram", "Sohan", "Mohan"); //    ( Method 1 )       declaring and initializing an array
    $people1 = ["Ram", "Sohan", "Mohan"]; //        ( Method 2 )
    $nums1 = [10, 20, 30];
    $people1[3] = "ANU"; // append  ( Method 1 )
    $people1[] = "Priya"; // append ( Method 2 )

    echo count($people1) ."<br>" ; // length = 5;
    echo  print_r($people1) ."<br>"; // prints whole array
    var_dump($people1); // prints whole array with its respective data types, valid for any variables other than arrays


// Associated Arrays (Similar to HashMap  [ Array with key value pair ] )

    $cars = array('Toyata' => '20Lakhs', "Ferrari" => "1 crore", "Audi" => "50laks" );
    $id = [12 => "Raj", 10 => "Vikash", 20 => "Raushan"];
    echo '<br>';
    print_r ( $cars ) ;
    $id[] = [101 => "guru"]; // append
    echo '<br>';
    print_r($id);
    echo '<br>';
    var_dump($id);

// Multidimensional array

    $matrix = array(
        array('Honda', 10, 25),
        array('Toyota', 100, 255),
        array('Audi', 560, 95)
    );

    $matrix1 = [
        ['Raj', 'Ronka'],
        ['Sona', 'Chandi'],
        ['Diamond', 'Choe'],
    ];

    echo '<br>';
    echo $matrix[1][1];



?>