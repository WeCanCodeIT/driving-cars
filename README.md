# Basic Browser JavaScript - Cookie Click Counter Calamity

###### A tribute to [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/)

## The Scenario - Welcome to Coo Coo Computing Challengers!
You have been contracted by Coo Coo Computing Challengers to take a concept, Click Counter Calamity, from the drawing board to the browser. Coo Coo Computing Challengers is a company that spends more time creating alliterative puns than actual writing software and they need our help.  They want you to create a webpage that keeps track of user clicks, but they have some strange requirements for _'Clicking Companions'_ and _'Collective Culmination Compounders'_.  They have a list of requirements for us, but they are too busy trying to change the words in their company's mission statement to words that start with the letter 'C' exclusively to give us guidance on how to implement these requirements.

## The Application Requirements
- [ ] You must create a website that tracks the amount of times the clicking button has been clicked.
    - [ ] Create a button in the browser to click.
    - [ ] Create a section on the page that interacts with the _'Clicking Companions'_.
      - [ ] Displays the amount of _Clicking Companions_ purchased.
      - [ ] Provides a button to purchase _Clicking Companions_.
      - [ ] Button is disabled when you do not have enough clicks to buy a _Clicking Companion_.
    - [ ] Create a section on the page that interacts with the _'Collective Culmination Compounder'_.
      - [ ] Displays the amount of _Collective Culmination Compounder_ purchased.
      - [ ] Provides a button to purchase _Collective Culmination Compounder_.
      - [ ] Button is disabled when you do not have enough clicks to buy a _Collective Culmination Compounder_.
- [ ] Have a function that returns the click count.
- [ ] You must implement a feature called _'Clicking Companions'_.
    - [ ] _Clicking Companions_ are bought with clicks from your click total.
    - [ ] Each _Clicking Companion_ that is purchased increases the cost of the next _Clicking Companion_.
    - [ ] The initial cost should be around 100 clicks.
    - [ ] For each _Clicking Companion_ that has been purchased the count of clicks goes up by one every second.  This is a cumulative effect, so having 100 _Clicking Companions_ would result in having 100 clicks automatically added to the total every second.
      - [ ] Have a function that adds the amount of _Clicking Companions_ to the click total.
      - [ ] Inside your game loop, call the above function every second.
- [ ] You must implement a feature called _'Collective Culmination Compounders'_.
  - [ ] _Collective Culmination Compounders_ are bought with clicks from your click total.
  - [ ] Each _Collective Culmination Compounder_ that is purchased increases the cost of the next _Collective Culmination Compounder_.
  - [ ] The initial cost should be around 10 clicks.
  - [ ] The first _Collective Culmination Compounder_ increases the value of a click from `1x` to `1.2x`.
  - [ ] Every subsequent _Collective Culmination Compounder_ increases the value of a click exponentially.  For example, the second _Collective Culmination Compounder_ will increase the value of a click to `1.2x * 1.2x` or `1.44x`.
- [ ] You must be able to reset the game state.  This action should reset the game to zero clicks, zero _Clicking Companions_, and zero _Collective Culmination Compounders_.
- [ ] This website also has some other requirements:
  - [ ] Use semantic html and BEM when writing your html so that in the future we have a solid base to expand upon.
  - [ ] You must have a header for this page.  It should have a few of the following features:
    - [ ] It should have a hamburger button that expands a navigation menu.
    - [ ] A navigation menu that when clicked will expand sections about:
      - [ ] Coo Coo Computing Challengers
      - [ ] The inspiration for this game, Cookie Clicker.
      - [ ] Your contact info.
  - [ ] Deploy your project so that it is reachable on the internet.

## Iterations
Each iteration will focus on building out a part ot the game.  The first iterations will focus on the logic that is needed to have a game.  The latter will take us into linking the JavaScript into our website.

### Iteration 1

This iteration covers project setup and starting the creation of the game.  Are first iterations are going to focus on the logic that is needed to have a game.  The JavaScript for this iteration will be solely in a ClickCounter.js file and not pertain to the html page.  We need to code some behavior before we can code the way the user interacts with the project.

#### FEATURE : Use Test Driven Development to create this game.
> As a developer, I want to use TDD to create this game, so that I know it is working as intended.
- Create a ClickCounter.spec.js file in the `/spec/js` folder.
- Create and set up a Jasmine spec runner for ClickCounter.js.

#### FEATURE : Have a way to count clicks.
> As a user, I want to know how many clicks I have clicked, so that I know what my score is.
- Can record a click.
- Can retrieve a click count.

#### FEATURE : Be able to purchase the first _Clicking Companion_ with 100 clicks from your click count.
> As a user, I want to be able to purchase _Clicking Companions_, so that I don't have to keep clicking a button all day.
- Can retrieve a _Clicking Companion_ count.
- Can add to the _Clicking Companion_ count.
- Subtract the amount of the _Clicking Companion_ cost from your click count.

#### FEATURE : The cost of each _Clicking Companion_ will go up with each purchase.
> As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.
- Increase the cost of the second _Clicking Companion_ by an additional ten percent to 110.
- Increase the cost of every additional _Clicking Companion_ by an additional ten percent.

#### FEATURE : Ensure that there are enough clicks to buy a _Clicking Companion_.
> As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a _Clicking Companion_, so that the game has a challenge.
- Prevent the _Clicking Companion_ count from going up if there are not enough clicks to purchase a _Companion_.

#### FEATURE : The amount of _Clicking Companions_ affect the amount of clicks added when an 'Add auto clicks' event is called.
> As a user, I want to be able to purchase _Clicking Companions_, so that I don't have to keep clicking a button all day.
- When the 'add auto clicks' event is executed, add the amount of _Clicking Companions_ to the click total.

### Iteration 2
This iteration covers the creation of the _Collective Culmination Compounders_, the higher your _Collective Culmination Compounders_ count the more each click you take is worth.

#### FEATURE : Be able to purchase the first _Collective Culmination Compounder_ with 10 clicks from your click count.
> As a user, I want to make my clicks more powerful, so that I can make the work to get more _Clicking Companions_ easier.
- Can retrieve a _Collective Culmination Compounder_ count.
- Can add to the _Collective Culmination Compounder_ count.
- Subtract the amount of the _Collective Culmination Compounder_ cost from the click count.

#### FEATURE : The cost of each _Collective Culmination Compounder_ will go up with each purchase.
> As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.
- Increase the cost of the second __Collective Culmination Compounder_ by an additional ten percent to 11.
- Increase the cost of every additional _Collective Culmination Compounder_ by an additional ten percent.


#### FEATURE : Ensure that there are enough clicks to buy a _Collective Culmination Compounder_.
> As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a _Collective Culmination Compounder_, so that the game has a challenge.
- Prevent the _Collective Culmination Compounder_ count from going up if there are not enough clicks to purchase a _Compounder_.

#### FEATURE : The first _Collective Culmination Compounder_ should increase the value of a click 1.2x.
> As a user, I want to make my clicks more powerful, so that I can make the work to get more _Clicking Companions_ easier.
- Increase the amount of clicks added to the click count by 1.2 after the first _Compounder_ is purchased.

#### FEATURE : The amount the subsequent _Collective Culmination Compounders_ click bonus will go up exponentially.
> As a CEO, I want my players hard earned _Collective Culmination Compounders_ to make a big impact, so that they keep playing the game.
- Increase the click value multiplier to 1.2 to the _x_th power, where _x_ is the amount of the _Compounders_ count.

#### FEATURE : The _Collective Culmination Compounders_ click bonus will apply to clicks from the _Click Companions_.
> As a user, I want to see my click investments work together to get me more clicks, so that I can have all the clicks.
- When an 'Add auto clicks' event is executed, increase the value of each auto click by the amount of the click value multiplier.

### Iteration 3
This iteration will prepare the html document for the game.  Open the index.html file and start adding the elements you'll need.  Maintain the structure of the HTML with semantic html elements and use BEM to give useful class attribute names to your elements.  Use a combination of HTML, CSS, and JavaScript to achieve the trickier features below.

#### FEATURE : Create a button to click.
> As a player, I want to have a button to click, so that I can start clicking things.
- In the main section of the page, create a button element.
- Label the button clearly as the button that needs to be clicked.

#### FEATURE : Create a click count element.
> As a player, I want to know how many clicks I have, so that I can track my progress.
- Create an element that will provide the user with the click count.

#### FEATURE : Create a section for the _Clicking Companions_
> As a user, I want to be able to buy and see how many _Clicking Companions_ I have, so that I don't have to keep clicking all the time.
- Create an section of elements that include a purchase button and a count of _Clicking Companions_.

#### FEATURE : Create a section for the _Collective Culmination Compounders_
> As a user, I want to be able to buy and see how many _Collective Culmination Compounders_ I have, so that my clicks can become super powered.
- Create an section of elements that include a purchase button and a count of _Collective Culmination Compounders_.

#### FEATURE : Create a header with a link to a drop down element with information about the Company.
> As the marketing director, I want the customers to be able to find out more information about Coo Coo Computing Challengers, so that they will buy more stuff from us.
- Create a header and add a link that will make a box of company info popup for the user.

#### FEATURE : Create a header with a link to the Inspiration of our game.
> As the game designer, I want to give gamers a reference to our inspiration, the original Cookie Clicker game, so that the legal department will stop complaining that we stole the idea.
- Create another link that will open a new tab with Cookie Clicker's address.

#### FEATURE : Create a header with a link to a drop down element with information about the Developer.
> As the developer, I want credit for writing this application, so that I can get a job.
- Create a modal element that is centered over the application and has a quick bio link about yourself and links to your portfolio and GitHub.com account.

### Iteration 4
This iteration will wire up your ClickCounter.js file to the index.html file and use the app.js file to link the two.

#### FEATURE : When you click the clicker button the click counter should change.
> As a user, I want to see my click score go up when I click the clicker button, so that I can be rewarded for my hard work.
- When the clicker button is pressed the click count element should change value.

#### FEATURE : The _Clicking Companions_ and _Collective Culmination Compounders_ purchase button should be grayed out and unresponsive if there are not enough clicks to buy the next item.
> As a game designer, I want the user to have a visual clue that they cannot perform a game action, so that the user isn't frustrated by clicking buttons that can not do anything.
- When the click count is below the cost of a purchasable item, grey out or change the appearance of the button.
- Clicking the button when an item is cannot be purchased should not perform any action.

#### FEATURE : The _Clicking Companion_ count and the _Collective Culmination Compounders_ count should be displayed.
> As a user, I want to know how many _Companions_ and _Compounders_ I have, so that I can brag to my friends.
- The amount of items purchased should be displayed in the same area as the button to purchase them.
- The amount of items purchased should be updated after each purchase.

#### FEATURE : The clicker button should display the current value of each click.
> As a user, I want to know how many clicks each click on the clicker button is worth, so that I can see the effect of the _Compounders_ on my clicking.
- Display the click multiplier value in the clicker button text or in an element somewhere close to the clicker button.

#### FEATURE : The _Clicking Companions_ and _Collective Culmination Compounders_ price in clicks should be displayed.  
> As a user, I want to know how many clicks I have to click before I can purchase a _Clicking Companion_ or _Collective Culmination Compounder_, so that I know when I get to stop clicking.
- Display the cost of the _Clicking Companions_ and _Collective Culmination Compounders_ in their purchase button or in an element nearby.
- Update the costs whenever the price is changed.

### Iteration 5 
This iteration is for you to individualize your project.  Use JavaScript to affect change to how your elements are displayed, add new features, document and make changes to the above rules, or make elements move across the screen.

#### FEATURE : Deploy your app to the internet.
> As a CEO, I want this app to be on the _INTERWEBS_, so that I can collect my bonus.
- Use GitHub pages to deploy your project to the internet.

#### FEATURE : Implement a way to reset the game.  
> As a user, I want to be able to reset my game, so that my coworkers won't know how much time I wasted on clicking a button.
- Have a way to stay on the same page, but reset the state of the game.

#### STRETCH FEATURE : Click Storm!  
> As a game designer, I want to have a random element that creates starts a _Click Storm_, so that users will be engaged in the page.
- On random intervals have a button pop up and when clicked it starts an event where random buttons worth 10 - 100 clicks appear on the screen and fade away after a few seconds.
- This event should end after a minute, maybe provide a timer.

#### STRETCH FEATURE : Purchasable background colors/images.
- Be able to change the appearance of the page, at a cost.

#### STRETCH FEATURE : Add sound.
- Put on a set of headphones and add some sound to the clicks and click count milestones.

#### STRETCH FEATURE : Adapt the requirements.
- Document the changes to the requirements you want to do and try to bring a better balance to the game.


## Development Environment Setup
[Setup Guide](https://wecancodeit-materials.netlify.com/exercises/mastery/module-4/development-environment-setup)

## Grading Rubric
[Grading Rubric Guidelines](https://wecancodeit-materials.netlify.com/exercises/mastery/module-4/grading-rubric)