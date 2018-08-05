<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/5/2017
 * Time: 5:39 PM
 */
require_once ('config.php');
require_once ('functions.php');
/*$link = open_db($host, $user, $password, $db);
$sid = new_session($link);
if(!$sid)echo "Check Session";
$test = "test";
$team['red'] = new_team($link, $sid, "red", NULL);
$team['blue'] = new_team($link, $sid, "blue", NULL);
$team['all'] = new_team($link, $sid, "all", NULL);
update_prepare_game($link,"session_id",$sid);
update_prepare_game($link,"status","0");
update_prepare_game($link,"red_team_id",$team['red']);
update_prepare_game($link,"blue_team_id",$team['blue']);
update_prepare_game($link,"all_team_id",$team['all']);
close_db($link);*/
$xml_file = simplexml_load_file('xml/prepare.xml');
$xml_file->start_time[0]=time();
$xml_file->team[0]->red[0]=$team['red'];
$xml_file->team[0]->blue[0]=$team['blue'];
$xml_file->team[0]->all[0]=$team['all'];
$xml_file->status[0]="open";
$xml_file->asXML('xml/prepare.xml');
$xml_team = '<team><red>'.$team['red'].'</red><blue>'.$team['blue'].'</blue><all>'.$team['all'].'</all></team>';
$xml_session = '<session><id>'.$sid.'</id><show_id>'.date("m-d-Y H:i",$sid).'</show_id></session>';

echo $xml_session;