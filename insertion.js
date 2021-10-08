function insertionSort(arr){
    //배열의 첫번째 원소부터 시작한다
    //정렬할 원소를 택한다
    //왼쪽으로 이동하면서 자기 위치를 찾아간다


    for(let i = 1; i<arr.length; i++){
        let sortEle = arr[i]
        let insIdx = i-1
        while(insIdx>=0&&arr[insIdx] > sortEle){
            arr[insIdx+1] = arr[insIdx]
            insIdx--
        }
        arr[insIdx+1] = sortEle
    }
     
    console.log(arr)
}

let a = [8,5,6,2,4]
insertionSort(a)