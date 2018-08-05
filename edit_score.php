<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/12/2017
 * Time: 3:50 PM
 */
require_once('config.php');
require_once('light_functions.php');
$link = open_db($host,$user,$password,$db);
update_score($_GET['redflag'],$_GET['blueflag'],$link);
close_db($link);
$xml_file = simplexml_load_file('xml/current_session.xml');
$xml_file->team_red_score[0] = $_GET['redflag'];
$xml_file->team_blue_score[0] = $_GET['blueflag'];
$xml_file->asXML('xml/current_session.xml');
echo "true";