
let btnin;
let btnchat;
let chat;
var scrolled = 0;
$(function () {

    chat=$('#chatArea');
    btnin=$('#footer input');
    btnchat=$('#footer button');

    btnchat.on('click',function () {
        if (btnin.val()===""){
            alert("You have to fill the message");
        }
        else{
          let body=$(`

                      <div class="me">${btnin.val()}</div>
      `);
      btnin.val("");

          chat.append(body);
            onClick(btnin.val())
        }
        btnin.focus();
        scrolled=scrolled+1300;

    $("#chatArea").animate({
        scrollTop:  scrolled
    });
    })

    btnin.on("keypress",function (e) {
        if(e.keyCode == 13) {
          if (btnin.val()===""){
              alert("You have to fill the message");
          }
          else{
            let body=$(`

                        <div class="me">${btnin.val()}</div>
        `);
        chat.append(body);
          onClick(btnin.val())
        btnin.val("");
        btnin.focus();
        scrolled=scrolled+1300;

    $("#chatArea").animate({
        scrollTop:  scrolled
    });
          }
        }

    })

});


function onClick(text){

    $.post('/chat',{data:text},(data)=>{

        let body=$(`

             <div class="bot">${data.text}</div>
    `);
        chat.append(body);
        scrolled=scrolled+1300;

    $("#chatArea").animate({
        scrollTop:  scrolled
    });
        console.log(data);

    });
}
