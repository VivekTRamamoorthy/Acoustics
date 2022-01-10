var cx=function(re,im=0){
    this.re=re;
    this.im=im;
    this.add=function(b){
        return new cx(this.re+b.re,this.im+b.im);

    }
    this.sub=function(b){
        return new cx(this.re-b.re,this.im-b.im);
        
    }
    this.mul=function(b){
        return new cx(this.re*b.re-this.im*b.im,this.re*b.im+this.im*b.re)
    }
    this.abs=function(){
        return this.re**2+this.im**2;
    }

}
var exp=function(theta){
    return new cx(Math.cos(theta),Math.sin(theta));
}