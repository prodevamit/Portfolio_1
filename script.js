const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const availabilityText = document.querySelector('.badge-ring textPath');
if (availabilityText) {
  const monthYear = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());
  availabilityText.textContent = `AVAILABLE FOR WORK • ${monthYear} •`;
}
