/*Changement de la classe active des onglets*/
(function(){
    var tabChange = function(){
        if(!this.classList.contains('active')){
            document.querySelector('.accueil .header-page .topbar ul li.active').classList.remove('active');
            this.parentNode.classList.add('active');
        }
    }
    var clicked = document.querySelectorAll('.accueil .header-page .topbar ul li a');
    for(var i=0; i<clicked.length;i++)
        clicked[i].addEventListener('click',tabChange); 
    var tabChangeButton = function(){
        document.querySelector('.accueil .header-page .topbar ul li.active').classList.remove('active');
        document.querySelector('.accueil .header-page .topbar ul #target').classList.add('active');
        console.log('done');
    }
    document.querySelector('.accueil .header-page .header-infos a button').addEventListener('click',tabChangeButton);
})()
/*Fin du script*/

/*Contact form*/

$('.submit').click(function(e){
    var mail = $('.b').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    var StatusElm = $('.status');
    StatusElm.empty();

    if(mail.length > 5 && mail.includes('@') && mail.includes('.')){
        StatusElm.append('<div> Email is valid</div>');
    }else{
        e.preventDefault();
        StatusElm.append('<div> Email is not valid</div>');
    }

    if(subject.length > 2){
        StatusElm.append('<div> Subject is valid</div>');
    }else{
        e.preventDefault();
        StatusElm.append('<div> Subject is not valid</div>');
    }

    if(message.length > 20){
        StatusElm.append('<div> Message is valid</div>');
    }else{
        e.preventDefault();
        StatusElm.append('<div> Message is not valid</div>');
    }
})

/*Fin du contact form*/