<?php
/**
 * Created by PhpStorm.
 * User: Vikash
 * Date: 11/25/2018
 * Time: 11:38 PM
 */

    /*Functions

    Camel Case -  myFunction()
    Lower Case -  my_function()
    Pascal Case -  MyFunction()   usually used to denote classes in object oriented programming

    */

  // create simple function

    function fun1(){
        echo ('<br>');
        echo "This is a simple function...";
    }
    fun1();
    echo ('<br>');


    // Function with parameters

    function fun2($name){
        echo ('<br>');
        echo "My name is $name .";
    }
    fun2("Ghost Rider.");


    // Function with default parameters value

    function fun3($name = "World"){
        echo ('<br>');
        echo "Hello $name .";
    }
    fun3("Ghost Rider."); // Hello Ghost Rider
    fun3(); // Hello World

    // Function with return

    function addNum($num1, $num2){

        echo ('<br>');
        return "SUM : ". ($num1 + $num2) ;
    }

    echo addNum(10, 20);


    // By Reference

    $value = 100;

    function noRef($num){
        $num+= 10;
    }

    noRef($value);
    echo "<br> $value"; // $value = 100 (no change)
//
    function callByRef(&$num){   // & represents reference sign which means it will perform operations on its respective refrence value
        $num+= 10;
    }

    callByRef($value);
    echo "<br> New value : $value"; // $value = 110 (changed)

    callByRef($value);
    echo "<br> New Value : $value"; // $value = 120 (changed)



?>