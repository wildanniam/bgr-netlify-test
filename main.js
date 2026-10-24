const el = document.getElementById("msg")
el.dataset.built = "vite"
el.textContent += " | greeting: " + (import.meta.env.VITE_GREETING ?? "(not set)")
