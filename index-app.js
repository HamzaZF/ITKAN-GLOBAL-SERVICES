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

    if(!(mail.length > 5 && mail.includes('@') && mail.includes('.'))){
        e.preventDefault();
        StatusElm.append('<div style="color : #FED136; text-align:center;">L\'adresse mail n\'est pas valide</div>');
    }

    if(!(subject.length > 2)){
        e.preventDefault();
        StatusElm.append('<div style="color : #FED136; text-align:center;">L\'objet n\'est pas valide</div>');
    }

    if(!(message.length > 20)){
        e.preventDefault();
        StatusElm.append('<div style="color : #FED136; text-align:center;">Le message n\'est pas valide</div>');
    }
})
/*Fin du contact form*/