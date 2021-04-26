import axios from "axios";

class ApiClient {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.apiBase}/.netlify/functions`
    })
  }


  async cps(filters) {
    const { data } = await this.api.get('/cps', { params: filters })
    return data
  }

  async cpsSubmit(cp) {
    const { data } = await this.api.post('/cps-submit', cp)
    return data
  }

  async submissions() {
    const { data } = await this.api.get('/submissions')
    return data
  }

  async processSubmission(id, action) {
    const { data } = await this.api.post('/submissions-process', {id, action})
    return data
  }
}

export default new ApiClient()