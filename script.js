let attemptsLeft = 3; // Total de tentativas permitidas
let warningPlayed = false; // Controle para tocar o som apenas uma vez

// Função de verificação
function verifyAccess() {
    const accessCode = document.getElementById("accessCode").value;
    const errorMessage = document.getElementById("errorMessage");

    // Códigos de acesso válidos
    const codes = {
        junior: "11-642",
        fhelipe: "54-510"
    };

    if (accessCode === codes.junior) {
        window.location.href = "junior.html";
    } else if (accessCode === codes.fhelipe) {
        window.location.href = "fhelipe.html";
    } else {
        attemptsLeft--;

        if (attemptsLeft === 1 && !warningPlayed) {
            playWarningSound();
            warningPlayed = true;
        }

        if (attemptsLeft > 0) {
            errorMessage.textContent = `Código de acesso inválido. Você tem ${attemptsLeft} tentativa(s).`;
        } else {
            errorMessage.textContent = "tente novamente.";
            document.getElementById("accessCode").disabled = true;
        }
    }
}

// Função para tocar o som de aviso
function playWarningSound() {
    const audio = new Audio("frase.mp3");
    audio.play();
}

// Adicionando o evento ao botão
document.getElementById("loginButton").addEventListener("click", verifyAccess);
