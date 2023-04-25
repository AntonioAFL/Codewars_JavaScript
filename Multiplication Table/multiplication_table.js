/* 
Your task, is to create N×N multiplication table, 
of size provided in parameter.
*/

function multiplicationTable(size) {
  let table = [];

  for (let row = 1; row <= size; row++) {
    let data = [];
    for (let col = 1; col <= size; col++) {
      data.push(row * col);
    }
    table.push(data);
  }

  return table;
}

function multiplicationTable(size) {
  return Array.from({ length: size }, (_, rows) =>
    Array.from({ length: size }, (_, cols) => (rows + 1) * (cols + 1))
  );
}

function multiplicationTable(size) {
  let table = [];
  let row = 1;

  while (row <= size) {
    let data = [];
    let col = 1;
    while (col <= size) {
      data.push(col * row);
      col++;
    }
    table.push(data);
    row++;
  }

  return table;
}

function multiplicationTable(size) {
  let table = [];
  let row = 1;

  do {
    let data = [];
    let col = 1;

    do {
      data.push(row * col);
      col++;
    } while (col <= size);

    table.push(data);
    row++;
  } while (row <= size);

  return table;
}

function multiplicationTable(size) {
  let table = [];

  for (let row = 1; row <= size; row++) {
    let data = [];

    for (let col of Array(size).keys()) {
      data.push(row * (col + 1));
    }

    table.push(data);
  }

  return table;
}

function multiplicationTable(size) {
  if (size <= 0) {
    return [];
  } else {
    const table = multiplicationTable(size - 1);
    const row = Array.from({ length: size }, (_, i) => size * i + size);
    table.push(row);
    return table;
  }
}

function multiplicationTable(size) {
  return Array.from({ length: size }, (_, rowIndex) => {
    return Array.from({ length: size }, (_, columnIndex) => {
      return (rowIndex + 1) * (columnIndex + 1);
    });
  });
}
