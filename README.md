<h1>Get Out, Austin<h1>

<p align="center">
    <img src="images/getoutaustin.gif" alt="demo">
    <br/>
    <br/>
    <br/>
    <p align="center">
        <a href="https://get-out-austin.now.sh/">View Demo</a>
    </p>
    
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Lessons Learned](#lessons-learned)
- [Code Snippets](#code-snippets)
- [The Team](#the-team)

<!-- - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation) -->

<!-- * [Contributing](#contributing)
* [Contact](#contact) -->

## About The Project

<ul>
    <li>
    Get Out, Austin is an Airbnb Experiences style web app that allows customers to book and post events around Austin, Texas. Get Out, Austin employs many technologies from the React ecosystem: Next.js for server-side rendering, React Hooks for stateful components, Context API for state management, Material-UI for interface design, and more.  </li>
    <br>
<li>Get Out, Austin was developed with mobile-first and user-friendly design at the forefront. With an attractive and straightforward UI,  customers can easily navigate the site on any device. Get Out, Austin integrates microservices commonly found in enterprise sites. Locations are displayed using MapBox, payments are processed and authorized using the Stripe API, user registration integrates Google Firebase. </li>
<br>
<li>The back-end of the application uses a PostgreSQL database hosted on AWS RDS. Allowing the front-end to access this information required the creation of a REST API on a node server. Our Express server is hosted on EC2 using NGINX and pm2. The client-side of our application is hosted on Vercel. This hosting platform allows us to take advantage of the unique life-cycle methods from Next.js. The application takes advantage of server-side rendering, allowing for better SEO and client performance. </li>
</ul>

## Built With

<h3>Tech:</h3>
<ul>
    <li>Next.js</li>
    <li>React</li>
    <li>JavaScript</li>
    <li>Material-UI</li>
    <li>Formik</li>
    <li>MapBox</li>
    <li>Google Firebase</li>
    <li>Stripe Payment</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>PostgreSQL</li>
    <li>Sequelize</li>
    <li>Vercel</li>
    <li>AWS EC2</li>
    <li>AWS RDS</li>
</ul>

<h3>APIs:</h3>
<ul>
    <li>Custom REST API</li>
    <li>MapBox</li>
    <li>Google Firebase</li>
    <li>Stripe</li>
</ul>

<h2><u>MVP(minimum viable product):</u></h2>

<ul>
    <li>Next.js/React client with ability to create and view experiences.</li>
    <li>Node.js/Express server to perform CRUD operations on PostgreSQL db.</li>
    <li>Attractive and Straightforward UI.</li>
</ul>

<h2><u>Stretch Goals Completed:</u></h2>
<ul>
    <li>User authentication with Google Firebase</li>
    <li>Payment validation with Stripe.</li>
    <li>Displaying experience location through MapBox.</li>
</ul>
<br/>

## Code Snippets

## Project Takeaways

<ol>
    <li>An application's tech stack should be chosen to fulfill the need of the site. At the start of the project, we were excited to use new technologies, but they ended up not being best for what we wanted to achieve. In the end, using tech we had more experience with and that's more established in the ecosystem helped the success of our project. </li>
    <li>Server-Side rendering (and Next.js) is awesome! We saw firsthand how delivering rendered code to the client instead of a huge JS bundle increases speed. Our site is super fast and does well on performance tests. Having the benefit of improved SEO and in-built routing with Next.js was the cherry on top. Going forward we plan to use Next.js for more projects.</li>
    <li>Working with all React Hooks was a joy. This is the first project we exclusively used Hooks, and we now see the benefit. Using functional components improved both our code's readability and reusability. It brought about small performance improvements as well. Hooking into Context was beneficial for storing essential information globally. Going forward we plan to move in the same direction as the React Dev Team and continue using Hooks. /li>
</ol>

</br>

## The Team

<h3>Austin Denny</h3>
<b>Team role:</b> React, Context API, Next.js, Node.js, Express, PostgreSQL, AWS, Stripe,Firebase, MapBox. 
</br>

<h3>Daniel Dolan</h3>
<b>Team role:</b> React, JavaScript, Context API, Next.js, Node.js, Express, PostgreSQL, AWS, Formik, MapBox. 
</br>
</br>
</br>
