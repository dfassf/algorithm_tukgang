function selectionSort(arr){
    let tmp
    for(let i = 0; i<arr.length-1; i++){
        let minValue = arr[i]
        let minNum = i
        for(let j = i+1; j<arr.length-1-j; j++){
            if(arr[j]<minValue){
                minValue = arr[j]
                minNum = j
            }
        }
        [arr[i], arr[minNum]] = [arr[minNum], arr[i]]
    }
    console.log(arr)

}
selectionSort([5,4,3,2,1])

// 원소의 위치 정한다
// 해당 위치에 들어갈 원소 찾는다
// 찾으면 바꿔줌
// arr.length-1 만큼 반복