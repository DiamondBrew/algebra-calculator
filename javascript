// Function to pull the code from GitHub and render it instantly inside your website
function launchGame(gitHubUrl) {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    frame.src = gitHubUrl; // Directs the frame to run the GitHub code repository pipeline
    modal.style.display = 'block'; // Reveals the overlay screen
}

// Function to close the active game view and unload the codebase cleanly
function closeGame() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    modal.style.display = 'none'; // Hides the overlay screen
    frame.src = ""; // Flushes the frame buffer so the game sound stops playing
}
