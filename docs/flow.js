const flowConfig = {
    'training1': [
        {
            name: 'warm-up',
            time: 3 * 60 * 1000
        },
        {
            name: 'clock',
            time: 2 * 60 * 1000
        },
        {
            name: 'earthquake',
            time: 10 * 60 * 1000
        },
        {
            name: 'lode-runner',
            hash: '1',
            time: 10 * 60 * 1000
        },
        {
            name: 'colors',
            hash: '1',
            time: 5 * 60 * 1000
        },
        {
            name: 'schulte-table',
            hash: '1',
            time: 10 * 60 * 1000
        },
        {
            name: 'stat',
            time: 2 * 60 * 1000
        }
    ]
};

const today = new Date();
const flowName = window.location.hash ? window.location.hash.replace(/^#(?:.+:)?/, '') : undefined;
const currentFlow = flowName ? flowConfig[flowName] : undefined;
const scriptName = location.pathname.split('/').pop().split('.').shift();

if (currentFlow) {
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const key = `${scriptName}_${yyyy}-${mm}-${dd}`;
    const spentTime  = parseInt(localStorage.getItem(key) || '0', 10) || 0;
    const currentConfig = currentFlow.find(item => item.name === scriptName);
    const nextConfig = currentConfig ? currentFlow[currentFlow.indexOf(currentConfig) + 1] : undefined;
    if (currentConfig) {
        setTimeout(() => {
            const preparedHash = currentConfig.hash ? `${currentConfig.hash}:` : '';
            window.location.href = nextConfig ? `./${nextConfig.name}.html#${preparedHash}${flowName}` : '../';
        }, Math.max(0, currentConfig.time - spentTime));
    } else {
        window.location.href = '../';
    }
}