//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset");

    changeButton.addEventListener("click", function () {
        // Reset all grid item backgrounds to transparent
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.backgroundColor = "transparent";
        });

        // Get input values
        const blockId = document.getElementById("block_id").value;
        const color = document.getElementById("colour_id").value.trim();

        // Validate block ID (should be between 1 and 9)
        const block = document.getElementById(blockId);
        if (block && blockId >= 1 && blockId <= 9) {
            block.style.backgroundColor = color;
        } else {
            alert("Please enter a valid Block ID (1-9)");
        }
    });

    resetButton.addEventListener("click", function () {
        // Reset all grid item backgrounds to transparent
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.backgroundColor = "transparent";
        });

        // Clear input fields
        document.getElementById("block_id").value = "";
        document.getElementById("colour_id").value = "";
    });
});
