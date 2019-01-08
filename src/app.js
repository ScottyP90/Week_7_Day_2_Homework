const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectInstrument = require('./views/select_instrument.js')
const InstrumentDetails = require('./views/instrument_details.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentContainer = document.querySelector('section.instrument-details')
  const instrumentDetails = new InstrumentDetails(instrumentContainer)
  instrumentDetails.bindEvents()

  const selectElement = document.querySelector("#instrument-families")
  const selectInstrument = new SelectInstrument(selectElement)
  selectInstrument.bindEvents()

  const instrumentDataModel = new InstrumentFamilies(instrumentFamilyData)
  instrumentDataModel.bindEvents()

});
