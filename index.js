const trikampis = document.getElementById('trikampis');
const juosta = document.getElementById('juosta');
let isMoved = false;

trikampis.addEventListener('click', function () {
    if (isMoved) {
        trikampis.style.transform = 'translateY(0)';
        juosta.style.height = '76px';
        juosta.style.transform = 'translateY(0)';
        localStorage.setItem("logoExtended", "false");
        localStorage.setItem("trikampisExtended", "false");

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 0);
    } else {
        trikampis.style.transform = 'translateY(200px)';
        juosta.style.height = '300px';
        juosta.style.transform = 'translateY(0)';
        localStorage.setItem("logoExtended", "true");
        localStorage.setItem("trikampisExtended", "true");

        setTimeout(() => {
            window.location.href = 'navigation.html';
        }, 200);
    }

    isMoved = !isMoved;
});
