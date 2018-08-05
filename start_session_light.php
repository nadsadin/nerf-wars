<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/12/2017
 * Time: 2:23 PM
 */
require_once ("config.php");
require_once ("light_functions.php");
//db variant
$link = open_db($host, $user, $password, $db);
if(update_current_session(array("start_time"=>time(),"session_duration"=>$_GET['session_type'],"scenario"=>$_GET['bscenario'],"team_red_name"=>$_GET['red'],"team_blue_name"=>$_GET['blue']),$link))echo 'true';
else echo 'false';
close_db($link);
//file variant
$xml_file = simplexml_load_file('xml/current_session.xml');
$xml_file->start_time[0] = time();
$xml_file->session_duration[0] = $_GET['session_type'];
$xml_file->scenario[0] = $_GET['bscenario'];
$xml_file->team_red_name[0] = $_GET['red'];
$xml_file->team_blue_name[0] = $_GET['blue'];
$xml_file->team_red_score[0] = 0;
$xml_file->team_blue_score[0] = 0;
$xml_file->asXML('xml/current_session.xml');