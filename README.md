# My React and Strapi Integration

This project demonstrates how to set up a Strapi backend and integrate it with a ReactJS frontend to fetch and display content from Strapi.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Git

## Setup Instructions

### 1. Setting Up Strapi

#### Step 1: Create a New Strapi Project

```bash
npx create-strapi-app my-project --quickstart
This command will create a new Strapi project with a default configuration.

Step 2: Access the Strapi Admin Panel

Navigate to http://localhost:1337/admin in your browser and create an admin user to access the Strapi admin panel.

Step 3: Create a Content Type

In the admin panel, go to the "Content Type Builder".
Create a new collection type called Article.
Add fields for Title (Text) and Content (Rich Text).
Save your changes.
Step 4: Add Content

Go to the "Content Manager".
Select the Article collection type and click "Add New Article".
Fill in the title and content fields, and click "Save".
Make sure to publish the article.
Step 5: Set Permissions

Go to "Settings" -> "Roles" -> "Public".
Enable the find and findOne permissions for the Article collection type.
Save the changes.
2. Setting Up React
Step 1: Create a New React Project

bash
Copy code
npx create-react-app my-react-app
This command will create a new React project.

Step 2: Create an API Utility File

Create a file called src/api.js and add the following code:

javascript
Copy code
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/articles');
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
Step 3: Update the React Component

Update src/App.js with the following code:

javascript
Copy code
import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const articles = await fetchData();
        setData(articles);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
3. Running the Projects
Step 1: Start the Strapi Server

Navigate to your Strapi project directory and run:

bash
Copy code
cd my-project
npm run develop
Step 2: Start the React Development Server

Open a new terminal, navigate to your React project directory, and run:

bash
Copy code
cd my-react-app
npm start
4. Viewing the Application
Open http://localhost:3000 in your browser to see the ReactJS application fetching and displaying data from Strapi.

