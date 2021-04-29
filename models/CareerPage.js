
export class CareerPage {
  constructor(data) {
    this._id = data?._id || ''
    this.name = data?.name || ''
    this.category = data?.category || ''
    this.url = data?.url || ''
    this.logo = data?.logo || ''
    this.description = data?.description || ''
    this.locations = data?.locations || []
    this.priority = data?.priority || 3
  }

}