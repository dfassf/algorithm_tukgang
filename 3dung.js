// n명의 수학성적 주어지는데 그 중 3등

// let input = require('fs').readFileSync('/dev/stdin').toString().split('/n').trim()
// let num = Number(input[0])
// let arr = input[1].split(' ')

let input = [80, 96, 75, 82, 96, 92, 100]
// [75, 80,  82, 92, 96, 96, 100]

function samDung(arr){
    let jungbok = 0;
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-1-i; j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr)
    // arr[arr.length-1]과 비교
    for(let i = 1; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-1-i; j++){
            if(arr[j] === arr[0]){jungbok++; arr.splice(j,1)}
        }
    }
    if(jungbok >=2){
        // 1등이 3명 이상
    }



    console.log(arr,jungbok)
    
}

samDung(input)