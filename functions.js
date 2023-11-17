// Get the input element
const input = document.getElementById('card-number');

// Add an event listener for the input event
input.addEventListener('input', (event) => {
  // Store the cursor position
  const cursorPosition = event.target.selectionStart;

  // Remove any non-digit characters from the input value
  const inputValue = event.target.value.replace(/\D/g, '');

  // Add a space after every 4 numbers
  let formattedValue = '';
  for (let i = 0; i < inputValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' ';
    }
    formattedValue += inputValue[i];
  }

  // Limit the length to 19 characters (16 digits and 3 spaces)
  const truncatedValue = formattedValue.slice(0, 19);

  // Update the input value
  event.target.value = truncatedValue;

  // Adjust the cursor position after the space
  const adjustedCursorPosition = cursorPosition + Math.floor(cursorPosition / 4);

  // Restore the cursor position
  event.target.setSelectionRange(adjustedCursorPosition, adjustedCursorPosition);
});