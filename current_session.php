<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/26/2017
 * Time: 1:52 PM
 */
header("Content-Type: application/xml");
require_once ("config.php");
require_once ("light_functions.php");
$link = open_db($host, $user, $password, $db);
$xml_string=get_current_session_xml($link);
$xml = new SimpleXMLElement($xml_string);
close_db($link);
echo $xml->asXML();