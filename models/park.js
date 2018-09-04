function Park(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaurToAdd) {
  this.dinosaurs.push(dinosaurToAdd)
};

Park.prototype.removeDinosaur = function(dinosaurToRemove) {
  const index = this.dinosaurs.indexOf(dinosaurToRemove);
  this.dinosaurs.splice(index, 1);
};

module.exports = Park;
