# Text Based Pokemon Game

Text Based Pokemon Game is a simple pokemon website game that i created for the follow up interview assignment and to increase my frontend skills. This project not using any backend technology so you can see the data that send to the dummy server.

## Features

- User can Signup and Login.
- Any account have their own details.
- User can search for the pokemons and will randomly get the pokemon.
- User can show list of the pokemons that has been caught.
- User can release the pokemon.
- User can buy a pokeball.
- Responsive web design.

## Installation

After cloning my repositoriy to your local, install node modules that i used by:

```bash
  npm install
```

I'm using json-server modules on this project and it's installed to my global. I prefere to install the json-server globally by:

```bash
  npm install -g json-server
```

To run the server

```bash
  npm run server
```

To run the website

```bash
  npm run dev
```

## Technology Used

- React JS
- React Router DOM
- Redux
- Tailwind CSS
- Lottie React
- json-server

## My Overall Tought Process

This is the overall explanation how i code this project.

### Signup and Login

I start from the signup and login page, to see there's any username or email has been registered i'm using fetch to the json-server with get method with username and email params. If there's any account it will throw an error. But if is not, it will post email, username, password, details (ball, coins, attempts, pokemon catched) to the json-server.

For the login, the algorithm is similar with signup, if there's no any username it will throw an error. If there's an username it will check the password. The data will send to state in redux and user will go to the homepage.

### TopBar, SideBar, and HomePage

User Details on the TopBar and Home Page using asyncThunk in redux and the state will saved in the details state in redux. For the SideBar i just using a useState to show page are user in by change the button color. For the logout button, i just clear every globall state so the user will directlly move to the login page.

### Catch Pokemon Page

To catch the pokemon, there's 3 button that user need to choose and it will send data to userInput global state. If user not choose the ball the state is null so the catch pokemon button will disabled. The choose pokeball button will disabled to if user ball is less then 1. If user click catch pokemon button, it will rerender to loading screen. I'm using setTimeout to make the loading screen. For the algorithm of how i made pokemon randomly showed you can see in "/hooks/useCatchPokemon.js". When loading screen started, it will run function in useCatchPokemon and it will send a data to pokemon global state. If isCaught is true it will render a page that user can give nickname and save the pokemon to the json-server. If isCaught is false it will render a page that show an error and button to back to the Catch a Pokemon page.

### My Pokemons Page

When you render this page, it will fetch pokemon data with email params. So it will only show your catched pokemons. If you click release button, it will render popup box to confirm your decision of releasing the pokemon, if you confirm it will fetch with delete method to delete the pokemon on json-server.

### Shop Page

In this page you can buy a ball by click the wallet button, it will render a level 1 popup box. If the input value is less then 1 the confirm button is disabled. If the (input value \* price) is more than your coins the confirm button also disabled. When you click confirm button, it will change the popup box to the level 2. In this level it will show the confirmation popup box. If you click checkout button, it shows the level 3 popup box and it will fetch with patch method that decrease your coins and increase your ball. On this level 3 popup box you can close it by clicking the x button or close button.

## Contact

- Name: Juan Frederick
- Website: (https://juanfrederick.netlify.app/)
- Github: (https://github.com/juanfrederick)
