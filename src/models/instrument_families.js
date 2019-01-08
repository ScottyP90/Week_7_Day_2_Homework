const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Instrument:all-instruments', this.data)

  PubSub.subscribe('SelectInstrument:instrument-selected', (event) => {
    const index = event.detail
    const selectedInstrument = this.findInstrument(index)
    PubSub.publish('Instrument:found-instrument', selectedInstrument)
  })
}

InstrumentFamilies.prototype.findInstrument = function (index) {
  return this.data[index]

};

module.exports = InstrumentFamilies;
