# BACKEND
## DESCRIPTION
## API
### Responses
Success response [200]
```json
{
    "message": "Success message"
}
```
Error response [404, 500, 402, 401]
```json
{
    "message": "Error message"
}
```
### Endpoints 
/api/v1 - public routes</br>
/api/v2 - private routes</br>
/api/ws - websockets</br>
Example: {HOSTING}/api/v1/auth/registration

#### /auth - v1
Working with authorization and authentication.

##### /registration - POST
Registration.

Type | Json                                                                    | Headers
--- |-------------------------------------------------------------------------| ---
Request | {"username": "nameeee","password": "123321", "email":"email@email.com"} | --
Response | Success response                                                        | ---
Error response | Error response                                                          | ---
##### /login - POST
Login.

 Type     | Json                                                                                                                      | Headers 
----------|---------------------------------------------------------------------------------------------------------------------------|--------
 Request  | {"email": "email@email.com","password": "123321"}                                                                         | ---    
 Response | {"refresh": "123123dwqo", "access": "123e1231", "except": 36000000 (microsec), "exceptTime": 1231908402213912 (microsec)} | ---
Error response | Error response | ---
##### /refresh - POST
Refresh token.
Type     | Json                                                                                                                      | Headers
----------|---------------------------------------------------------------------------------------------------------------------------|--------
Request  | {"refresh": "wqejkh1jk23;12",}                                                                         | ---    
Response | {"refresh": "refresh", "access": "access"} | ---
Error response | Error response | ---

#### /workWT - v1
Work with texts, speeches and symbols.

##### /TextToSpeech - POST
Type | Json                                                                             | Headers
--- |----------------------------------------------------------------------------------| ---
Request | {"text":"Some text", "textLanguage": "EN", "textToLanguage": "CZ"}               | --
Response | {"speech": "1230809481092834", "speechLanguage": "EN"} | ---
Error response | Error response | ---

##### /SpeechToText - POST
Type | Json                                                                             | Headers
--- |----------------------------------------------------------------------------------| ---
Request | {"speech": "1230809481092834", "speechLanguage": "GE", "speechToLanguage": "EN"} | --
Response | {"text":"Some text", "textLanguage": "EN"}                                       | ---
Error response | Error response | ---

[//]: # (#### /translate - v1)

[//]: # (Working with translations.)

[//]: # (##### /translate - POST)

[//]: # ()
[//]: # (Type | Json                                                                | Headers)

[//]: # (--- |---------------------------------------------------------------------| ---)

[//]: # (Request | {"text": "Some text", "textLanguage": "EN", "textToLanguage": "CZ"} | --)

[//]: # (Response | {"text": "Some text", "textLanguage": "EN"}                                        | ---)

[//]: # (Error response | Error response | ---)

#### /stream - ws
message request json:
```
{
    "message": "base64"
}
```

return json:
```
{
    "word": "word"
}
```

## ENV
