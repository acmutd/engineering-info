# TrackIT Challenge

TrackIT is a real-time event & participant tracking system that supports being able to deliver content remotely. A core part of the TrackIT application involves working with many parts of Firebase including [Authentication](https://firebase.google.com/docs/auth), [Cloud Firestore](https://firebase.google.com/docs/firestore), [Cloud Storage](https://firebase.google.com/docs/storage) & [Cloud Functions](https://firebase.google.com/docs/functions). 

### The challenge

Implement login functionality using firebase in a react application. You can use the login page provided or create your own. In addition to the username & password fields, add a third input box underneath where the user can enter a description (any string). If the user does not have an account, create an account for them with the username/password and save the description provided in cloud firestore. If they have an account and login, _do not_ save the description. When a user logs in (either by creating an account or simply logging in), show them the description they have saved in firestore. 

The general schema for this will require 1 collection where you store the users description along with a identifier to find a specific users description

```
Users (collection)
|-Doc
|--username: string
|--description: string
```

### Requirements

This project requires using Firebase and knowing how to utilize their Authentication and Database features at a minimum level. This project will require you to create a firebase project which is free (Spark Plan). When submitting, please leave your api key in the code that way we are able to test it out. If you would like create a separate `.env` file to store the api keys and send that separately feel free to do so.

### Submission

Follow overall submission guidelines listed in `submission.md`. For this challenge create a folder titled `chal-4` in your submission repository and add the code required to run a react application with a single page displaying the register box. Optionally you may also choose to include in your challenge readme a link to a deployed version of your application for us to see. Deploying your react app is not required as part of this challenge.

#### Questions

Sometimes you may have additional questions. If the answer was not found in this readme please feel free to reach out to the [Director of Development](mailto:development@acmutd.co) for _ACM_

We request that you be as detailed as possible in your questions, doubts or concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)
