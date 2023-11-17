// Get the input element
const input = document.getElementById('card-number');

// Add an event listener for the input event
input.addEventListener('input', (event) => {
  // Store the cursor position
  const cursorPosition = event.target.selectionStart;

  // Remove any existing spaces from the input value
  const inputValue = event.target.value.replace(/\s/g, '');

  // Add a space after every 4 numbers
  const formattedValue = inputValue.replace(/(\d{4})/g, '$1 ');

  // Update the input value with the formatted value
  event.target.value = formattedValue;

  // Restore the cursor position
  event.target.setSelectionRange(cursorPosition, cursorPosition);
});
