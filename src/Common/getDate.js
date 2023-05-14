
let GetDate = () =>{

    let dateData = new Date()
        let year = dateData.getFullYear()
        let day = new Intl.DateTimeFormat('default', {weekday: 'long'}).format(dateData)
        let month = new Intl.DateTimeFormat('default', {month:'long'}).format(dateData)
        let dayDigit = dateData.toLocaleString('default', {day:"2-digit"})

        return {year, day, month, dayDigit}

}

export default GetDate