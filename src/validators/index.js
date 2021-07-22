export const validateEmail = (email) => {
    const regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regular.test(String(email).toLowerCase());
}

export const requiredField = (value) => {
    if(value) {
        const str = value.trim()
        if(str && (str.length > 2) && (str.length < 30)) return true;
    }
    return false;
}

export const redColorOnBlur = (event) => {
    if(event.currentTarget.className ===  "inputNotFilled" && !requiredField(event.currentTarget.value)) {
        event.currentTarget.className = 'inputNotFilled warning'
    } else if(event.currentTarget.type === "email" && !validateEmail(event.currentTarget.value)) {
        event.currentTarget.className = 'inputNotFilled warning'
    } else if(event.currentTarget.className ===  "inputNotFilled warning" && requiredField(event.currentTarget.value)) {
        event.currentTarget.className = 'inputNotFilled'
    }
}