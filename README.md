#  NO-DB

## frontend checklist

- reset.css
- package.json
    - main: server => so we can type nodemon without giving file

### proxy
    - setupProxy.js
        - :3333

### dependencies

- axios (only for external requests)
- http-proxy-middleware

### front-end folder structure

- src/
    - App.js => class
    - index.js
    - components/
        - History.js
        - EnemyWindow.js
            <!-- - PlayButton.js -->
        - AvengerWindow.js
            <!-- - PlayButton.js -->
        - Interface.js
            - Button.js
            - PostButton.js
        

## backend checklist


### server folder structure
- server/
    - index.js
    - controller/
        - inputController.js
        

### dependencies
- express

### routes
**inputController.js**
- get: '/api/notes'
- post: '/api/playback'
- put: '/api/notes/:id'
- delete: '/api/notes/:id'

### data
```js
{
    id,
    image, 
    rhythm-value,
    match, 

}
```
