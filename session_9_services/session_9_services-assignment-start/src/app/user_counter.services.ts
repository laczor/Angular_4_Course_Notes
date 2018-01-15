

export class countUsersServices{
    deactiaved = 0;
    activated = 0;
    
    deactivation(num:number){
        this.deactiaved +=1;
        console.log("Total num of deactivation" + this.deactiaved);
    }
    activation(num:number){
        this.activated +=1;
        console.log("Total num of activation" + this.activated);
    }    
        
}