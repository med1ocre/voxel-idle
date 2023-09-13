import { updateFirebaseWithStats } from "../config/firebase";
import { stats } from '../data/player';

export function getCoin(){

    stats.coins += 1;
    updateFirebaseWithStats(stats);
}