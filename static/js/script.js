setTimeout(function(){
    let messages = document.getElementById("msg");
    let alert = new bootstrap.Alert(messages);
    alert.close();
}, 2000);

setTimeout(function(){
    let messages = document.getElementById("commentmsg");
    let alert = new bootstrap.Alert(messages);
    alert.close();
}, 3000);
