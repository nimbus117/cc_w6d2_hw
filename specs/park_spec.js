const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let parkName;
  let parkTicketPrice
  beforeEach(function () {
    name = 'Jurassic Park';
    parkTicketPrice = 10;
    park = new Park(parkName, parkTicketPrice);
  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, parkName)
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, parkTicketPrice)
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
