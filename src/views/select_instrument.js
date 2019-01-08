const PubSub = require('../helpers/pub_sub.js');

const SelectInstrument = function(menu) {
  this.menu = menu
};

SelectInstrument.prototype.bindEvents = function() {
  PubSub.subscribe('Instrument:all-instruments', (event) => {
    this.populate(event.detail)
  })
  this.menu.addEventListener('change', (event) => {
    const selectedIndex = event.target.value
    PubSub.publish('SelectInstrument:instrument-selected', selectedIndex)
    console.log('published on instrument selected', selectedIndex);
  })
};

SelectInstrument.prototype.populate = function(instruments) {
  instruments.forEach((instrument, index) => {
    const instrumentLink = document.createElement('option');
    instrumentLink.value = index;
    instrumentLink.textContent = instrument.name
    this.menu.appendChild(instrumentLink)
  })
};

module.exports = SelectInstrument;
