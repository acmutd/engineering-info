# Challenge
For this challenge, you will build a simple service that allows a user to create
"tags." A tag is simply an association between a name and some blob of text. For
example, the tag "hello" might have the contents "hello world!".

You can complete this challenge in the language of your choice.

### Requirements
The user should be able to...
* **Create** a tag with a name and contents
* **Retrieve** a tag by its name
* **Update** a tag's contents
* **Delete** a tag

We will (attempt to) restrict updating and deleting a tag to the user who
created it by requiring a special "token" to be given for those operations. The
token will only be given to the user on tag creation.

### HTTP Server
The service will consist of an HTTP server fulfilling requests on the `/tags`
route:
* `POST /tags` accepting a JSON body matching the `Tag` type with `token`
defined.
* `GET /tags/:name` accepting no body and responding with a JSON `Tag` with
`token` undefined.
* `PATCH /tags/:name/:token` accepting a partial `Tag` with the `contents`
defined.
* `DELETE /tags/:name/:token` accepting no body and responding with no body.

All routes should verify that any input is valid and repsond using appropriate
status codes.

Below is the `Tag` type.
```ts
interface Tag {
    name: string,
    contents: string,
    token?: string
}
```

### Storage
The server will need to store the tags somehow. The way you do this is
completely up to you. Feel free to even use a non-persistent method, like a
simple Map. 

### Example
Here's some examples of requests and responses (each new request depends on the 
last):

A fully implemented API that satisfies the above requirements can also be found and tested here as a practical example --> `https://us-central1-acm-core.cloudfunctions.net/challenge`

```
POST /tags/linux
Eg. https://us-central1-acm-core.cloudfunctions.net/challenge/tags/linux

{
    "name": "linux",
    "contents": "I'd just like to interject for a moment. What you're referring to as Linux is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux..."
}

=>

{
    "name": "linux",
    "contents": "I'd just like to interject for a moment. What you're referring to as Linux is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux...",
    "token": "zzv3uh0dygbo380wolkjd"
}
```
```
GET /tags/linux
Eg. https://us-central1-acm-core.cloudfunctions.net/challenge/tags/linux

=>

{
    "name": "linux",
    "contents": "I'd just like to interject for a moment. What you're referring to as Linux is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux..."
}
```
```
PATCH /tags/linux/zzv3uh0dygbo380wolkjd
Eg. https://us-central1-acm-core.cloudfunctions.net/challenge/tags/linux/zzv3uh0dygbo380wolkjd

{
    "contents": "Something else"
}

=>

{
    "name": "linux",
    "contents": "Something else"
}
```
```
DELETE /tags/linux/zzv3uh0dygbo380wolkjd
Eg. https://us-central1-acm-core.cloudfunctions.net/challenge/tags/linux/zzv3uh0dygbo380wolkjd

=>

200 OK
```

### Submission

Follow overall submission guidelines listed in `submission.md`. For this challenge create a folder titled `chal-1` in your submission repository and add the code required to spin up the required http server. Optionally you may also choose to include in your challenge readme a link to a deployed version of your http server for us to test. Deploying your http endpoints is not required as part of this challenge.

#### Questions

Sometimes you may have additional questions. If the answer was not found in this readme please feel free to reach out to the [Director of Development](mailto:development@acmutd.co) for _ACM_

We request that you be as detailed as possible in your questions, doubts or concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)