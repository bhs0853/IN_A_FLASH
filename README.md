
# In A Flash

**Developed a single-page frontend web app for an online food ordering platform using React.js.**

- **Designed reusable frontend components** to optimize package bundle size.
- **Implemented React Hooks** in functional components, enhancing maintainability and reducing code complexity.
- Developed multiple pages including a cart, utilizing **React-Router for seamless navigation**, improving user flow and experience.
- Integrated **Swiggy public APIs for real-time server data retrieval**.

**Technologies Used:** React.js, Redux, React Router, Tailwind CSS, Parcel, Git, VS Code

# Features

## Home Page
- Displays a list of restaurants in your location.

## Cart Section
- Displays all the items added to the cart.
- Shows the total cost of the items.
- Provides the estimated time of delivery.

**All the above features are achieved using the Redux store (React-Redux).**
- **Used Redux store** as a centralized store to manage cart items.

## Restaurant Section
- **Displays Restaurant Information:**
  - Name, Address
  - Estimated Delivery Time (ETA)
  - Rating of the restaurant
- **Menu:**
  - The first set of the menu displays popular food items from the restaurant.
  - The next set of items are displayed according to their category.
  - Items can be added to the cart.
  - **Used Redux store to handle the cart.**

**Utilized Swiggy public APIs for fetching restaurant lists and restaurant menus.**

# Learnings from this Project

- **Set up a React app manually** instead of using the traditional create-react-app.
- **Used different bundlers** to build the app and utilized Parcel as the bundler.
- **Gained knowledge about dependencies and package managers (npm).**
- **Integrated API data** with the web app to make it dynamic, gaining exposure to real-world API handling in the frontend.
- **Handled data layers and UI layers**, understanding the need for centralized data stores to ease the development process.
- **Integrated CSS libraries** to build responsive and engaging UIs, enhancing user experience.
- **Implemented custom hooks**, learning their importance.
- **Learned about dynamic routing**, accessing device network states, hot module replacement, and more.

This project not only honed my technical skills but also gave me practical exposure to real-world web app development challenges and solutions.

## How to run the project
**To experience the webapp clone the project and run the below commands**

#### Step1: Clone the project to your PC and open the terminal.


####  Step 2: Install the Required Node Modules (Dependencies)

Run the following command to automatically install all the dependencies:
```bash
    npm install
```

#### Step 3: Enable CORS in your web browser. 
- This is necessary because we use Swiggy APIs to fetch the data.
- By default, web browsers block CORS requests for security reasons.
- For Google chrome use the below extension [CORS extension](https://chromewebstore.google.com/detail/digfbfaphojjndkpccljibejjbppifbc)
#### Step 4: Run the Project
```bash
    npm run start
```

#### Enjoy exploring all the features of this app! 😇
    

