class Dot{
    
    constructor(){
        this.x = random(m,width-m)
        this.y = random(m,height-m)
        this.vy = random(2,10)
    }

    render(){
        strokeWeight(this.vy*0.5)
        point(this.x,this.y)
    }

    move(){
        wind = map(ruido2,0,10,-10,10)
        this.x += wind
        this.y = this.y + this.vy

        if(this.y > height){
            this.x = random(m,width-m)
            this.y = random(m, height-m)
        }

        if(this.x > width || this.x < 0){
            this.x = random(m,width-m)
            this.y = random(m, height-m)
        }
    }
}