document.querySelector("main").addEventListener("click", ({ target }) => {
        let span = target.querySelector("span");

        span.innerText = Number(span.innerText) + 1;
    });
