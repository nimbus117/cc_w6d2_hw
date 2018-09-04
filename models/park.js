function Park(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaurToAdd) {
  this.dinosaurs.push(dinosaurToAdd)
};


module.exports = Park;
