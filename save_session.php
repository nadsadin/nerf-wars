<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 3/31/2017
 * Time: 7:50 PM
 */
require_once ('config.php');
require_once ('functions.php');
$link = open_db($host, $user, $password, $db);
$sid = $_POST['session_id'];
$team = get_teams($link,$sid);
save_session($link,$sid,$_POST['session_type']);
$i = 1;
$player_number = 1;
$total_players = $_POST['total_players'];
$xml_file = simplexml_load_file("xml/prepare.xml");
unset($xml_file->players);
while (isset($_POST["card_id" . $i])) {
    $card_id = $_POST['card_id' . $i];
    if ($card_id) {
        if (!get_player($link, $card_id)) {
            add_player($link, $card_id, $_POST['nickname' . $i]);
        }
        if($player_number<($total_players/2))player_to_team($link,$team['red'],$card_id);
        else player_to_team($link,$team['blue'],$card_id);
        player_to_team($link,$team['all'],$card_id);
        $player_number++;
    }
    $i++;
}
close_db($link);
echo "Session saved: ".$sid;