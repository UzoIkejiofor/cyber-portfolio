let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Typing text Code

const typed = new Typed(".multiple-text", {
  strings: [
    "Cybersecurity Engineer",
    "SOC Analyst",
    "Incident Responder",
    "Vulnerability Analyst",
    "Threat Hunter",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});


// Matrix Rain animation

document.addEventListener("DOMContentLoaded", function () {
    // Function to initialize the Matrix effect for a given canvas
    function initMatrixRain(canvasSelector, parentSelector) {
        const canvas = document.querySelector(canvasSelector);
        if (!canvas) {
            console.error(`Canvas element ${canvasSelector} not found!`);
            return;
        }

        const ctx = canvas.getContext("2d");
        const parent = document.querySelector(parentSelector);
        if (!parent) {
            console.error(`Parent section ${parentSelector} not found!`);
            return;
        }

        // Function to resize canvas to match the parent section
        function resizeCanvas() {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        function drawMatrixRain() {
            ctx.fillStyle = "rgba(17, 17, 34, 0.5)"; // Faint fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00FF41"; // Matrix neon green
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0; // Reset drop to top
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrixRain, 50);
    }

    // Initialize Matrix Rain for both sections
    initMatrixRain(".matrix-rain", ".contact");
    initMatrixRain(".matrix-rain-expertise", ".expertise");

    // Form Submission Handler
    const form = document.querySelector("form");
    const msg = document.querySelector("#msg"); // Ensure there is an element with ID "msg"

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const scriptURL = "YOUR_GOOGLE_FORM_SCRIPT_URL"; // Replace with your actual script URL

            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((response) => {
                    msg.innerHTML = "Message sent successfully!!";
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 5000);
                    form.reset();
                })
                .catch((error) => console.error("Error!", error.message));
        });
    } else {
        console.error("Form not found!");
    }
});

