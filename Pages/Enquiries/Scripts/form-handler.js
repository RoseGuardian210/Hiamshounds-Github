// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('applicationForm');
//   const responseBox = document.getElementById('formResponse');

//   form.addEventListener('submit', async function (event) {
//     event.preventDefault(); 

//     const formData = new FormData(form);
//     const plainData = Object.fromEntries(formData.entries());

//     try {
//       const res = await fetch('/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(plainData)
//       });

//       if (res.ok) {
//         responseBox.textContent = '✅ Thank you! Your application was sent successfully.';
//         form.reset();
//       } else {
//         responseBox.textContent = '❌ Failed to send. Please try again later.';
//         responseBox.style.color = 'crimson';
//       }
//     } catch (err) {
//       console.error('Submit error:', err);
//       responseBox.textContent = '❌ Something went wrong. Please try again.';
//       responseBox.style.color = 'crimson';
//     }
//   });
// });


(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');
    const responseBox = document.getElementById('formResponse');

    form?.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const plainData = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(plainData)
        });

        if (res.ok) {
          responseBox.textContent = '✅ Thank you! Your application was sent successfully.';
          form.reset();
        } else {
          responseBox.textContent = '❌ Failed to send. Please try again later.';
          responseBox.style.color = 'crimson';
        }
      } catch (err) {
        console.error('Submit error:', err);
        responseBox.textContent = '❌ Something went wrong. Please try again.';
        responseBox.style.color = 'crimson';
      }
    });
  });
})();