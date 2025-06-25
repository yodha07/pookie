document.addEventListener('DOMContentLoaded', function() {
    const $btnYes = document.querySelector('.js-yes');
    const $btnNo = document.querySelector('.js-no');
    const $confirm = document.querySelector('.js-confirm');
    const $dialog = document.querySelector('.dialog');
    const $body = document.querySelector('body');
    const audio = document.getElementById('audio');

    let counter = 0;

    $btnYes.addEventListener('click', () => {
        $body.classList.add('yes');
        $confirm.style.display = 'none'; 
        $dialog.style.display = 'block'; 
        playAudio();
    });

    $btnYes.addEventListener('mouseover', (e) => {
        e.target.innerHTML = "That's my POOKIE";
    });

    $btnYes.addEventListener('mouseout', (e) => {
        e.target.innerHTML = "YES";
    });

    $btnNo.addEventListener('touchstart', evadeNoButton);

    $btnNo.addEventListener('click', (e) => {
        e.preventDefault(); 
        evadeNoButton(e);
    });

    function evadeNoButton(e) {
        const $target = e.target;
        const maxY = Math.min(window.innerHeight - 100, 300);
        const maxX = Math.min(window.innerWidth - 100, 300);

        $target.style.transition = 'top 0.5s ease, right 0.5s ease'; 
        $target.style.top = `${Math.random() * maxY}px`;
        $target.style.right = `${Math.random() * maxX}px`;

        counter += 1;
        if (counter >= 5){
            $target.innerHTML = "Hmmmmmm....";
        }if(counter >= 10){
            $target.innerHTML = "U sure>>??";
        }if(counter >=15){
            $target.innerHTML = "Come on now"
        }if(counter >= 20){
            $target.innerHTML = "Let kitty breathe!!"
        }
    }

    $btnNo.addEventListener('mouseover', evadeNoButton);

    $btnNo.addEventListener('click', evadeNoButton);

    function playAudio() {
        audio.play();
    }

});
