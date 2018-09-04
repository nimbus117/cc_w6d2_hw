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

Park.prototype.findPopularDinosaur = function() {
  // this.dinosaurs.sort(function(a, b) {
  //   let compare = 0;
  //   if (a.guestsAttractedPerDay > b.guestsAttractedPerDay) {
  //     compare = 1;
  //   }
  //   else if (b.guestsAttractedPerDay > a.guestsAttractedPerDay) {
  //     compare = -1;
  //   }
  //   return compare;
  // });

  // this.dinosaurs.sort(function(a, b) {
  //   return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
  // });

  this.dinosaurs.sort((a,b) => a.guestsAttractedPerDay - b.guestsAttractedPerDay);
  return this.dinosaurs[this.dinosaurs.length - 1];
}

module.exports = Park;
