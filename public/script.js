
let btnin;
let btnchat;
let chat;
$(function () {

    chat=$('.chat');
    btnin=$('#btn-input');
    btnchat=$('#btn-chat');

    btnchat.on('click',function () {
        if (btnin.val()===""){
            alert("You have to fill the message");
        }
        else{
            onClick(btnin.val())
        }

        let body=$(`
    
                    <li class="left clearfix"><span class="chat-img pull-left">
                            <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
                        </span>
                            <div class="chat-body clearfix">
                                <div class="header">
                                    <strong class="primary-font">You</strong> <small class="pull-right text-muted">
                                </div>
                                <p>
                                     ${btnin.val()}
                                </p>
                            </div>
                        </li>
    `);

        chat.append(body);

    })

});


function onClick(text){

    $.post('/chat',{data:text},(data)=>{

        let body=$(`
       
             <li class="right clearfix"><span class="chat-img pull-right">
                            <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
                        </span>
                            <div class="chat-body clearfix">
                                <div class="header">
                                    <strong class="pull-right primary-font">Bot</strong>
                                </div>
                                <p>
                                   ${data.text}
                                </p>
                            </div>
                        </li>
    `);
        chat.append(body);
        console.log(data);

    });
}

