//your JS code here. If required.
// Get all the panels
const panels = document.querySelectorAll('.panel');

// Function to remove 'active' class from all panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

// Add click event listener to each panel
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
