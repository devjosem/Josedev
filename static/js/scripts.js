document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Menu Mobile Alternador (Responsive Hamburger Menu) ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            // Animação leve nas barras do ícone burguer
            const spans = menuToggle.querySelectorAll("span");
            spans[0].style.transform = navMenu.classList.contains("active") ? "rotate(45deg) translate(5px, 5px)" : "none";
            spans[1].style.opacity = navMenu.classList.contains("active") ? "0" : "1";
            spans[2].style.transform = navMenu.classList.contains("active") ? "rotate(-45deg) translate(6px, -6px)" : "none";
        });

        // Fecha o menu móvel ao clicar em qualquer link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const spans = menuToggle.querySelectorAll("span");
                spans[0].style.transform = "none";
                spans[1].style.opacity = "1";
                spans[2].style.transform = "none";
            });
        });
    }

    // --- 2. Shrink Navbar ao dar Scroll (Estética UI Clean) ---
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shrink");
        } else {
            navbar.classList.remove("shrink");
        }
    });

    // --- 3. Scroll Storytelling (Animação de Reveal controlada por IntersectionObserver) ---
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Uma vez animado, removemos a observação para otimizar performance
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // viewport padrão
        threshold: 0.1, // Dispara quando 10% do elemento estiver visível
        rootMargin: "0px 0px -40px 0px" // Dispara ligeiramente antes de entrar totalmente
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- 4. Ativação de Link Ativo com base na Seção visível ---
    const sections = document.querySelectorAll("section[id]");
    
    const navActiveCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    const sectionObserver = new IntersectionObserver(navActiveCallback, {
        root: null,
        threshold: 0.5 // Exige 50% da seção visível para mudar o item ativo na navbar
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});