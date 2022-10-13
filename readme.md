
# Nui Handler

This is my small little event handler for fivem nui, i use this for my projects to make them more clean and its just more easy to use :()
## Examples
Import the MessageHandler.js into your index.html

```javascript
const messager = new Message();
messager.AddEvent("test", function(val) {
    console.log(val) // Will print lol because thats the given value in the lua part below
})

```

```lua
CreateThread(function() 
    Wait(1500)
    SendNUIMessage({type="test", value="lol"})
end)

--SendNUIMessage({type="test", value="lol"})
--type = The name of the event
--value = The value you want to send into the function params

```


## Authors

- [Augustus](https://www.github.com/g-aad-a)

