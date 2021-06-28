(function () {
    const backElement = document.createElement('a');
    backElement.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    backElement.href = '../';
    backElement.appendChild(document.createTextNode('Go HOME'));
    backElement.style.color = 'black';
    backElement.style.textDecoration = 'none';
    backElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    backElement.style.position = 'absolute';
    backElement.style.left = '0';
    backElement.style.top = '0';
    backElement.style.fontSize = '20px';
    backElement.style.padding = '10px';
    document.body.appendChild(backElement);
})();

(function () {
    const id = 'topmailru-code';
    const tmr = window._tmr || (window._tmr = []);
    tmr.push({id: '3220822', type: 'pageView', start: (new Date()).getTime()});
    if (!document.getElementById(id)) {
        const ts = document.createElement('script');
        ts.id = id;
        ts.src = 'https://top-fwz1.mail.ru/js/code.js';
        ts.type = 'text/javascript';
        ts.async = true;
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ts, s);
    }
})();