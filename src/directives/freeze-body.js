let freezeCount = 0;

export default {
    bind() {
        freezeCount++;

        document.body.classList.add('scroll-freeze');
    },
    unbind() {
        freezeCount--;

        if (freezeCount === 0) {
            document.body.classList.remove('scroll-freeze');
        }
    }
}
