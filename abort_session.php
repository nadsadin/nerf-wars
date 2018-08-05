<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/12/2017
 * Time: 6:46 PM
 */
require_once ("config.php");
require_once ("light_functions.php");
$link = open_db($host, $user, $password, $db);
abort_session($link);
close_db($link);
$xml_file = simplexml_load_file('xml/current_session.xml');
$xml_file->start_time[0] = 0;
$xml_file->asXML('xml/current_session.xml');
echo "true";