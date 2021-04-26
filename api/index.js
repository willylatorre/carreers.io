import axios from "axios";

class ApiClient {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.apiBase}/.netlify/functions`
    })
  }


  async cps(filters) {
    const { data } = await this.api.get('/cps', { params: filters })
    // const data = mockCps
    return data
  }
}

export default new ApiClient()