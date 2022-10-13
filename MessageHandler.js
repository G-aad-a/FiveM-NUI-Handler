class Message {
    constructor() {
        this.events = {}
        window.addEventListener("message", (event) => {
            event.preventDefault()
            if(event.data) {
                if(this.events[event.data.type]) {
                    this.events[event.data.type](event.data.value)
                }
            }
        })
    }

    AddEvent(type,fn) {
        if(!type) {
            throw TypeError("No type provided");
        }
        if(this.events[type]) {
            throw TypeError("Type already exitsts");
        }
        if(!fn) {
            throw TypeError("No function provided");
        }
        this.events[type] = fn
    }
}




