<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 3/31/2017
 * Time: 2:20 PM
 */
require_once ('config.php');
function open_db($host, $user, $password, $db){
    $link = mysqli_connect($host, $user, $password, $db)
    or die("Error " . mysqli_error($link));
    return $link;
}
function close_db($link){
    mysqli_close($link);
}
function new_session($link){
    $reg_time = time();
    $query = "INSERT INTO session(id) VALUES ('".mysqli_real_escape_string($link,$reg_time)."')";
    if(mysqli_query($link,$query)){
        return $reg_time;
    }else return "Error " . mysqli_error($link);
}
function save_session($link, $sid, $session_type){
    $query = "UPDATE session SET sessiontype='".$session_type."' WHERE session.id='".$sid."'";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function get_session($link,$sid){
    $query = "SELECT * FROM session WHERE id='".mysqli_real_escape_string($link,$sid)."'";
    $result = mysqli_query($link,$query);
    if (mysqli_num_rows($result) > 0) {
        return mysqli_fetch_assoc($result);
    }else return false;
}
function start_session($link,$sid){
    $start_time = time();
    $query = "UPDATE session SET starttime='".$start_time."' WHERE session.id='".$sid."'";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function add_player($link,$card_id,$nickname){
    $query = "INSERT INTO player VALUES ('".mysqli_real_escape_string($link,$card_id)."','".mysqli_real_escape_string($link,$nickname)."')";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function get_player($link,$card_id){
    $query = "SELECT * FROM player WHERE card_id='".mysqli_real_escape_string($link,$card_id)."'";
    $result = mysqli_query($link,$query);
    if (mysqli_num_rows($result) > 0) {
        return mysqli_fetch_assoc($result);
    }else return false;
}
function new_team($link, $sid, $color){
    $query = "INSERT INTO team (session_id, color) VALUES ('".mysqli_real_escape_string($link,$sid)."','".mysqli_real_escape_string($link,$color)."')";
    if(mysqli_query($link,$query)){
        return mysqli_insert_id($link);
    }else return "Error " . mysqli_error($link);
}
function get_teams($link, $sid){
    $query = "SELECT id, color FROM team WHERE session_id = '".mysqli_real_escape_string($link,$sid)."'";
    $result = mysqli_query($link,$query);
    if (mysqli_num_rows($result) > 0) {
        $team_arr = array();
        $teams = mysqli_fetch_assoc($result);
        foreach($teams as $team){
            if ($team['color']=="red")$team_arr['red']=$team['id'];
            elseif ($team['color']=="blue")$team_arr['blue']=$team['id'];
            elseif ($team['color']=="all")$team_arr['all']=$team['id'];
        }
        return $team_arr;
    }else return false;
}
function player_to_team($link, $team_id, $card_id){
    $query = "INSERT INTO team_players (team_id,card_id) VALUES ('".mysqli_real_escape_string($link,$team_id)."','".mysqli_real_escape_string($link,$card_id)."')";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function get_team_player($link ,$sid, $team_id, $card_id){
    $query = "SELECT * FROM team WHERE id='".mysqli_real_escape_string($link,$team_id)."' AND card_id='".mysqli_real_escape_string($link,$card_id)."' AND session_id='".mysqli_real_escape_string($link,$sid)."'";
    $result = mysqli_query($link,$query);
    if (mysqli_num_rows($result) > 0) {
        return true;
    }else return false;
}
function new_game($link, $sid, $scenario_id){
    $query = "INSERT INTO game (session_id,scenario_id) VALUES ('".mysqli_real_escape_string($link,$sid)."','".mysqli_real_escape_string($link,$scenario_id)."')";
    if(mysqli_query($link,$query)){
        return mysqli_insert_id($link);
    }else return false;
}
function update_game_status($link, $field, $data){
    $query = "UPDATE game_status SET ".$field." = '".mysqli_real_escape_string($link,$data)."' WHERE id=1";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function update_prepare_game($link, $field, $data){
    $query = "UPDATE prepare_game SET ".$field." = '".mysqli_real_escape_string($link,$data)."' WHERE id=1";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function prepare_game($link,$sid,$red_team_id,$blue_team_id,$all_team_id){
    $query = "UPDATE prepare_game SET session_id='".mysqli_real_escape_string($link,$sid)."', red_team_id='".mysqli_real_escape_string($link,$red_team_id)."', blue_team_id='".mysqli_real_escape_string($link,$blue_team_id)."', all_team_id='".mysqli_real_escape_string($link,$all_team_id)."', status='0' WHERE id=1";
    if(mysqli_query($link,$query)) return true;
    else return false;
}
function clear_prepared_game($link, $sid){
    $query = "UPDATE prepare_game SET ";
}
