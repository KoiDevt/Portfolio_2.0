const enchance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
    });
}
enchance("channel-link-1")
enchance("channel-link-2")
enchance("channel-link-3")
enchance("channel-link-4")
enchance("channel-link-5")