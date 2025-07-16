function setAccentColor() {
    let accentColor = document.querySelector("input")
    document.documentElement.style.setProperty("--accent-color", accentColor.value);
}
