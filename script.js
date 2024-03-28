const labels = document.querySelectorAll('.creds label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter) => `<span>${letter}</span>`)
        .join('');
});