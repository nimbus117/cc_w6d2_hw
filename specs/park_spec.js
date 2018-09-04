const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let parkName;
  let parkTicketPrice;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let parkDinosaurs;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 40);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 35);
    parkDinosaurs = [dinosaur1, dinosaur2]
    name = 'Jurassic Park';
    parkTicketPrice = 10;
    park = new Park(parkName, parkTicketPrice, parkDinosaurs);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, parkName);
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, parkTicketPrice);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, parkDinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurs[0];
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
