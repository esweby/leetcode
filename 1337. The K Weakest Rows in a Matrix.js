const mergeSort = (rows) => {
  if(rows.length < 2) {
    return rows;
  }

  const length = rows.length;
  const middle = Math.floor(length / 2);

  const left = rows.slice(0, middle);
  const right = rows.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  const results = [];

  while(left.length && right.length) {
    if(left[0].str < right[0].str) {
      results.push(left.shift());
    } else if (left[0].str === right[0].str && left[0].rowNum < right[0].rowNum) {
        results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
    
  return results.concat(left, right);
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    const rows = [];

    for(let i = 0; i < mat.length; i++) {
        let row = { rowNum: i, str: 0 };
        let rowStr = 0;
        for(let r = 0; r < mat[i].length; r++) {
            if(mat[i][r] === 1) {
                rowStr++;
            }

            if(mat[i][r + 1] !== 1) {
                break;
            }
        }
        row.str = rowStr;
        rows.push(row);
    }

    console.log(rows);
    const sortedRows = mergeSort(rows);

    return sortedRows.slice(0, k).map(curr => curr.rowNum);
};
