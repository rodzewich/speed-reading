let statPoint = Date.now();
const statElement = document.createElement('div');
statElement.style.position = 'absolute';
statElement.style.right = '0';
statElement.style.top = '0';
statElement.style.fontSize = '20px';
statElement.style.padding = '10px';
statElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
document.body.appendChild(statElement);
const stat = () => {
    const today = new Date();
    const script = location.pathname.split('/').pop().split('.').shift();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const key = `${script}_${yyyy}-${mm}-${dd}`;
    const diff = Number(today) - statPoint;
    const value  = parseInt(localStorage.getItem(key) || '0', 10) || 0;
    localStorage.setItem(key, `${value + diff}`);
    statPoint = Number(today);
    statElement.innerText = `${String(Math.round(value / 60 / 60 / 1000)).padStart(2, '0')}:${String(Math.round(value / 60 / 1000) % 60).padStart(2, '0')}:${String(Math.round(value / 1000) % 60).padStart(2, '0')}`;
};

setInterval(stat, 100);