function validateLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const userIdError = document.getElementById('userIdError');
    const passwordError = document.getElementById('passwordError');

    userIdError.innerText = '';
    passwordError.innerText = '';

    const correctUserId = 'allyouneedis';
    const correctPassword = 'sleep';

    if (userId === correctUserId && password === correctPassword) {
        alert('로그인이 되었습니다');
    } else {
        if (userId !== correctUserId || password !== correctPassword)  {
            passwordError.innerText = 'ID 또는 PW가 잘못되었습니다';
        }
    }
}
