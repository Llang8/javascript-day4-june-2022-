const fetchUserData = async() => {
    try {
        const response = await fetch('https://lkajsdasdlkjasdlkjasdlkasdj.com')
        let data = await response.json()
        // HANDLE DATA
        console.log(data)
    } catch(err) {
        console.error(err)
        console.error("Hey something went wrong")
    } finally {
        console.log('THE REQUEST HAS FINISHED')
    }
}

fetchUserData()