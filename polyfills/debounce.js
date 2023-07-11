// The Debounce technique allow us to “group” multiple sequential calls in a single one.

// More Like, I’m not going to execute that function until I know there are no more changes inbound

function debounce(func, wait) {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}
