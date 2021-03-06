const decorations = {
  extendFeature() {
    this.set('FACILITY_TYPE', this.getType())
    this.set('BOROUGH', this.getBorough())
    this.set(
      'search_label',
      `<b><span class="srch-lbl-lg">${this.getName()}</span></b><br>
      <span class="srch-lbl-sm">${this.getAddress1()}</span>`
    )
  },
  getAddress1() {
    return this.get('Street_Address_1')
  },
  getAddress2() {
    return this.get('Street_Address_2')
  },
  getBorough() {
    return {
      '1': 'Manhattan',
      '2': 'Bronx',
      '3': 'Brooklyn',
      '4': 'Queens',
      '5': 'Staten Island'
    }[this.get('Boro')]
  }, 
  getCityStateZip() {
    return `${this.get('City')}, NY`
  },
  getName() {
    return this.get('Name')
  },
  getType() {
    return {
      '1': 'Business Center',
      '2': 'Workforce1 Center',
      '3': 'Industrial & Transportation Services',
    }[this.get('TypeID')]
  },
  detailsHtml() {
    const hours = this.get('Hours')
    const details = this.get('Details')
    const type = this.getType()

    const div = $('<div class="detail"></div>')
    .append(`<div><strong>Type: </strong> ${type}</div>`)
    .append(`<div><strong>Hours: </strong> ${hours}</div>`)
    .append(`<div><strong>Details: </strong> ${details}</div>`)

    return div
  }
}
export default decorations