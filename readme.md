# Guess It

## Overview
This is a word guessing game where players are awarded points for correctly guessing a word displayed on the screen. The game uses the device's orientation sensors to detect tilt gestures for input. Multiple teams can play and enter their own team names.

## Features
- Display a word on the screen for the player to guess.
- Award points for correct guesses.
- Use device orientation sensors for gesture input (tilt up or down).
- Allow multiple teams to play and enter their own team names.
- Allow players to submit their own custom word list for the game to randomly select from.

## Requirements
- A device with orientation sensors (e.g., smartphone or tablet).
- Permission to access the device's orientation sensors.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/guess-it.git
    ```
2. Navigate to the project directory:
    ```sh
    cd guess-it
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the game:
    ```sh
    npm start
    ```
2. Grant permission to use the device's orientation sensors when prompted.
3. Follow the on-screen instructions to play the game.

## How to Play
1. Enter the names of the teams participating.
2. Submit a custom word list (optional):
    - The custom word list should be a CSV or TXT file with each word or phrase separated by a new line.
    - Example of a TXT file:
        ```
        apple
        banana
        cherry
        ```
    - Example of a CSV file:
        ```
        apple
        banana
        cherry
        ```
3. A word will be displayed on the screen.
4. Tilt the device up to submit your guess.
5. Tilt the device down to skip the word.
6. Points will be awarded for each correct guess.

## Scoring
- Each correct guess awards 1 point.
- No points are awarded for skipped words.
- The team with the most points at the end of the game wins.

## Gameplay Example
1. Team A and Team B enter their names.
2. Team A starts the game and a word is displayed on the screen.
3. Team A guesses the word correctly and tilts the device up. Team A is awarded 1 point.
4. The next word is displayed for Team A. They decide to skip and tilt the device down. No points are awarded.
5. Team B's turn begins and a word is displayed on the screen.
6. Team B guesses the word correctly and tilts the device up. Team B is awarded 1 point.
7. The game continues until all words are guessed or skipped.
8. The team with the most points at the end of the game wins.