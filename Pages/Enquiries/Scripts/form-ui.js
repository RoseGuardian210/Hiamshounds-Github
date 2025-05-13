document.addEventListener('DOMContentLoaded', () => {
  const interestSelect = document.getElementById('interest');
  const litterSection = document.getElementById('litter-section');
  const upcomingLitterBreed = document.getElementById('upcoming-litter-breed');
  const waitingSection = document.getElementById('waiting-section');

  const puppiesShepherds = document.getElementById('puppies-shepherds');
  const puppiesSchnauzers = document.getElementById('puppies-schnauzers');
  const upcomingShepherds = document.getElementById('upcoming-Shepherds');

  const breedCurrent = document.getElementById('puppy-breed');
  const breedUpcoming = document.getElementById('breed-upcoming');
  const breedWaiting = document.getElementById('breed-waiting');

  function resetAll() {
    litterSection.style.display = 'none';
    upcomingLitterBreed.style.display = 'none';
    waitingSection.style.display = 'none';
    puppiesShepherds.style.display = 'none';
    puppiesSchnauzers.style.display = 'none';
    upcomingShepherds.style.display = 'none';
  }

  function handleInterestChange() {
    resetAll();
    const interest = interestSelect.value;

    if (interest === 'Current Litter') {
      litterSection.style.display = 'block';

      // Trigger to apply breed logic
      handleBreedChange('current');

    } else if (interest === 'Upcoming Litter') {
      upcomingLitterBreed.style.display = 'block';

      // Trigger to apply breed logic
      handleBreedChange('upcoming');

    } else if (interest === 'Waiting List') {
      waitingSection.style.display = 'block';

      // Trigger to apply breed logic
      handleBreedChange('waiting');
    }
  }

  function handleBreedChange(source) {
  puppiesShepherds.style.display = 'none';
  puppiesSchnauzers.style.display = 'none';
  upcomingShepherds.style.display = 'none';

  let breed = '';

  if (source === 'current') {
    breed = breedCurrent?.value;
    if (breed === 'German Shepherd') {
      puppiesShepherds.style.display = 'block';
    } else if (breed === 'Miniature Schnauzer') {
      puppiesSchnauzers.style.display = 'block';
    }

  } else if (source === 'upcoming') {
    breed = breedUpcoming?.value;
    if (breed === 'German Shepherd') {
      upcomingShepherds.style.display = 'block';
    }

  }
  // No action for 'waiting' — no individual puppies shown
}

function updatePuppiesShepherds() {
  const interest = interestSelect.value;
  const breed = puppyBreedSelect.value;

  // Only show if interest is 'Current Litter' AND breed is 'German Shepherd'
  if (interest === 'Current Litter' && breed === 'German Shepherd') {
    puppiesShepherds.classList.remove('hidden');
  } else {
    puppiesShepherds.classList.add('hidden');
  }
}

document.getElementById('interest').addEventListener('change', function () {
  updatePuppiesShepherds();
});

document.getElementById('puppy-breed').addEventListener('change', function () {
  updatePuppiesShepherds();
});


  // Event listeners
  interestSelect.addEventListener('change', handleInterestChange);

  breedCurrent?.addEventListener('change', () => handleBreedChange('current'));
  breedUpcoming?.addEventListener('change', () => handleBreedChange('upcoming'));
  breedWaiting?.addEventListener('change', () => handleBreedChange('waiting'));

  // Initialize on load
  handleInterestChange();
});
