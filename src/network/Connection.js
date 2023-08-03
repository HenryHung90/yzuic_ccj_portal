import axios from "axios";


const statusCheck = {
    yzuic_ExammingLab: () => {
        return (
            axios({
                method: 'get',
                url: 'http://ccj.infocom.yzu.edu.tw:3000/'
            })
        )
    },
    yzuic_PhaserGameLab: () => {
        // return (
        //     axios({
        //         method: 'get',
        //         url: 'http://ccj.infocom.yzu.edu.tw/',
        //     }).catch(err => {
        //         console.log()
        //         return { status: err.response.status }
        //     })
        // )
        return (
            fetch('http://ccj.infocom.yzu.edu.tw', {
                method: 'GET',
            }).catch(err => { return err })
        )
    }
}




export { statusCheck }