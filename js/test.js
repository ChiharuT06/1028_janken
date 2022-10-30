// alert(1111);

/*console.log("はじめてのじゃばすくりぷと")
console.log(23+5);
console.log(2000-1800);
console.log("18+5");

//const,let.varがある//

var name ="宇山千遥";
console.log(name);


var hako = 1 ;

if(hako === 1){
    console.log("1が入っています");
}else if(hako ===2){
    console.log("2が入っています");
}else if(hako ===3){
    console.log("3が入っています");
}

//サンプルコード1

//var num = 90;

//if ( num >= 80){
    console.log("素晴らしい！おめでとう！");
//}else {
    console.log("もっと頑張りましょう！");
//}




//$(".a").on('click', function(){


//alert("h1が足されました！");

//} );

$(".a").on("click", function () {

    //cssのclass a を　click //
    
   // alert("h1が押されました！");


//$(".a").css("color","red");

//$(".a").fadeOut(2000);//1000  = 1秒　//
//$(".a").fadeIn(2000);

var random = Math.floor(Math.random() * 5);
console.log(random, "ランダムな数字");


if (random === 0) {
    console.log("大吉");
    $(".a").text("大吉");
  } else if (random === 1) {
    console.log("中吉");
    $(".a").text("中吉");
  } else if (random === 2) {
    console.log("小吉");
    $(".a").text("小吉");
  } else if (random === 3) {
    console.log("吉");
    $(".a").text("吉");
  } else if (random === 4) {
    console.log("末");
    $(".a").text("末");
  }


  });

  


  //$(".a").css("co")*/

  /*function R_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];//"janken"のリストを作成します。
    let janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数を作ります

    let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成します。
        //勝ち負けの判定機プログラムです
        if (janken_r === p_janken_r) {
            Result_end = "あいこです";
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
        }else {
            Result_end = "あなたの【負け】";
        }

        //結果を表示するためのプログラムです
        document.getElementById("jankenpon").src="img/jan" + janken_r + ".png";
        document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。ジャンケンの結果は・・・？";
        document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + Result_end;
        document.getElementById("jankenpon2").src="img/jan" + p_janken_r + ".png";
    }*/


// 押すとdivが消える//

    $('.tool-btn').on('click', function () {
      $(this).closest("div").css("display", "none");

     if($(this).closest("div").hasClass("page-1")){
      $(".page-2").fadeIn("slow");
     }else if($(this).closest("div").hasClass("page-2")){
      $(".page-3").fadeIn("slow");
     }else if($(this).closest("div").hasClass("page-3")){
      $(".page-4").fadeIn("slow");
     }else if($(this).closest("div").hasClass("page-4")){
      $(".page-5").fadeIn("slow");
     }else if($(this).closest("div").hasClass("page-5")){
        $(".page-6").fadeIn("slow");
     }
     }); 
   
  


    $(".btn-container").on("click", function () {
  
  var random = Math.floor(Math.random() * 5);
  console.log(random, "ランダムな数字");
  
  
  if (random === 0) {
      console.log("私");
      $(".who").text("私");
    } else if (random === 1) {
      console.log("君");
      $(".who").text("君");
    } else if (random === 2) {
      console.log("僕");
      $(".who").text("僕");
    } else if (random === 3) {
      console.log("あなた");
      $(".who").text("あなた");
    } else if (random === 4) {
      console.log("誰か");
      $(".who").text("誰か");
    }
  
  
    });
  
    $(".btn-container2").on("click", function () {
      
      var random = Math.floor(Math.random() * 5);
      console.log(random, "ランダムな数字");
      
      
      if (random === 0) {
          console.log("未来");
          $(".is").text("未来");
        } else if (random === 1) {
          console.log("恋");
          $(".is").text("恋");
        } else if (random === 2) {
          console.log("明日");
          $(".is").text("明日");
        } else if (random === 3) {
          console.log("光");
          $(".is").text("光");
        } else if (random === 4) {
          console.log("希望");
          $(".is").text("希望");
        }
      
      
        });
    
    $(".btn-container3").on("click", function () {
          
          var random = Math.floor(Math.random() * 5);
          console.log(random, "ランダムな数字");
          
          
          if (random === 0) {
              console.log("苦くて");
              $(".any").text("苦くて");
            } else if (random === 1) {
              console.log("煌めいて");
              $(".any").text("煌めいて");
            } else if (random === 2) {
              console.log("甘くて");
              $(".any").text("甘くて");
            } else if (random === 3) {
              console.log("するどくて");
              $(".any").text("するどくて");
            } else if (random === 4) {
              console.log("やわらかくて");
              $(".any").text("やわらかくて");
            }
          
          
            });

    $(".btn-container4").on("click", function () {
          
              var random = Math.floor(Math.random() * 5);
              console.log(random, "ランダムな数字");
              
              
              if (random === 0) {
                  console.log("繊細だ");
                  $(".that").text("繊細だ");
                } else if (random === 1) {
                  console.log("あたたかい");
                  $(".that").text("あたたかい");
                } else if (random === 2) {
                  console.log("ゆるぎない");
                  $(".that").text("ゆるぎない");
                } else if (random === 3) {
                  console.log("壊れやすい");
                  $(".that").text("壊れやすい");
                } else if (random === 4) {
                  console.log("夢のようだ");
                  $(".that").text("夢のようだ");
                }
              
              
                });        


          
     $(".btn-container5").on("click", function () {

       ;

             
                });

                

        
              

