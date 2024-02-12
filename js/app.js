document.addEventListener('DOMContentLoaded', function() {
    const $btnYes = document.querySelector('.js-yes');
    const $btnNo = document.querySelector('.js-no');
    const $confirm = document.querySelector('.js-confirm');
    const $dialog = document.querySelector('.dialog');
    const $body = document.querySelector('body');

    let counter = 0;

    $btnYes.addEventListener('click', () => {
        $body.classList.add('yes');
        $confirm.style.display = 'none'; 
        $dialog.style.display = 'block'; 
    });

    $btnYes.addEventListener('mouseover', (e) => {
        e.target.innerHTML = "That's my POOKIE";
    });

    $btnYes.addEventListener('mouseout', (e) => {
        e.target.innerHTML = "YES";
    });

    $btnNo.addEventListener('mouseover', (e) => {
        const $target = e.target;
        $target.style.transition = 'top 0.5s ease, right 0.5s ease'; 
        $target.style.top = `${Math.random() * 150}px`;
        $target.style.right = `${Math.random() * 150}px`;

        if (counter >= 5){
            $target.innerHTML = "Hmmmmmm....";
        }if(counter >= 10){
            $target.innerHTML = "U sure>>??";
        }

        counter += 1;
    });
});
