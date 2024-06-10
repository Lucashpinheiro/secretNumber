document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('drawer').addEventListener('submit', function(e){
        e.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber + 1;

        document.getElementById('value-result').innerText = Math.floor(randomNumber);
        document.querySelector('.result').style.display = 'block';
    })
})