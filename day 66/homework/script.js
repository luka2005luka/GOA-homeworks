function manualFilter(innerFunc,arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(innerFunc(arr[i])){
            res.push(arr[i]);
        }
    }


    return res;
}


function positive_detector(num){
    if(num>0){
        return true;
    }
    return false;
} 

console.log(manualFilter(positive_detector),
[5,2,0,2,-6,-2,5,-6]);