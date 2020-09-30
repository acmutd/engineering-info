# Challenge

This challenge applies to all projects by _ACM_ Development. An important part of being a developer is being able to interface with the work done by other developers. In this challenge you will be required to work with a 3rd party API to send and receive information. 

### The challenge

Write a script in a language of your choice that interacts with the following API

API: `https://us-central1-acm-core.cloudfunctions.net/challenge`

This API is designed to perform crud operations on a tagging system. More documentation on the API is described below.

Perform the following actions
 - Make a post request to create a tag called `linux`
 - Make a get request to return the tag called `linux`
 - Make a patch request to update the tag called `linux`
 - Make a delete request to delete the tag called `linux`


### API Documentation
The following represents the behavior of the API and is also the sequence of operations that your script needs to perform as part of this challenge.

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
GET /tags/linux/zzv3uh0dygbo380wolkjd
Eg. https://us-central1-acm-core.cloudfunctions.net/challenge/tags/linux/zzv3uh0dygbo380wolkjd

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

Follow overall submission guidelines listed in `submission.md`. For this challenge create a folder titled `chal-0` in your submission repository and add the script that calls this API.

#### Questions

Sometimes you may have additional questions. If the answer was not found in this readme please feel free to reach out to the [Director of Development](mailto:development@acmutd.co) for _ACM_

We request that you be as detailed as possible in your questions, doubts or concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)