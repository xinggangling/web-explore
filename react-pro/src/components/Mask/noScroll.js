let isOn = false;
let scrollTop;
let onNum = 0;

export function on() {
    onNum++;
    if (isOn) return;
    scrollTop = window.pageYOffset;
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.position = 'fixed';
    isOn = true;
}

export function off() {
    if (!isOn) return;
    onNum--;
    if (onNum > 0) return;
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scroll(0, scrollTop);
    isOn = false;
}

export function toggle() {
    isOn ? off() : on();
}
