import axios from "axios";
import mockCps from './cps.mock.json'

class ApiClient {

  contructor() {
    this.api = axios({
      baseURL: '/'
    })
  }


  async cps(filters) {
    // const { data } = await this.api.get('/cps', { params: filters })
    const data = mockCps
    return data
  }
}

export default new ApiClient()