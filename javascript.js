$('#example1').typeIt({
  strings: ["help=0", "verb=0", "weeks=0", "days=0", "if [ $help -eq 1 ]","then no_of_lines=`cat $0 | awk 'BEGIN { n = 0; } ", "/^$/ { print n; ", "exit; } ", "if [ $d -ge $e -a $d -le $z ] ", "if [ $verb -eq 1 ] ", " n=$[ $n + 1 ]", "s=$[ $s + $l ]" ],
  speed: 50,
  autoStart: false,//&emsp
  waitUntilVisible: true
});

setTimeout(function(){
$('#example2').typeIt({
  strings: ["Error","Error"," Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error Error Error Error Error Error Error  Error  hint (click on text)"],
  speed: 10,
  autoStart: true,//&emsp
  waitUntilVisible: false
  });

}, 20000);

back.onclick = function() {
  $('#example1').empty();
  $('#example2').empty();
  $('#example2').css("color", "black");
  $("#main").hide();
  $("#main").css("opacity", "1");
  $("body").css("background-color", "black");
  $("#main").fadeIn("slow");
}
