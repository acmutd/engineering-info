# Documentation
Writing documentation is perhaps one of the most important parts of working in a team environment. In this readme we will dicuss the _5_ key domains that will shed light on the best practices that we at the _Assosication for Computing Machinery_ seek to follow. 

 - **Whom** we document for
 - **What** to document
 - **Where** to document
 - **Why** to document
 - **When** to document

### Who do we document for?

Our documentation should focus on addressing the needs of _3_ primary stakeholders in a given project. It can appear daunting to write documentation when there is a lack of clarity about the target audience. To cast light on the people reading we can broadly group them into the following hierarchical categories.

##### Categories
 - Development Team
 - Organizational Partners
 - Outside Community

We can analyze the needs of each of these groupings and thereby understand how best to address them through our documentation. Below is a description of each of the groupings and how documentation is used to address their specific needs.

###### Development Team
The development team comprises of yourself and your fellow contributors to the project. Your team works on a daily basis with the code and is more familiar with its intricate inner workings than anyone else. Documentation for your development team should primarily consist of technical information, onboarding suggestions for new developers, guidance on best practices, maintainance and short term project issues/timelines.

###### Organizational Partners
Partners at the organizational level correspond to the people who may not be directly involved in your project but have an active presence and interest in its development. Typically these include senior leadership, marketing & sales teams, and developers that may be working on other projects. Together all of these people have a strong vested interest in the success of the project. In many situations these stakeholders may be the end users of the application being created. At this level, documentation should address concerns such as product vision and brand, usage and application guidelines, deployment and resource usage and long term project planning.

###### Outside Community
The outside community represents all people that may show a curious interest in learning more about this application but are not involved in the direct creation, maintainance or usage of the software. As projects gain a strong foundation and start moving in the direction of becoming open source the outside community starts to pick up in importance. To the outside community documentation should fulfil needs such as understand the problem domain and how this solution tackles the issue. It should also contain information on how to contribute to the project and provide pointers to people they can reach out to for additional information regarding the project.

### What do we document?
 - Short Answer: Everything
 - Long Answer: As much as possible

Clarity surrounding what to document revolves around the DRY principle. **Don't Repeat Yourself**. Any topic that requires being revisited either by oneself or with fellow collaborators should be documented and written down. Special importance should be emphasised on topics that revolve around teams. Below we will discuss in additional depth the exact requirements. Documenation in _ACM_ can be broadly divided into two subgroups. Technical and Non Technical documentation. Our goal should be to ensure that both are equally detailed and replete with all relevant information for their respective stakeholders. One useful perspective to help vizualize these two categories would be to think of them as Project vs Product management. 

##### Technical Documentation
Designing a software product from scratch requires extensive planning. Project architecture, tech stack, dependency management and development practices are all key topics that require disucussion amongst the team. Lets delve into each one and explore what details should be present. 

###### Software Architecture
Developing an application for web, mobile or other platforms can mean using various different technologies and weaving them together to build a cohesive project. Keeping this in mind we can break down the architecture into several smaller sections. This will allow us to document each portion and paint a big picture view of how the project ties together everything in a hierarchical fashion. Typically architecture is divided in between front-end and back-end but these terms are still generic and we should be able to break it down one step further. A typical project documentation should contain information on all the following items (These are from the perspective of a full stack application, alternative architectures may have more or less components involved)

 - Front-End framework
 - Front-End design libraries
 - Middleware & Associated components
 - Back-End framework & libraries
 - API management
 - Database management
 - User management
 - Resources and Assets
 - Security & Access
 - Integrations and Connections
 - Unit, Integration and Workflow testing
 - Deployment and Environment management

Individual applications may not comprise of or deal with each of these aspects but keeping them in mind will allow one to thoroughly document a codebase.

###### Development Practices
Code can be written in many ways to accomplish the same goal. As a team developing a project it is important to define a clear set of standards that set up the development environment and ensure consistency across multiple contributors. Standardization will allow for easy navigation across multiple files, identifing trends faster, solve bugs efficiently and ensure that new developers can be caught up to speed much more easily. Defining the following items and covering them in project documentation will castly accelerate the development process.
  
  - Development Environment
    - Standardizing the environment will ensure the code behaves in a similar manner across different devices and issues will be easily reproducable. When it comes to writing documentation regarding a development environment make sure to detail which IDE/Editor is being used by the team, the exact configuration and plugins being used, any linters/formatters being used and lastly how to deploy and test locally using the any browsers/VMs.
  - Branching Strategy
    - Define the exact process of using version control to maximize benefit. While **Git Flow** is the recommended branching strategy at _ACM_ if your project uses any variations to it or an alternative strategy it should be clearly documented for any external developers or contributors to clearly understand the development process. In addition to branching strategy, all software project documentation should clearly define any additional details regarding the format and usage of other features present such as labels, issues and project boards. 
  - Logging and Testing
    - `print("hello world")` may be a fan favorite when it comes to writing logging/debugging statements. However, for maximum productivity it is highly recommended to set a definitive standard for using log messages. Setting a clear format and situations for when to use the various different logging levels in a library will greatly help out. Instead of each developer defining their own log message standards (or worse not using log messages) this will create consistency across the project and allow developers to easily understand how different parts of the application function. An example format for documenting a log message is below
    - `Log.info("${Application_Name} : ${Component_File_Name}", "Info message");`
    - `ACM Development : Documentation.md : Info message`
  - Comments
    - Comment your code for improved documentation. Ideally all files should have header comments that describe the function of this file and how it integrates with the rest of the application. Individual functions should have doc comments (refer to javadoc/jsdoc for more information on syntax) that provide quick insight into what the function performs, its input and output parameters and any dependencies. Inline documentation should be reserved for atypical actions that may not make obvious sense when reading through it. For most situations, code should be as self-explanatory as possible.

Documentation around best practices can be quite extensive. It builds consistency across the project and keeps the development progress from lagging as the application continues to grow.

##### Non Technical Documentation
Working on a team will result additional details regarding the product rather than the project. These could be meeting notes, presentation slides, sales pitches, project proposals, calendar invites, feedback & much more. Documenting these will be create a precedence for a well structured organization and preserve knowledge for future records. Where this information is stored is covered in the next section. The key point here is to ensure that product & people related information is recorded and stored. As with technical information, it is important to set a clearly defined standard for all non technical documentation as well. This means defining a clear standard and keeping consistent with the vision and brand of the orgnaization in all that we create.

###### Meetings
The vast majority of non technical documentation arises from meetings with people. This could be presentations during a project proposal, training or leadership activites, one on one meetups, agendas, etc. At _ACM_ we can break down meetings into a _3_ step process to identify where documentation is relevant and necessary. 

 - Pre-meeting
   - Always come to meetings with a clear agenda. Write down what needs to talked about and share it with the team. This can be done in a variety of different ways. Presentations for team meetings can be created ahead of time and shared with teh team to ensure that they can add in relevant content. Teams can also reference project boards and timelines to ensure that they cover all the required topics. If planning a meeting, ensure that the points to be discussed are divided by both topic and people.
 - Meeting
   - Take meeting notes or record events that take place to ensure that thoughts and ideas shared are not lost. If using a presentation, update the slides to reflect the changes in content or add them to the notes section for reference. Make sure to be able to distinguish between the pre-planned meeting notes and the ideas that were discussed during the actual meeting itself. This is important so that any team members unable to attend will be able to follow the progression of ideas and easily determine the conclusion. For non technical meetings that involve brainstorming it is highly advisable to record ideas in separate documents. Keep meetings times to be for a fixed duration and ensure that it is directly correlated to the number of items on the agenda to discuss. 
 - Post-meeting
   - Share all recap information from the meeting with relevant stakeholders. If there were action items that need to be completed from the meeting post reminders about them in the appropriate team channels. 

##### Questions
No form of documentation is perfect. Therefore, it is important to always provide guidance to readers on where to look for additional information. This could be represented in various different ways. An inline comment can refer to a readme. A readme can refer to a wiki. A wiki can refer to meeting notes. However, when all options have been exhausted the one true source of information is the team & organization behind the product. Therefore all documents created should provide a way to communicate directly with the organization. In _ACM_ the standardized way of doing this is to add a **Questions** section to the bottom of all documents with information on reaching out to the appropriate officer, director or team. Refer to the end of this document for an example.

### Where do we document?

Documentation exists in a variety of different forms. We need to care about each of them to ensure we maximize the value gained. Tasks, issues, calendars, schedules, progress, technical architecture and the many more forms dicussed early in the what we document section are not all stored in the same place. The ideal locations for each type of information need to adequately satisfy _4_ crucial functions. CRUD.
 - Create
 - Read
 - Update
 - Delete

The first thought here might be that isn't CRUD the role of an application or database? That is correct, our documentation much like an application satifies a need and the location it is available at needs to ensure that those _4_ actions are possible. Below we will discuss where we at _ACM_ store our various documentation and how those locations meet the requirements listed. 

##### Github
GitHub is at the heart of where our technical documentation is stored. The vast majority of information required for all relevant stakeholders can easily be accessed and modified with the tools available on GitHub. 

 - Repositories
   - Repositories are central towards storing our documentation. Many _ACM_ repositories are dedicated solely towards preserving information on guidelines for how we operate. Examples of this include the _ACM Development_ repository which hosts all the resources required for the divison and the _ACM Brand_ repository which hosts all design assets and instructions on maintaining the public image of _ACM_.
 - Readme
   - This may seem fairly obvious but creating Readme documents and placing them in appropriate locations is a simple point to be really emphasized. A key point to stress here is that a repository may contain multiple readme documents. As a project scales and grows in size, it may be difficult to document all relevant information into a single file. Much like code, treat a single large readme as an overgrown class and break it down into smaller easily digestable components. Ideally a project should contain a short quick start readme at the root level and additional readme files in individual folders as close to the code that it contains documentation on.
 - Wiki
   - Sometimes information can exceed the available space on a readme. Sometimes it can be related to non-technical issues that cannot find an appropriate place along with the code. To remedy these situations we have Github Wikis. Information here should still be directly related to the project. This may be help guides, historical or contextual information, best practices, documentation metadata, etc. 
 - Issues
   - GitHub issues are an effective way to track future work that needs to be completed and provide an estimate for completion times. It also provides non-development stakeholders a simple way to view the task lists for the issues and understand what will be addressed in the code. 
 - Project Boards
   - Project boards assist in tracking issues over time. It provides structure to the team operations and easily allows tasks, issues and other responsibilities to be assigned to team members. Projects boards can exist at multiple levels and its important to ensure that relevant information is carefully distributed across them. Individual projects can have their own technical project boards as can an entire organization. Separating the concerns will allow the developers to quickly find relevant information and make progress. Additionally, its important to know that project boards can also serve to track non-technical tasks. Therefore at a big picture level it may be useful to keep two or more project boards for the same team but divide the tasks in them based on the type.
 - Pull Requests
   - _ACM_ prides itself on ensuring that all pull requests are detailed and contain all the relevant information required to understand the changes made to the codebase. This applies not just to repositories that contain code but also additionally to the repositories where we store our documentation, assets and additional resources. 

##### Other Locations
While GitHub satisfies many needs, there are other locations where we store our documentation. It is important to not only be aware of them but to use the knowledge of their pros/cons to make effective decisions in deciding where to save/search information. The list of services listed here is an attempt in making an exhaustive list but as time passes this may change and if you as an officer use a tool not present here we request that you please update the readme to include it.

 - Google Drive
   - An ideal location for storing confidential documents that are reserved for officers. Brand assets and resources used for development should be moved from drive onto GitHub for easy access. Long term information persisted for future years may continue to remain on drive.
 - Email
   - Email should be reserved for official communication with _ACM_ partners and when doing outreach outside the organization. Collaborating on documents, sharing resources and assets should preferably be done through google drive.
 - Slack
   - Use slack as the primary resource for communcation for fellow officers. When communicating with fellow officers we strongly recommend following certain guidelines and etiquettes. Our strength comes through working together as a team and therefore we want our interactions to be open, transparent and collaborative. Towards making progress in that direction, we emphasize communicating on team channels instead of direct messages. Even if solving a bug, working on a task, debating a topic may only concern two individuals, keeping discussions on an open forum will allow greater insight & perspective from the rest of the team. When reading slack messages we advice you to react and share comments. Acknowledging receiving information through a simple `:thumbs up:` can go a long way in strengthening the bond between officers. However, while slack exists as an excellent form of quick communication between officers, avoid storing information or documents on there and instead when dealing with important matters migrate the content over to a more appropriate location such as google drive or Github.
 - Discord
   - An open forum for communication with all _ACM_ members. Primarily used for voice communication & sharing live content. As mentioned in the comment about slack, avoid saving content or files on discord and instead migrate the same content over to a more appropriate location.
 - Notion
   - Workspace being created...
 - Trello
   - An alternative to GitHub issues & project boards
 - YouTube
   - Location for saving livestreams, workshops and other streamed content.

### Why do we document?
Documentation serves many purposes to both the writer and the reader. These reasons can be summarized into the following points.

 - Clarity & Transparency
   - We want information to be recorded and reside outside our minds. Keeping information regarding all the above mentioned items in a clearly documented way will allow for the organization to function effectively in a transparent manner. Particularly when working with a team this is especially important because it allows all members to be aware of what is happening and understand a project more thoroughly. Clear documentation also supports consistent development and focuses the team.
 - Efficiency and Time Saving
   - When working with multiple officers we want to ensure that information can be dispersed effectively. Documentation avoids repeting information and potentially missing crucial points. Furthermore, when working with new officers, it allows them to be caught up to date more quickly and be able to contribute faster.
 - Permanent Record
   - As developers we will not remain contributors to projects forever. When it is time to pass on the torch to the next team of ambitious developers, documentation serves to easily bridge the learning gap and help new contributors take over. Furthermore, it offers a reflective glance into the past to learn from legacy developers and use that to better the present state of the organization.

There are certainly many more benefits to documentation and many of those have been described in the other sections. One last note to mention is that our documentation is often what is seen by people - both internally and externally and therefore it reflects the thoughts, direction and voice of the organization. Documentation will outlast the person who wrote it and therefore it is important to write for the future while keeping in mind the lessons of the past.

### When do we document?
 - Short Answer: All the time
 - Long Answer: No seriously all the time

The development lifecycle for a project consists of _3_ sections. Each of these steps requires adequate documentation to support it and ensure the success of the next step. We will briefly discuss these steps and how to connect documentation across all of them. 

##### Development Lifecycle
 - Pre-Development
 - Development
 - Post-Development

###### Pre-Development
Diving headfirst into a project with only an idea will result in little more than a prototype. It is important to think about the entire lifecycle of the project in advance to ensure optimal success. This means documenting clearly a proposal for the project and identifying the problem it seeks to solve, the audience it targets and technical process by which it accomplishes those goals. Refer to project proposal for more inforamtion on the items that should be documented before starting work.

###### Development
While developing a project, most documentation will revolve around the technical side. At step of the development process ensure that the documentation does not become more outdated than the code itself. A popular way to remedy this is to follow a strategy known as _Readme Driven Development_. In this strategy the documentation is written before the code itself. This ensures that developers follow through and code exactly what the requirements describe and keeps the documentation always newer than the code. Keep in mind to additionally document all design & architectural decisions as well to help all invested stakeholders gain a better understanding of why the end product may differ from the original outline.

###### Post-Development
Documentation at this stage should be reflective and thoroughly comprehensive. For a software project, this should include release notes, guides on using the project, information regarding the development and process for additional contributions. Keep in mind that once one stage of development for a project (MVP, v2.0, vFall2020) is completed it can also be seen as the starting stage for the next phase. The development cycle repeats and it is important for the documentation to always ensure that continued development on a project is possible instead of running into obstacles. Ensure that the next team of developers are capable of adding features and working on a codebase that they did not create. Avoid situations where developers need to start projects from scratch due to insufficient documentation surrounding a previous iteration.

Ultimately, make sure to continuously document. From a technical perspective, treat documentation like code. Never let it get out of date and suffer from code rot. Keep it fresh and always seek to build upon the work of previous members. Ask questions when documentation is unclear and if you see something wrong take it upon yourself to make the required fixes. Our words carry the voice of the organization and we should strive to keep it fresh and relevant at all times.

### Questions

Sometimes you may have additional questions. If the answer was not found in this readme please feel free to reach out to the [Director of Development](mailto:comet.acm@gmail.com) for _ACM_

We request that you be as detailed as possible in your questions, doubts or concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)
