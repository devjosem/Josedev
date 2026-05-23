document.addEventListener("DOMContentLoaded", () => {
    
    // Instâncias de elementos de controle
    const form = document.getElementById("portfolio-form");
    const feedbackContainer = document.getElementById("form-feedback");
    const submitBtn = document.getElementById("submit-btn");
    
    /* ==========================================================================
       1. FEEDBACK SIMPLES DE FORMULÁRIO (Validação sem fricção)
       ========================================================================== */
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita reload real da página
            
            // Alterar estado do botão para evitar cliques duplicados
            submitBtn.disabled = true;
            submitBtn.innerText = "Processando dados...";
            
            // Coleta básica para fins de validação estrutural
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                renderFeedback("Erro: Todos os campos obrigatórios precisam de preenchimento.", "error");
                resetSubmitButton();
                return;
            }

            // Simulação de sucesso nativo síncrono controlado (UX rápida)
            setTimeout(() => {
                renderFeedback("✓ Ligação bem-sucedida. José responderá em menos de 24 horas.", "success");
                form.reset();
                resetSubmitButton();
            }, 800);
        });
    }

    function renderFeedback(msg, status) {
        feedbackContainer.textContent = msg;
        feedbackContainer.className = "form-feedback"; // Reset class
        if (status === "success") {
            feedbackContainer.classList.add("feedback-success");
        } else {
            feedbackContainer.classList.add("feedback-error");
        }
    }

    function resetSubmitButton() {
        submitBtn.disabled = false;
        submitBtn.innerText = "Enviar Mensagem [Enter]";
    }

    /* ==========================================================================
       2. ANIMAÇÃO DE ENTRADA LEVE (Interação Suave)
       ========================================================================== */
    // Simula uma pequena variação de opacidade nos logs do boot para dar o tom técnico
    const logs = document.querySelectorAll(".system-log");
    logs.forEach((log, index) => {
        log.style.opacity = "0";
        log.style.transform = "translateX(-5px)";
        log.style.transition = "all 0.3s ease-out";
        
        setTimeout(() => {
            log.style.opacity = "1";
            log.style.transform = "translateX(0)";
        }, (index + 1) * 200);
    });
});