
---

# Photo Gallery App

This project is a simple photo gallery application built with React. It displays a collection of images with overlays containing titles, descriptions, and "Know more" links.

Project Structure
The code for the photo gallery is located in the src folder:

Gallery.js: This file contains the main React component that renders the photo gallery.
Gallery.css: This file contains the styles for the photo gallery.

## Getting Started

To get started with this project, clone the repository and run the following commands:

```bash
npm install
npm start
```

This will install the necessary dependencies and start the development server. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---





# Array Manipulation Coding Challenge

Problem Statement
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

Example
Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.

Constraints:
- The array will contain between 1 and 100,000 elements.
- The elements in the array and the target sum will be between -1,000,000,000 and
1,000,000,000.
Expected Time Complexity: O(n), where n is the length of the array.
Expected Space Complexity: O(1).

How to Run the Code
Open Terminal in VSCode:

1.Press Ctrl + (backtick) to open the integrated terminal in VSCode.
    Navigate to the Project Directory:

2.Change the directory to where your arrayMap.js.js file is located. For example:
    cd C:\Users\xxx\Desktop\photo-gallery\Challenges
    Run the JavaScript File:

3.Use the node command to run your JavaScript file:
    node How to Run the Code
    Open Terminal in VSCode:

4.Press Ctrl + (backtick) to open the integrated terminal in VSCode.
    Navigate to the Project Directory:

5.Change the directory to where your arrayMap.js file is located. For example:
    cd C:\Users\xxx\Desktop\photo-gallery\Challenges
    Run the JavaScript File:

6.Use the node command to run your JavaScript file:
    node arrayMap.js

Example Output
true


# String Transformation

Problem Statement
 Given a string, transform it based on the following rules:
    ● If the length of the string is divisible by 3, reverse the entire string.
    ● If the length of the string is divisible by 5, replace each character with its ASCII code.
    ● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
    both operations in the order specified above.

Example:

Input: "Hamburger"
Output: "regrubmaH"
Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "regrubmaH".

Example: Input: "Pizza"
Output: "80 105 122 122 97"
Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15.
Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".

Example: Input: "Chocolate Chip Cookie"
Output: "eikooCpihCetalocohC"
Explanation: The length of the string is 21, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".

Constraints:
● The string will only contain alphanumeric characters and spaces.
● The length of the string will be between 1 and 1000.
Expected Time Complexity: O(n), where n is the length of the string. Expected Space
Complexity: O(n), where n is the length of the string.

How to Run the Code
Open Terminal in VSCode:

1.Press Ctrl + (backtick) to open the integrated terminal in VSCode.
    Navigate to the Project Directory:

2.Change the directory to where your arrayMap.js.js file is located. For example:
    cd C:\Users\xxx\Desktop\photo-gallery\Challenges
    Run the JavaScript File:

3.Use the node command to run your JavaScript file:
    node How to Run the Code
    Open Terminal in VSCode:

4.Press Ctrl + (backtick) to open the integrated terminal in VSCode.
    Navigate to the Project Directory:

5.Change the directory to where your stringTransform.js file is located. For example:
    cd C:\Users\xxx\Desktop\photo-gallery\Challenges
    Run the JavaScript File:

6.Use the node command to run your JavaScript file:
    node stringTransform.js

Example: Output:
regrubmaH
8010512212297
eikooC pihC etalocohC


