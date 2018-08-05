var scorepointred = 0;
var scorepointblue = 0;
var xhttp = new XMLHttpRequest();
function getxml(){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.getAllResponseHeaders());
            console.log(this.responseText);
            var xmlDoc = this.responseXML;
            var xml_session_ends = xmlDoc.getElementsByTagName("session_ends")[0].childNodes[0].nodeValue;
            var xml_startTime = xmlDoc.getElementsByTagName("start_time")[0].childNodes[0].nodeValue;
            var xml_sessionDuration = xmlDoc.getElementsByTagName("session_duration")[0].childNodes[0].nodeValue;
            var xml_scenario = xmlDoc.getElementsByTagName("scenario")[0].childNodes[0].nodeValue;
            var xml_teamRedScore = xmlDoc.getElementsByTagName("team_red_score")[0].childNodes[0].nodeValue;
            var xml_teamBlueScore = xmlDoc.getElementsByTagName("team_blue_score")[0].childNodes[0].nodeValue;
            var xml_teamRedName = xmlDoc.getElementsByTagName("team_red_name")[0].childNodes[0].nodeValue;
            var xml_teamBlueName = xmlDoc.getElementsByTagName("team_blue_name")[0].childNodes[0].nodeValue;
            console.log(xml_startTime,xml_scenario,xml_teamBlueName,xml_teamBlueScore,xml_teamRedName,xml_teamRedScore);
            //for tvscreen.html
            $("#game-type-o").text(xml_scenario);
            $("#flag-red span").text(xml_teamRedScore);
            $("#flag-red input").val(xml_teamRedScore);
            scorepointred = xml_teamRedScore;
            if($("#flag-red span").text().length === 1) {
                $("#flag-red span").text("0" + xml_teamRedScore);
            }
            $("#flag-blue span").text(xml_teamBlueScore);
            $("#flag-blue input").val(xml_teamBlueScore);
            scorepointblue = xml_teamBlueScore;
            if($("#flag-blue span").text().length === 1) {
                $("#flag-blue span").text("0" + xml_teamBlueScore);
            }
            $("#red-team-o").text(xml_teamRedName);
            $("#blue-team-o").text(xml_teamBlueName);
            switch (xml_scenario) {
                case "team deathmatch":
                    $("#gametypeimg").addClass("bscen01");
                    $("#gametypeimg").removeClass("bscen02");
                    $("#gametypeimg").removeClass("bscen03");
                    $("#gametypeimg").removeClass("bscen04");
                    $("#gametypeimg").removeClass("bscen05");
                    break;
                case "vip escort":
                    $("#gametypeimg").removeClass("bscen01");
                    $("#gametypeimg").addClass("bscen02");
                    $("#gametypeimg").removeClass("bscen03");
                    $("#gametypeimg").removeClass("bscen04");
                    $("#gametypeimg").removeClass("bscen05");
                    break;
                case "capture the flag":
                    $("#gametypeimg").removeClass("bscen01");
                    $("#gametypeimg").removeClass("bscen02");
                    $("#gametypeimg").addClass("bscen03");
                    $("#gametypeimg").removeClass("bscen04");
                    $("#gametypeimg").removeClass("bscen05");
                    break;
                case "zombie":
                    $("#gametypeimg").removeClass("bscen01");
                    $("#gametypeimg").removeClass("bscen02");
                    $("#gametypeimg").removeClass("bscen03");
                    $("#gametypeimg").addClass("bscen04");
                    $("#gametypeimg").removeClass("bscen05");
                    break;
                case "god mode":
                    $("#gametypeimg").removeClass("bscen01");
                    $("#gametypeimg").removeClass("bscen02");
                    $("#gametypeimg").removeClass("bscen03");
                    $("#gametypeimg").removeClass("bscen04");
                    $("#gametypeimg").addClass("bscen05");
                    break;
                default:
                    break;
            };
            //for tvscreen.html

            if(xml_startTime == 0){
                setTimer(0);
                $("#sid").val(xml_startTime);
            }
            if( $("#sid").val() != xml_startTime){
                $("#timer-screen").removeClass("timer-started");
                $("#timer-screen").addClass("timer-stoped");
                $("#sid").val(xml_startTime);
            }
            if(xml_session_ends >0 && $("#timer-screen").hasClass("timer-stoped")){
                setTimer(xml_session_ends);
            }
//                console.log(xml_startTime, xml_scenario, xml_teamRedScore, xml_teamBlueScore, xml_teamRedName, xml_teamBlueName);
        }
    }
    xhttp.open("GET", 'current_session.php', true);
    xhttp.send();
}

$(document).ready(function(){
//-------- variables --------
    var increment = 1;
    var cardId = "#card-id-input";
    var playerCount = "div.player-wrap";
    var sessionId = "#session-id";
    var sessionIdO = "#session-id-o";
    var totalPlayers = "#total-players";
    var totalPlayersO = "#total-players-o";
    var saveSession = "#save-session";
    var startSession = "#start-session";
    
    var flagRed = "#flag-red";
    var flagRedButton = "#flag-red-button";
    var flagBlue = "#flag-blue";
    var flagBlueButton = "#flag-blue-button";
    
    var RedButtonIncr = "#red-button-incr";
    var RedButtonDecr = "#red-button-decr";
    var BlueButtonIncr = "#blue-button-incr";
    var BlueButtonDecr = "#blue-button-decr";
    
    var redTeamName = "#red-team-name-i";
    var blueTeamName = "#blue-team-name-i";
//-------- variables --------
    
    
    
    //-------- functions --------
    function addNewPlayer() {
        if($(cardId).val().length === 0){
            console.log("Input field is empty. Type something")
        }
        else {
            $("#newPlayers").append('<div class="player-wrap clearfix"><input type="hidden" name="card_id'+ increment +'" value="'+ $(cardId).val() +'"><div class="left-part clearfix"><div class="card-id">'+ $(cardId).val().replace(/\$/g, "") +'</div><input type="text" class="" placeholder="Input nickname here"></div><div class="right-part clearfix"><div class="button-red remove-player">Remove player</div></div></div>');
            $(cardId).val("");
            $(cardId).focus();

                console.log("player id: " + cardId);
                console.log("player number: " + increment);
                console.log("total players: " + $(playerCount).length);

            increment += 1;
            $(totalPlayers).val($(playerCount).length);
            $(totalPlayersO).text($(playerCount).length);
        }
    };
    
    
//    var capturedred = 0;
//    var capturedblue = 0;
//    function flagCount(flag) {
//        switch(flag) {
//            case "blueflag":
//                capturedblue++;
//                $("#flag-blue span").text(capturedblue);
//                $("#flag-blue input").val(capturedblue);
//                if($("#flag-blue span").text().length === 1) {
//                    $("#flag-blue span").text("0" + capturedblue);
//                }
//                break;
//            case "redflag":
//                capturedred++;
//                $("#flag-red span").text(capturedred);
//                $("#flag-red input").val(capturedred);
//                if($("#flag-red span").text().length === 1) {
//                    $("#flag-red span").text("0" + capturedred);
//                }
//                break;
//            default:
//                break;
//        };
//    };
    
   function flagCount(flag) {
        switch(flag) {
            case "blueincr":
                scorepointblue++;
                $("#flag-blue span").text(scorepointblue);
                $("#flag-blue input").val(scorepointblue);
                if($("#flag-blue span").text().length === 1) {
                    $("#flag-blue span").text("0" + scorepointblue);
                }
                break;
            case "redincr":
                scorepointred++;
                $("#flag-red span").text(scorepointred);
                $("#flag-red input").val(scorepointred);
                if($("#flag-red span").text().length === 1) {
                    $("#flag-red span").text("0" + scorepointred);
                }
                break;
            case "bluedecr":
                scorepointblue--;
                $("#flag-blue span").text(scorepointblue);
                $("#flag-blue input").val(scorepointblue);
                if(scorepointblue <= 0) {
                    $("#flag-blue span").text("00");
                    scorepointblue = 0;
                    $("#flag-blue input").val(scorepointblue);
                    break;
                }
                if($("#flag-blue span").text().length === 1) {
                    $("#flag-blue span").text("0" + scorepointblue);
                }
                break;
            case "reddecr":
                scorepointred--;
                $("#flag-red span").text(scorepointred);
                $("#flag-red input").val(scorepointred);
                if(scorepointred <= 0) {
                    $("#flag-red span").text("00");
                    scorepointred = 0;
                    $("#flag-red input").val(scorepointred);
                    break;
                }
                if($("#flag-red span").text().length === 1) {
                    $("#flag-red span").text("0" + scorepointred);
                }
                break;
            default:
                break;
        }
    }
    function removePlayer(who) {
        var newName = who.parentsUntil($("#newPlayers")).children("input:hidden").attr("name");
        $("#newPlayers").prepend('<input type="hidden" name="'+ newName +'" value="false">');
        who.parentsUntil($("#newPlayers")).remove();
        $(totalPlayers).val($(playerCount).length);
        $(totalPlayersO).text($(playerCount).length);
    };
    
//    function newSession() {
//        newSessionServerRequest();
//    };
//    
//    function saveSession() {
//        saveSessionServerRequest();
//    };
    
    function popUpWindow(popType, headerText, innerText, timeText, idText, playersText) {
        switch(popType) {
            case 1:
                $("#bodyId").prepend('<div class="popup-wrap"><div class="popup-inner"><div class="popup-content"><div class="popup-header">' + headerText + '</div><div class="popup-text"><p>TIME: ' + timeText + '</p><p>ID: ' + idText + '</p><p>TOTAL PLAYERS: ' + playersText + '</p></div><div class="popup-buttons clearfix"><div class="button-green w47 right" id="saved-continue">Continue</div></div></div></div><div class="popup-background"></div></div>');
                break;
            case 2:
                $("#bodyId").prepend('<div class="popup-wrap"><div class="popup-inner"><div class="popup-content"><div class="popup-header">' + headerText + '</div><div class="popup-text"><p style="text-transform: none">' + innerText + '</p></div><div class="popup-buttons clearfix"><div class="button-red w47 left">No</div><div class="button-green w47 right">Yes</div></div></div></div><div class="popup-background"></div></div>');
                break;
            case 3:
                $("#bodyId").prepend('<div class="popup-wrap"><div class="popup-inner"><div class="popup-content"><div class="popup-header">' + headerText + '</div><div class="popup-buttons clearfix"><div class="button-blue">Change game type</div><div class="button-green">Continue</div></div></div></div><div class="popup-background"></div></div>');
                break;
            default:
                break;
        };
    };
    window.popUpWindow = popUpWindow;
    //-------- session timer --------
    var seconds;
    function setTimer(timer){
        seconds = timer;
        $("#timer-screen").removeClass("timer-stoped");
        $("#timer-screen").addClass("timer-started");
    };
          setInterval(function() {
            var mins = Math.floor(seconds / 60);
            var secs = Math.floor(seconds % 60);
            if (seconds >= 0) {
                $("#timer-screen span:first-child").text(mins);
                $("#timer-screen span:last-child").text(secs);
                if ($("#timer-screen span:last-child").text().length === 1)
                {
                    $("#timer-screen span:last-child").text("0" + secs);
                }
                if ($("#timer-screen span:first-child").text().length === 1)
                {
                    $("#timer-screen span:first-child").text("0" + mins);
                }
            }
            if (seconds === 0) {                
                $("#timer-screen span:first-child").text("00");
                $("#timer-screen span:last-child").text("00");
                console.group("Timer");
                console.log("Timer done");
                console.groupEnd();
                clearInterval(seconds);
                $("#timer-screen").removeClass("timer-started");
                $("#timer-screen").addClass("timer-stoped");
            }
            seconds--;
            return seconds;
          }, 1000);
    window.setTimer = setTimer;
//    $("#timer-start").click(function(){
//        setTimer(1200);
//        sessionTimer();
//    });
    
    $("#timer-stop").click(function(){
        abortSession();
        console.group("Timer");
        console.log("Timer stoped");
        console.groupEnd();
        setTimer(0);
    });
    //-------- session timer --------
    
    //-------- dead/zombie timer --------
//    function respawn(type) {
//        switch(type) {
//            case "teamdeathmatch":
//                
//                break;
//            case "capturetheflag":
//                
//                break;
//            case "zombie":
//                
//                break;
//            default:
//                break;
//        }
//    }
    //
    //-------- functions --------
    
    
    //-------- events --------
    
    $("#red-button-incr").click(function(){
        flagCount("redincr");
        editScore();
    });
    $("#red-button-decr").click(function(){
        flagCount("reddecr");
        editScore();
    });
    $("#blue-button-incr").click(function(){
        flagCount("blueincr");
        editScore();
    });
    $("#blue-button-decr").click(function(){
        flagCount("bluedecr");
        editScore();
    });
    
//    $(RedButtonIncr).on("click", function(){
//        redincr();
//        editScore();
//    });
//     $(RedButtonDecr).on("click", function(){
//        reddecr();
//        editScore();
//    });
//     $(BlueButtonIncr).on("click", function(){
//        blueincr();
//        editScore();
//    });
//     $(BlueButtonDecr).on("click", function(){
//        bluedecr();
//        editScore();
//    });
    
    
    $("#addNewPlayerBtn").click(function(){
        addNewPlayer();
    });
    
    $("#cardIdInput").keypress(function(e){
        if ((e.keyCode || e.which) == 13) {
            addNewPlayer();
        }
    });
    
    $("#newPlayers").on("click", ".remove-player", function(){
        removePlayer($(this));
    });
    
    $("#bodyId").on("click", "#saved-continue", function(){
        $(".popup-wrap").remove();
    });
    
    $("#randomizer").click(function(){
        var x = Math.round(((Math.random()*$(playerCount).length))+1);
        console.log(x); 
    });
    
    $("#new-session").click(function(){
        newSession();
    });
    $(startSession).click(function() {
        if($(redTeamName).val().length === 0 || $(blueTeamName).val().length === 0){
            console.log("Input field is empty. Type something")
        }
        else
        {
            start_Session();
            console.log("ko-ko-ko");
        }
        $(document).reload(true);
    });
    
    $(saveSession).click(function(){
        popUpWindow(1, "Session saved", "", "25/12/2017 11:41", "nerf25-12-2017 11:41", $(playerCount).length);
    });
    $("#new-session").click(function(){
        $(document).reload(true);
    });
    //-------- events --------
});