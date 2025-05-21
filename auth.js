// Elementos do DOM
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authMessage = document.getElementById('authMessage');

// Alternar entre Login e Cadastro
document.getElementById('goToRegister').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    authMessage.textContent = '';
});

// Login com Email/Senha
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch(error => {
            authMessage.textContent = getErrorMessage(error.code);
            authMessage.style.color = 'red';
        });
});

// Cadastro com Email/Senha
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        authMessage.textContent = "As senhas não coincidem!";
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Salva nome do usuário no Firestore
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch(error => {
            authMessage.textContent = getErrorMessage(error.code);
            authMessage.style.color = 'red';
        });
});

// Monitorar estado de autenticação
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("Usuário logado:", user.email);
    } else {
        console.log("Nenhum usuário logado");
    }
});

// Tradutor de erros do Firebase
function getErrorMessage(errorCode) {
    const messages = {
        'auth/email-already-in-use': 'E-mail já cadastrado.',
        'auth/invalid-email': 'E-mail inválido.',
        'auth/weak-password': 'Senha deve ter pelo menos 6 caracteres.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.'
    };
    return messages[errorCode] || "Erro desconhecido: " + errorCode;
}