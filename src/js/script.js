import { updateFirebaseWithStats } from "../config/firebase";
import { stats } from '../data/player';
import { experienceRequiredForLevels } from '../data/player';

//Calculate XP required for next level in anything
export default function calculateRequiredXP(level) {
    if (level >= 1 && level <= 99) {
      return experienceRequiredForLevels[level - 1];
    } else {
      // Handle out-of-bounds levels here or return a default value
      return 0; // Default value for levels outside the range 1-99
    }
}

export function getCoin(){

    stats.coins += 1;
    updateFirebaseWithStats(stats);
    console.log("coin")
}
