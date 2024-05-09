import{useEffect, useState} from "react"

function useCurrencyInfo(curr){
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/npr.json')
    }, [])
}