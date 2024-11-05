import axios from 'axios'

const video = (name) => {
    return axios.get(`https://search.lziapi.com/json-api/?dname=liangzi&key=${name}&count=50`)
}

export default video