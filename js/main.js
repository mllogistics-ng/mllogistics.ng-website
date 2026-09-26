
const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}

function sendBooking(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const v=k=>(f.get(k)||'').trim();
  const msg=`ML Logistics — Booking / Quote Request

Sender: ${v('sender_name')}
Sender phone: ${v('sender_phone')}
Sender email: ${v('sender_email')||'Not provided'}

Recipient: ${v('recipient_name')}
Recipient phone: ${v('recipient_phone')}
Recipient email: ${v('recipient_email')||'Not provided'}

Item / goods: ${v('item')}
Pickup: ${v('pickup')}
Drop-off: ${v('dropoff')}
Service: ${v('service')}
Preferred date: ${v('date')}
Additional information: ${v('notes')||'None'}`;
  window.location.href='https://wa.me/2348077295101?text='+encodeURIComponent(msg);
}
function trackRequest(e){
  e.preventDefault();
  const id=document.getElementById('tracking-id').value.trim();
  if(!id)return;
  document.getElementById('track-result').textContent=`Tracking reference ${id} received. For the current status, please contact ML Logistics on WhatsApp.`;
}
