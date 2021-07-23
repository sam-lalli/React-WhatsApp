import { useEffect, useState }from 'react'


//Prefix helps find data saved in local storage if you
//are running lots of applications on localhost
//debugging help as prefix named after app
const PREFIX = 'whatsapp-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}