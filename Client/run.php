<?php

    if(!isset($_SESSION)) {
        session_start();
    }

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    //directorio del proyecto
    define("PROJECTPATH", dirname(__DIR__));
    //echo PROJECTPATH;  ==> C:\xampp\htdocs\mvc

    //directorio app
    define("APPPATH", PROJECTPATH . '/App');
    //echo APPPATH;  C:\xampp\htdocs\mvc\App

    require __DIR__ . '/../vendor/autoload.php';

    //instancia de la app
    $app = new \Core\App;

    //lanzamos la app
    $app->render();