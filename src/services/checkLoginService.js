function checkLoginService(username, password) {
    const usernameLocalStorage = localStorage.getItem('username');
    const passwordLocalStorage = localStorage.getItem('password');

    if (usernameLocalStorage && passwordLocalStorage) {
        if (usernameLocalStorage === username && passwordLocalStorage === password) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export default checkLoginService;