Array.prototype.Primenum = function(){
    for(let i = 0; i<this.length;i++){
        if (this[i]<=1){
            return false;
        } else{
            for(let j =2; j<this[i];j++){
                if(this[i] %j ===0){
                    return false;
                }
            }
            return true;
        }
    }
}
const arr = [7,9,12];
let result = arr.Primenum();
document.getElementById('res').value = result;