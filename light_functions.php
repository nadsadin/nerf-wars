<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/26/2017
 * Time: 12:44 PM
 */
function open_db($host, $user, $password, $db){
    $link = mysqli_connect($host, $user, $password, $db)
    or die("Error " . mysqli_error($link));
    return $link;
}
function close_db($link){
    mysqli_close($link);
}
function get_current_session_xml($link){
    $xml = '<session>';
    $query = "SELECT * FROM current_session WHERE id=0";
    $result = mysqli_query($link,$query);
    $data = mysqli_fetch_assoc($result);
    if($data['start_time']!=0&&time()-$data['start_time']<$data['session_duration'])
    {
        $ends = $data['session_duration']-(time()-$data['start_time']);
        $xml.='<session_ends>'.$ends.'</session_ends>';
    }
    else $xml.='<session_ends>0</session_ends>';
        $xml .= '<start_time>'.$data['start_time'].'</start_time>';
        $xml .= '<session_duration>'.$data['session_duration'].'</session_duration>';
        $xml .= '<scenario>'.$data['scenario'].'</scenario>';
        $xml .= '<team_red_score>'.$data['team_red_score'].'</team_red_score>';
        $xml .= '<team_blue_score>'.$data['team_blue_score'].'</team_blue_score>';
        $xml .= '<team_red_name>'.$data['team_red_name'].'</team_red_name>';
        $xml .= '<team_blue_name>'.$data['team_blue_name'].'</team_blue_name>';
    $xml .= '</session>';
    return $xml;
}
function update_current_session($data_array,$link){
    $query ='';
    if(isset($data_array['start_time'])&&$data_array['start_time']!=0){
        $query = "UPDATE current_session SET start_time=".intval($data_array['start_time']).", session_duration=".intval($data_array['session_duration']).", scenario='".mysqli_real_escape_string($link,$data_array['scenario'])."', team_red_score=0, team_blue_score=0, team_red_name='".mysqli_real_escape_string($link,$data_array['team_red_name'])."', team_blue_name='".mysqli_real_escape_string($link,$data_array['team_blue_name'])."' WHERE id=0";
    }
    if(mysqli_query($link,$query))return true;
    else echo mysqli_error($link)." ".$query." ";
}
function update_score($red,$blue,$link){
    $query = "UPDATE current_session SET team_red_score = '".$red."', team_blue_score = '".$blue."' WHERE id = 0";
    if(mysqli_query($link,$query))return true;
}
function abort_session($link){
    $query = "UPDATE current_session SET start_time=0 WHERE id=0";
    if(mysqli_query($link,$query))return true;
}