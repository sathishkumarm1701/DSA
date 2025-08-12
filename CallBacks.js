function greet(name, callBack) {
    console.log(`Hi ${name}`)
    setTimeout(() => {
        callBack()
    }, 2000)
}

function getData() {
    console.log("CALLBACK", "AFTER 2 Seconds")
}

greet("Sathish", getData)