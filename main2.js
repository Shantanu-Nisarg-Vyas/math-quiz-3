p1_name = localStorage.getItem("p1 name");
p2_name = localStorage.getItem("p2 name");

p1_score = 0;
p2_score = 0;

document.getElementById("p1_name_pts").innerHTML=p1_name+":";
document.getElementById("p2_name_pts").innerHTML=p2_name+":";

document.getElementById("p1_pts").innerHTML=p1_score;
document.getElementById("p2_pts").innerHTML=p2_score;

document.getElementById("player_q_turn").innerHTML="Question Turn "+p1_name;
document.getElementById("player_a_turn").innerHTML="Answer Turn "+p2_name;

function submitword() {
    word = document.getElementById("word_input").value;
    lowercase_word = word.toLowerCase();
    console.log(lowercase_word)

    charAt1 = charAt(1);

    length2 = Math.floor(lowercase_word.length/2);
    console.log (length2);
    charAt2 = charAt(length2);

    length3 = Math.floor(lowercase_word.length-1);
    console.log (length3);
    charAt3 = charAt(length3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button; 
    document.getElementById("question").innerHTML = row;
    document.getElementById("word_input").value = "";
}

question_turn="player1";
answer_turn="player2";
function check () {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if (answer == lowercase_word) {
        if(answer_turn == "player1") {
            p1_score=p1_score+1;
            document.getElementById("p1_pts").innerHTML=p1_score;
        }
        else {
            p2_score=p2_score+1;
            document.getElementById("p2_pts").innerHTML=p2_score;
        }
    }
    if (question_turn == "player1")  {
        question_turn = "player2";
        document.getElementById("player_q_turn").innerHTML="Question Turn"+p2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_q_turn").innerHTML="Question Turn"+p1_name;
    }
    if (answer_turn == "player1")  {
        answer_turn = "player2";
        document.getElementById("player_a_turn").innerHTML="Answer Turn"+p2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_a_turn").innerHTML="Answer Turn"+p1_name;
    }
    document.getElementById("question").value="";
}