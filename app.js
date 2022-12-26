const spin = document.querySelector('#spin-container');
const bodyBackground = document.querySelector('#body-background');
bodyBackground.classList.toggle('hidden');
spin.classList.toggle('hidden');

const Spin = () => {
    spin.classList.toggle('hidden');
    bodyBackground.classList.toggle('hidden');
}
setTimeout(Spin,3000);

spin.classList.toggle('hidden');