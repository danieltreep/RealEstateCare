// Functie die de login gegevens controleert
function checkLoginService(username, password) {
    const usernameLocalStorage = localStorage.getItem('username');      // Haal gebruikersnaam uit local storage
    const passwordLocalStorage = localStorage.getItem('password');      // Haal wachtwoord uit local storage

    // Vergelijk local storage waarden met argumenten en return true of false
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