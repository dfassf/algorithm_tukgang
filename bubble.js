function bubbleSort(arr){
    let tmp
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                // tmp = arr[j]
                // console.log('change',tmp, arr[j+1])
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr)
}
let a = [12,5,3,1,4]
bubbleSort(a)
