"use strict";

module.exports.garbageCollect = function(){
  if(Game.time % GARBAGE_COLLECT_INTERVAL == 0){
    for(var i in Memory.creeps) {
      if(!Game.creeps[i]) {
        delete Memory.creeps[i];
  	   }
  	}
  	for(var i in Memory.flags) {
  		if(!Game.flags[i]) {
  	   	delete Memory.flags[i];
			}
    }
  }
}
