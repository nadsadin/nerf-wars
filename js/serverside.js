/**
 * Created by Cheshire on 4/5/2017.
 */
function newSessionServerRequest() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("txtHint").innerHTML = this.responseText;
            var resultText = this.responseText;
            var parser = new DOMParser();
            var result = parser.parseFromString(resultText,"text/xml");
            console.log(result);
            var showid = result.getElementsByTagName("show_id")[0].childNodes[0].nodeValue;
            var id = result.getElementsByTagName("id")[0].childNodes[0].nodeValue;
            $("#session-id-o").text(showid);
            $("#session-id").val(id);
            popUpWindow(1, "Session saved", "", showid, "nerf"+showid, "???");
        }
    };
    xmlhttp.open("POST", "new_session.php", true);
    xmlhttp.send();
};

function saveSessionServerRequest() {
    var post = $("#bodyId").serialize();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resultText = this.responseText;
            var parser = new DOMParser();
            var result = parser.parseFromString(resultText,"text/xml");
            console.log(result);
            var showid = result.getElementsByTagName("show_id")[0].childNodes[0].nodeValue;
            var id = result.getElementsByTagName("id")[0].childNodes[0].nodeValue;
            $("#session-id-o").text(showid);
            $("#session-id").val(id);
            popUpWindow(1, "Session saved", "", showid, "nerf"+showid, "???");
        }
    };
    xmlhttp.open("POST", "save_session.php?"+post, true);
    xmlhttp.send();
};
function start_Session(){
    var post = $("input").serialize();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText=="true"){
                var url = "lightversion.html";
                $(location).attr('href',url);
            }
            else{
                console.log(this.responseText);
            }
        }
    };

    xmlhttp.open("GET", "start_session_light.php?"+post, true);
    xmlhttp.send();
}
function editScore(){
    var post = $("input").serialize();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText=="true"){
            }
        }
    };

    xmlhttp.open("GET", "edit_score.php?"+post, true);
    xmlhttp.send();
}
function abortSession(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText=="true"){
            }
        }
    };
    xmlhttp.open("GET", "abort_session.php?", true);
    xmlhttp.send();
}
//for lightversion.html
$(document).ready(function(){
    getxml();
    setTimeout(getxml(),5000);
});
//for lightversion.html