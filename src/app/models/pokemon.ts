export class Pokemon{  
    constructor(
        public name:string,
        public abilities:string,
        public base_experience:string,
        public form:any[],
        public game_indices:any[],
        public height:number,
        public held_items:[],
        public is_default:boolean,
        public location_area_encounters:string,
        public moves:any[],
        public order:number,
        public past_types:any[],
        public species:any,
        public weight:number,
        public stats:Stat[],
        public types:any[],
        public id:number,
        
    ){
      
    }

}

export class Stats{  //lenderprospect
    constructor(
        public  base_stat:string,
        public  effort:string,
        public  stat:Stat,
        
    ){
      
    }
}

export class Stat{  //lenderprospect
    constructor(
        public  stat:{name:string},
        public  base_stat:string,
    ){
      
    }
}

