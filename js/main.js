const user = document.getElementById('user');
const user_btn = document.getElementById('btn');
const username = document.getElementById('username')

function addLocal() {
    localStorage.setItem('name', String(user.value));
    location.href = './sign.html';
}

const checkName = localStorage.getItem('name')

function checkUser() {
    if (checkName === String(username.value)) {
        location.href = './index.html'
    } else {
        console.log(false);
    }
}