# Overview

<!-- ### New York City Search Engine -->
### New York City Employee Promotions Finder

Find the 10 most recent promotions recrods for NYC's fire, police, and sanitation departments.
Create Read Update and Delete Users. Create Read and Delete Favorites. 

### Architecture 

5 microservices that are dockerized

## Eureka Server Registry
## Zuul Api Gateway
## Users Api
## Favorites Api
## Angular Frontend




<!-- The City of New York has a data API they would like to add a front-end to. `The API`
handles the ability to search for keywords or limit results you will be making
requests to this `API` and displaying it's results. On top of a front-end, the City
would also like the ability to save and manage User information (without any need for authentication).

The city has requested proposals for a solution to their problem. Your assignment is to build and execute on a solution, from proposal through delivery.

This is the current site, use this as your jump off point:
https://a856-cityrecord.nyc.gov/


API Docs:

- https://dev.socrata.com/foundry/data.cityofnewyork.us/buex-bi6w
- https://dev.socrata.com/

API endpoints

- https://data.cityofnewyork.us/resource/buex-bi6w.json
- https://data.cityofnewyork.us/City-Government/City-Record-Online/dg92-zbpx/data


# Requirements

Your proposal must include (using this template):
- A description of the problem that the client has presented
- At least two personas of your users
- A clear problem statement from each persona
- What business problem are you trying to solve? Why do I need technology to solve this problem?
- Clearly present the technical requirements of solving the business problem
- A solution for a microservices solution
- Wireframes that demonstrate what the solution will look like
- How the microservices solution will solve the companies problem
- Defend your decision to build microservices rather than a monolith.
- Include an external case study that demonstrates a similar problem/solution -->


<!-- ****proposal***** -->
<!-- problem - The client is in need of a frontend ui with the ability to search promotion rates, limit  the results to 10 and order by the effective date of the promotion. The client would also like to create and manage user data

Joe, 41, M a policeman wants to find out what kind of promotions he can look forward to in the police department
Angela, 31, F is thinking about applying to the fire department and wants to know what the promotion rate looks like 

business problem - recruiting and retaining employees
why tech - cheap and efficient way for people to find out 

requirements - 1. a frontend that makes api calls and displays the results clearly. 
            2. a backend that manages User data. 

solution - create a JavaScript frontend and have a users api micro service that manages user information. Having a micro service will make it easy to manage if we need to add another service. 
This will allow users to create accounts and look up city records swiftly. 

A monolith would require more work to add services down the line. 
Seattle has implemented a similar solution  -->









<!-- Overall, your app must:
- Consist of a back-end and front-end application
- Have clean, maintainable code
- Contain at least one `feature` and `unit test` on the front-end or back-end, using the appropriate libraries.

### Back-end

- Use Spring to add a new Users service. You will need to add an API gateway and service discovery to direct traffic between the existing API and your new service.
- Create a Database to `view`, `save`, `update`, and `delete` records.

### Front-end:

- Build a SPA with Angular
- Communicate with your back-end API in order to manage User information
- Use components for reusable elements
- End to End UI tests

# Bonuses

- Build high-fidelity prototypes with a tool such as Figma or Sketch.
- Move your Flyway migrations into their own Docker container
- Style it up!
- Deploy your app to the cloud
- Include the ability to access data with API keys using some form of authentication.

# Deliverables (turned in on Schoology)
- A Proposal deck including:
    - The problem that the client has presented
    - User personas
    - Problem statements
    - Statement of the business problem
    - Technical requirements and implementation plan
    - Data to back up your solution
- Your code, hosted on Github with:
    - At least 30 commits
    - A `README.md` file containing (at least):
        - What the application is
        - How to start the app
        - How to run the tests
- A set of User Stories, hosted on Trello (or an equivalent tool)
    - You must actually USE your user stories, not simply write them at the beginning and leave them behind.
    - Make sure your Trello board is PUBLIC before turning in. --> 
