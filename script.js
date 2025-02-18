//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
    // Get the block ID and color from the input fields
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the specified grid item
    const selectedItem = document.getElementById(blockId);
    if (selectedItem) {
        selectedItem.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID. Please enter a number between 1 and 9.');
    }
});

// Reset button functionality
document.getElementById('reset_button').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});