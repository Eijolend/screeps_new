"use strict";

utils = require("utils");
roomManager = require("roomManager");
creepManager = require("creepManager");

require("setupGlobal")();  // global constants

module.exports.loop = function(){
  utils.garbageCollect();

  // empireManager.run();
  // areaManager.resolveArea();
  for(var roomName in Game.rooms):
    roomManager.resolveRoom(Game.rooms[roomName]);

  for(var creepName in Game.creeps):
    creepManager.resolveCreep(Game.creeps[creepName]);

  tempcode

}
