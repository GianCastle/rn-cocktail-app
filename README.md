# rn-cocktail-app
- A simple app that searchs your favorite cocktails 🍸

# Requirements 📝
- Yarn package manager
- Expo v.35
- Make sure you have an Android or iOS device with Expo Client installed. Also, you can use an Android or iOS emulator 
  
# Project Structure 🕋
- RN-COCKTAIL-APP
  - Components -> here lives our dummy components
  - Domain -> on this folder lives our application Entities (like an API response structure, mappers structure, etc.)
  - Screens -> this folders live our applications screens
  - Utils -> here we define our utilities functions 
- App -> our app entry point
- routes.ts -> here we define the routes

# Dependencies (what and whys)
- **Redux** as our global state container and also is being a strong influencer of the complete project structure of our application. To be honest, using Redux in an application of this size only creates an unnecessary abstraction (which can also be called complexity). React provide us the Context API and Suspense with which we can solve the same needs that we solve with Redux (to have a global state, asynchronous actions, etc.).
- **Redux Thunk** middleware, for handling async actions (like Promises) or functions that returns other functions (that's the meaning of a Thunk). Redux works synchronously, so we need to inject into the store configuration.
- **React Navigation Hooks** I love hooks and the functional components approach in React. ~However, I didn't use as much as I would like because I had a weirdo bug during the development of this mini-app. So, in the the project you will see that is using Class Components and also Functional Components.~
- **Typescript** Who is not using Typescript on 2019? Just kidding... Typescript is the way to go. With TS you can create Types not only your components (like that you will do with PropTypes) but also you can create Types **for every aspect of your application** (like some API Service, your utilities, tests, etc.). This typing system automatically create some kind of autodocumentation on the project. So it's a must on projects which has some kind of complexity on it. However, on small project... in my opinion, developers tends to create some [Syntax Noise](https://en.wikipedia.org/wiki/Syntactic_noise)

# How to run ❓
- clone this repo `$ git clone git@github.com:GianCastle/rn-cocktail-app.git`
- `cd rn-cocktail-app` and run `yarn install`
- Run `yarn start`. If you have an iOS or Android Simulator. You will find more details about how to open the emulator on it.
- If you have Expo installed on your Android or iOS device. You just need to scan the QR code that shows in the terminal once you run `yarn install`. It will open automatically the application on the Expo Client.

# Devices tested 📱
- iPhone XS 64GB
- iPhone 11 Pro Max 64GB
  
# I want to eject because the project requires a specific Native Module that Expo doesn't support ... 🤔
- Run `yarn eject` and make it a React Native CLI app. 
