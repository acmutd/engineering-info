# Documentation
Writing documentation is perhaps one of the most important parts of working in a team environment. In this readme we will dicuss the _5_ key domains that will shed light on the best practices that we at the _Assosication for Computing Machinery_ seek to follow. 

 - __What__ to document
 - __Where__ to document
 - __Why__ to document
 - __Whom__ we document for
 - __When__ to document

### Who do we document for?

Our documentation should focus on addressing the needs of _3_ primary stakeholders in a given project. It can appear daunting to write documentation when there is a lack of clarity about the target audience. To cast light on the people reading we can broadly group them into the following hierarchical categories.

##### Categories
 - Development Team
 - Organizational Partners
 - Outside Community

We can analyze the needs of each of these groupings and thereby understand how best to address them through our documentation. Below is a short description of each of the groupings, detailed explanations of why each is relevant is covered in the [why](./documentation.md) section.

###### Development Team
The development team comprises of yourself and your fellow contributors to the project. Your team works on a daily basis with the code and is more familiar with the intricate inner workings of it than anyone else. 

###### Organizational Partners
Partners at the organizational level correspond to the people who may not be directly involved in your project but have an active presence and interest in its development. Typically these include senior leadership, marketing & sales teams, and developers that may be working on other projects. Together all of these people have a strong vested interest in the success of the project. In mant situations these partners may be the end users of the application being created.

###### Outside Community
The outside community represents all people that may show a curious interest in learning more about this application but are not involved in the direct creation, maintainance or usage of the software. As projects gain a strong foundation and start moving in the direction of becoming open source the outside community starts to pick up in importance. 

### What do we document?


### Where do we document?

Documentation exists in a variety of different forms. We need to care about each of them to ensure we maximize the value gained. Tasks, issues, calendars, schedules, progress, technical architecture and the many more forms dicussed early in the [what]() we document section are not all stored in the same place. The ideal locations for each type of information need to adequately satisfy the _4_ crucial facets. CRUD.
 - Create
 - Read
 - Update
 - Delete

The first thought here might be that isn't CRUD the role of an application or database? That is correct, our documentation much like an application satifies a need and the location it is available at needs to ensure that those _4_ actions are possible. Below we will discuss where we at _ACM_ store our various documentation and how those locations meet the requirements listed. 

##### Github
GitHub is at the heart of where our technical documentation is stored. The vast majority of information required for all relevant stakeholders can easily be accessed and modified with the tools available on GitHub. 

 - Repositories
   - Repositories are the central towards storing our documentation. Many _ACM_ repositories are dedicated solely towards preserving information and changes to how we operate. Examples of this include the _ACM Development_ repository which hosts all the resources required for the divison and the _ACM Brand_ repository which hosts all design assets and instructions on maintaining the public image of _ACM_.
 - Readme
   - This may seem fairly obvious but creating Readme documents and placing them in appropriate locations is a simple point to be really emphasized. A key point to stress here is that a repository may contain multiple readme documents. As a project scales and grows in size, it may be difficult to document all relevant information into a single file. Much like code, treat a single large readme as an overgrown class and break it down into smaller easily digestable components. Ideally a project should contain a short but quick start readme at the root level and additional readme files in individual folders as close to the code that it contains documentation on.
 - Wiki
   - Sometimes information can exceed the available space on a readme. Sometimes it can be related to non-technical issues that not find an appropriate place along with the code. To remedy these situations we have Github Wikis. Information here should be directly related to the project. This may be help guides, historical or contextual information, best practices, documentation metadata, etc. 
 - Issues
   - GitHub issues are an effective way to track future work that needs to be completed and provide an estimate for completion times. It also provides non-development stakeholders a simple way to view the task lists for the issues and understand what will be addressed in the code. 
 - Project Boards
   - Project boards assist in tracking issues over time. It provides structure to the team operations and easily allows tasks, issues and other responsibilities to be assigned to teama members. Projects boards can exist at multiple levels and its important to ensure that relevant information is carefully distributed across them. Individual projects can have their own technical project boards as can an entire organization. Separating the concerns will allow the developers to quickly find relevant information and make progress. Additionally, its important to know that project boards can also serve to track non-technical tasks too and therefore at a big picture level it may be useful to keep two or more project boards for the same team but divide the tasks in them based on the type.
 - Pull Requests
   - _ACM_ prides itself on ensuring that all pull requests are detailed and contain all the relevant information required to understand the changes made to the codebase. This applies not just to repositories that contain code but also additionally to the repositories where we store our documentation, assets and additional resources. 

##### Other Locations
While GitHub satisfies many needs, there are other locations where we store our documentation. It is important to not only be aware of them but to use the knowledge of their pros/cons to make effective decisions in deciding where to save/search information. The list of services listed here is an attempt in making an exhaustive list but as time passes this may change and if you as an officer use a tool not present here we request that you please update the readme to include it.

 - Google Drive
   - An ideal location for storing confidential documents thaat reserved for officers. Brand assets and resources used for development should be moved from drive onto GitHub for easy access. Long term information persisted for future years may continue to remain on drive.
 - Email
   - Email should be reserved for official communication with _ACM_ partners and when doing outreach outside the organization. Collaborating on documents, sharing resources and assets should preferably be done through google drive.
 - Slack
   - Use slack as the primary resource for communcation for fellow officers. When communicating with fellow officers we strongly recommend following certain guidelines and etiquettes. Our strength comes through working together as a team and therefore we want our interactions to be open, transparent and collaboraative. Towards making progress in that direction, we emphasize communicating on team channels instead of direct messages. Even if solving a bug, working on a task, debating a topic may only concern two individuals, keeping discussions on an open forum will allow greater insight & perspective from the rest of the team. However, while slack exists as an excellent form of quick communication between officers, avoid storing information or documents on there and instead when dealing with important matters migrate the content over to a more appropriate location such as google drive or github.
 - Discord
   - An open forum for communication with all _ACM_ members. Primarily used for voice communication & sharing live content. As mentioned in the comment about slack, avoid saving content or files on discord and instead migrate the same content over to a more appropriate location.
 - Notion
   - Workspace being created...
 - Trello
   - An alternative to GitHub issues & project boards
 - YouTube
   - Location for saving livestreams, workshops and other streamed content. 

### Why do we document?

### When do we document?