const PubSub = require('../helpers/pub_sub.js');

const InstrumentDetails = function(container) {
  this.container = container
};

InstrumentDetails.prototype.bindEvents = function () {
  PubSub.subscribe('Instrument:found-instrument', (event) => {
    const instrumentObject = event.detail
    this.render(instrumentObject)
  })
};

InstrumentDetails.prototype.render = function(instrument) {
  this.container.innerHTML = '';

  const heading = this.createHeading(instrument);
  const para = this.createPara(instrument);
  const infoList = this.createInstrument(instrument);

  this.container.appendChild(heading);
  this.container.appendChild(para);
  this.container.appendChild(infoList);
}

InstrumentDetails.prototype.createHeading = function(instrument) {
  const heading = document.createElement('h2');
  heading.textContent = instrument.name
  return heading;
}

InstrumentDetails.prototype.createPara = function(instrument) {
  const para = document.createElement('p');
  para.textContent = instrument.description
  return para;
}

InstrumentDetails.prototype.createInstrument = function(instrument) {
  const instruments = document.createElement('p');
  instruments.textContent = `Instruments: ${instrument.instruments}`
  return instruments;
}



module.exports = InstrumentDetails
