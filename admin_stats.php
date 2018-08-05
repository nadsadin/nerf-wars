<?php
/**
 * Created by PhpStorm.
 * User: Cheshire
 * Date: 4/12/2017
 * Time: 2:23 PM
 */
$xml_file = simplexml_load_file('xml/current_session.xml');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
</head>
<body>
<div class="content-wrap">
    <div class="nav-panel clearfix">
        <div class="nav-left">
            <div class="text">Capture the flag</div>
            <div class="button">Change game type</div>
        </div>
        <div class="nav-right">
            <div class="text">Session ends</div>
            <div class="text" id="timer-screen">
                <span>00</span>
                <span>:</span>
                <span>00</span>
            </div>
            <div class="button" id="timer-stop">Abort session</div>
            <a href="#" class="button" id="new-session">New session</a>
        </div>
    </div>
    <div class="stats-wrap clearfix">
        <div class="stats-left-wrap">
            <div class="stats-header-wrap red clearfix">
                <div class="team left">
                    <p>Team</p>
                    <h3>Red</h3>
                </div>
                <div class="score right" id="flag-red">
                    <span>00</span>
                    <input type="hidden" name="redflag" value="0">
                </div>
                <div class="count-buttons-wrap right clearfix">
                    <div class="button-incr" id="red-button-incr">+</div>
                    <div class="button-decr" id="red-button-decr">-</div>
                </div>
            </div>
        </div>
        <div class="stats-right-wrap">
            <div class="stats-header-wrap blue clearfix">
                <div class="team right">
                    <p>Team</p>
                    <h3>Blue</h3>
                </div>
                <div class="score left" id="flag-blue">
                    <span>00</span>
                    <input type="hidden" name="blueflag" value="0">
                </div>
                <div class="count-buttons-wrap left clearfix">
                    <div class="button-incr" id="blue-button-incr">+</div>
                    <div class="button-decr" id="blue-button-decr">-</div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>