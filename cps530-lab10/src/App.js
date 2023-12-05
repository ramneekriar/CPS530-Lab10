import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Lab 10 - Problem 3</h1>
      </header>
      <div className="App">
        <div className="App-installation">
          <h2>React Installation Process</h2>
          <div className="App-step">
            <span>1. Installed node from https://nodejs.org/en</span>
          </div>
          <div className="App-step">
            <span>2. Created a repositoty on github to hold my work</span>
          </div>
          <div className="App-step">
            <span>3. Used the command </span>
            <span className="App-code">npm install create-react-app</span>
            <span>to install the react framework</span>
          </div>
          <div className="App-step">
            <span>4. Used the command </span>
            <span className="App-code">npx create-react-app cps530-lab10</span>
            <span>to create a react project</span>
          </div>
          <div className="App-step">
            <span>5. Used the command </span>
            <span className="App-code">cd cps530-lab10</span>
            <span>to navigate to the react project directory</span>
          </div>
          <div className="App-step">
            <span>6. Used the command </span>
            <span className="App-code">npm run start</span>
            <span>to launch the development server</span>
          </div>
          <div className="App-step">
            <span>7. Modified the default App.js and App.css files with my own jsx and css code </span>
          </div>
          <div className="App-step">
            <span>8. Modified the default App.js and App.css files with my own jsx and css code </span>
          </div>
          <div className="App-step">
            <span>9. Push my code to my github repository using the following commands:</span>
            <div style={{marginLeft: "140px", marginTop: "8px"}}><span className="App-code">git add .</span><span> -- to stage all the new or modified files</span></div>
            <div style={{marginLeft: "140px", marginTop: "8px"}}><span className="App-code">git commit "commit message goes here"</span><span> -- to commit all changes with a brief description</span></div>
            <div style={{marginLeft: "140px", marginTop: "8px"}}><span className="App-code">git push main.</span><span> -- to push all changes to the repo's main branch</span></div>
          </div>
          <div className="App-step">
            <span>9. Create a Netlify account using my github credentials and deploy project</span>
          </div>
        </div>
        <div className="App-problems">
          <h2>Difficulties Encountered & Solutions</h2>
          <div>
            <h3>1. Installing the create-react-app Package</h3>
            <p className="App-paragraph">Although I had node installed, when I tried to run the command npx create-react-app cps530-lab10, it was giving me an error. This was because when I had installed react (npm install create-react-app) 
              I was running version 5.0.0 of create-react-app which was outdated. To get the latest version, I uninstalled the create-react-app package completely (npm uninstall -g create-react-app) and then installed it again (npm install create-react-app). I was then able to run 
            </p>
          </div>
          <div>
            <h3>2. Learning React</h3>
            <p className="App-paragraph">At first glance, I did not understand the react project structure. I had to read react documentation to understand that App.js and App.css controls the main layout of the page, consisting of JavaScript components HTML that you return.
            After taking the time to learn this, I began development. Index.html controls the landing page that the user lands on so I made changes there such as the title of the web page.As my project was a simple web page detailing my experience using react, I found it easy 
            to apply my previous knowledge of HTML and CSS learned within the course here.
            </p>
          </div>
          <div>
            <h3>3. Hosting my Project</h3>
            <p className="App-paragraph">I wanted to find an inexpensive way to host my website for the purpose of the lab, and had to spend time researching the different options that are available. I came across Netlify, which easily integrates with your existing github account.
            From there, you can select a repository to host and it will do the work for you, deploying your website on a Netlify domain. The main problem was finding the right host to choose from the variety that are available, but using Netlify made the hosting process significantly easy. 
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
