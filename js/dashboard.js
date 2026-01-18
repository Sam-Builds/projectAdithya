function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

async function submitRequest() {
  const res = await fetch('https://adithyasapi.samstack.site/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      hospital_name: hospitalName.value,
      blood_group: bloodGroup.value,
      units: units.value,
      city: city.value,
      message: message.value
    })
  });

  alert('Blood request sent!');
  closeModal('requestModal');
}

async function bookAppointment() {
  const res = await fetch('https://adithyasapi.samstack.site/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId.value,
      hospital_id: hospitalId.value,
      appointment_date: date.value,
      appointment_time: time.value
    })
  });

  alert('Appointment booked!');
  closeModal('appointmentModal');
}
