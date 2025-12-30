// Countdown target (set to a future launch date, UTC)
const LAUNCH_DATE = new Date('2026-02-01T00:00:00Z').getTime();

// Server sync: keep an offset (ms) between server time and device time.
let serverOffset = 0; // serverTime - localTime
let timeSynced = false;

function now(){
  return Date.now() + serverOffset;
}

function updateCountdown(){
  const current = now();
  const diff = Math.max(0, LAUNCH_DATE - current);
  const secs = Math.floor(diff/1000) % 60;
  const mins = Math.floor(diff/1000/60) % 60;
  const hours = Math.floor(diff/1000/60/60) % 24;
  const days = Math.floor(diff/1000/60/60/24);
  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(mins).padStart(2,'0');
  document.getElementById('seconds').textContent = String(secs).padStart(2,'0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Try to sync with a reliable UTC time source and update serverOffset.
function syncTimeWithServer(){
  // public UTC API (simple, no-auth)
  const url = 'https://worldtimeapi.org/api/timezone/Etc/UTC';
  fetch(url, {cache: 'no-store'})
    .then(r => {
      if(!r.ok) throw new Error('time fetch failed');
      return r.json();
    })
    .then(j => {
      // j.utc_datetime is ISO string
      const serverNow = Date.parse(j.utc_datetime);
      serverOffset = serverNow - Date.now();
      timeSynced = true;
      // run an immediate countdown update after syncing
      updateCountdown();
    })
    .catch(() => {
      // Leave serverOffset as-is (0) and rely on device clock.
      timeSynced = false;
    });
}

// initial sync, then refresh periodically (every 5 minutes)
syncTimeWithServer();
setInterval(syncTimeWithServer, 5 * 60 * 1000);

// Form handling — stores emails in localStorage (no backend)
const form = document.getElementById('subscribe');
const emailInput = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', e =>{
  e.preventDefault();
  const email = emailInput.value.trim();
  if(!validateEmail(email)){
    showMessage('Please enter a valid email address.');
    return;
  }
  saveSubscription(email);
  form.reset();
  showMessage('Thanks — we\'ll notify you when we launch!', true);
});

function validateEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function saveSubscription(email){
  try{
    const key = 'quriosnow_subscribers_v1';
    const arr = JSON.parse(localStorage.getItem(key) || '[]');
    if(!arr.includes(email)) arr.push(email);
    localStorage.setItem(key, JSON.stringify(arr));
  }catch(e){
    console.warn('subscription save failed', e);
  }
}

function showMessage(text, success=false){
  msg.textContent = text;
  msg.style.color = success ? '#b4ffd9' : '#ffd0c7';
  setTimeout(()=>{ msg.textContent = ''; }, 5000);
}

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();
