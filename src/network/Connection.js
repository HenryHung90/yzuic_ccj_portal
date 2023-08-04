import axios from "axios";


const statusCheck = {
    yzuic_taskLab: () => {
        return (
            axios({
                method: 'get',
                url: process.env.REACT_APP_TASKLAB_URL,
                header: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).catch(err => {
                if (err)
                    return { status: 404, message: err.message }
            })
        )
    },
    yzuic_gameLib_109: () =>{
        return (
            axios({
                method: 'get',
                url: process.env.REACT_APP_GAMELIB_109_URL,
                header: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).catch(err => {
                console.log(err)
                if (err)
                    return { status: 404, message: err.message }
            })
        )
    },
    yzuic_gameLib_110: () => {
        return (
            axios({
                method: 'get',
                url: process.env.REACT_APP_GAMELIB_110_URL,
                header: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).catch(err => {
                console.log(err)
                if (err)
                    return { status: 404, message: err.message }
            })
        )
    },
    yzuic_PhaserGameLab: () => {
        return (
            axios({
                method: 'get',
                url: process.env.REACT_APP_PHASERLAB_URL,
                header: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).catch(err => {
                if (err)
                    return { status: 404, message: err.message }
            })
        )
    },
    yzuic_ExammingLab: () => {
        return (
            axios({
                method: 'get',
                url: process.env.REACT_APP_EXAMLAB_URL
            }).catch(err => {
                if (err)
                    return { status: 404, message: err.message }
            })
        )
    },

}




export { statusCheck }