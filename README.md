## Step 1: Setting Up HTML and CSS
Linking CSS: In the <head> section of the HTML file, link the CSS file to style the webpage.

Adding Elements:

A <h1> tag is added to display the title of the page.
<p> tags are used to display messages and information such as the initial message, cards, and sum.
Buttons are added to start the game and draw new cards. These buttons are linked to JavaScript functions (start() and newCard()).

## Step 2: Styling the Body
Background Color: Set the background color to a dark green (#016f32).
Font Styling:
Font Weight: Make all text bold.
Text Color: Change text color to white.
Background Size: Ensure the background covers the entire screen.
Text Alignment: Center all text on the page.

## Step 3: Styling Specific Elements
Heading (h1) Styling:

Text Color: Set the color of the heading to orange (rgb(228, 132, 14)).
Font Style: Remove any default font style settings.
Message Styling (#messages-el):

Font Style: Apply an italic font style to the messages.
Button Styling:

Text Color: Set the text color to dark green (#016f32).
Width: Set the button width to 150 pixels.
Background Color: Set the background color to orange (rgb(228, 132, 14)).
Padding: Add 5 pixels of padding.

## Step 4: Player Information and Game Variables
Player Information: Store the player's name and chips.
Game Variables: Track the player's cards, the sum of card values, whether the player has Blackjack, and whether the player is still in the game.

## Step 5: JavaScript Functionality
HTML Elements Connection:

Connect to specific parts of the webpage to update messages, cards, sum, and player information.
Display Player Info: Show the player's name and chip count on the webpage.

Get Random Card: Generate a random card value, adjusting values to fit Blackjack rules (e.g., face cards are worth 10, Ace can be 11).

Start Game: Initialize the game by setting the player as active, drawing two cards, calculating their sum, and updating the display.

Render Game: Update the display with the current cards and their sum. Set the appropriate game message based on the sum.

New Card: Allow the player to draw another card if they are still active and haven't hit Blackjack. Add the new card to the hand, update the sum, and refresh the display.

## Sources
Scrimba Videos
ChatGPT
YouTube Videos