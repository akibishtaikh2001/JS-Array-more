const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const revColors =[];
for(let i = colors.length -1; i >= 0; i--){
    const col = colors[i];
    // console.log(col);
    revColors.push(col);
}
console.log(revColors);
