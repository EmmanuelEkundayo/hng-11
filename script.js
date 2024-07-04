document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleString('en-US', { weekday: 'long' });
        
        document.getElementById('currentTimeUTC').textContent = utcTime;
        document.getElementById('currentDay').textContent = day;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
});