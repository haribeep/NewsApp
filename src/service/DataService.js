import axios from 'axios'


const get = (url) => {
    return axios.get(url)
}


const DataService = {
    get
}

export default DataService;