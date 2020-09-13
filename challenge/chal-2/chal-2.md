# Comet Planning Dev Challenge
Comet Planning primarily uses React, Redux, and Cloud Firestore for its
development technologies. As such, this challenge will show the ACM Development
team if you understand how to integrate these various technologies.

### The Challenge
Your mission, should you choose to accept it: make this to-do list application
functional. This challenge will let us know how comfortable you are at looking
at an existing (fictional) codebase and discovering where to make changes.

There are four main issues with the to-do list app. One of them will be obvious.
Two of the others include the following:
 - When the user clicks the "Add task" button, the description doesn't get
   stored with the task's title. When the "Add task" button is clicked, it
   should get stored in the Redux data store.
 - When the user refreshes the page, all the tasks disappear. (It shouldn't do
   this.)

There is also one more issue that will test whether or not you can catch a
subtle user experience quirk with the app.

Fix all of the issues with this app. If you can make the to-do list app
function as intended (adding items, allowing them to be visually marked off as
"done", and showing saved items on refresh), then you have completed the mission.

As a completely optional bonus challenge: Use Tailwind CSS to improve the
styling for this to-do list app. Use your imagination. The library has already
been included in the `index.html` file, so you only have to modify the existing
styles and maybe modify a few HTML tags.


### About the App
This to-do list application uses React and Redux.
[React](https://reactjs.org/docs/getting-started.html) is a framework for
building dynamic web applications. [Redux](https://redux.js.org) is a library
for managing app state.

### App Architecture
 - Main app structure and components are in `index.html`.
 - Main app logic is in `index.js`. Here are utility functions related to app
   data like persisting data to disk.
 - State management with Redux is handled in `store.js`.

The `TaskItem` type is defined as:
```ts
interface TaskItem {
  id: string;
  title: string;
  description: string;
  done: boolean;
}
```

The `TaskItem` is the primary unit of data for this app. Although it is not
explicitly defined in the app, keep these fields in mind as you complete the
challenge.

### Submission
Follow overall submission guidelines listed in submission.md. For this challenge, 
create a folder titled `chal-2` in your submission repository and your modified
copies of the given files (`index.html`, `index.js`, and `store.js`). Optionally,
you may also choose to include a link in a README file to a deployed version of
the to-do list for us to test, but deploying this website not required as part
of this challenge.

#### Questions
You may have additional questions. If the answer was not found in this document,
please feel free to reach out to the Director of Development for ACM or make a post
in the #development-general channel in the ACM UTD [Discord server](http://acmutd.co/discord).

We request that you be as detailed as possible in your questions, doubts or
concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)
