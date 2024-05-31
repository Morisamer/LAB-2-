window.onload = function() {
  show();
};

function show() {
  let Type = document.getElementById("Type").value;
  let InputsDiv = document.getElementById("Inputs");
  InputsDiv.innerHTML = "";

  if (Type === "simple") {
    InputsDiv.innerHTML = `
    <div id="fraction"> 
      <div id="fraction1">
        <div id="numerator">
          <input type="number" id="numerator1" onchange ="color()">
        </div>
        <div id="denominator">
          <input type="number" id="denominator1" onchange ="color()">
        </div>
      </div>
      <div id="fraction2">
          <div id="numerator">
            <input type="number" id="numerator2" onchange ="color()">
          </div>
          <div id="denominator">
            <input type="number" id="denominator2" onchange ="color()">
          </div>
      </div>
    </div>  
    `;
  } else if (Type === "mixed") {
    InputsDiv.innerHTML = `
    <div id="fraction">
      <div class="container">
        <input type="number" id="whole1" onchange ="color()">
      </div>
      <div id="fraction1">
        <div id="denominator">
        <input type="number" id="numerator1" onchange ="color()">
        </div>
        <div id="denominator">
        <input type="number" id="denominator1" onchange ="color()">
        </div>
      </div>
      <div id="fraction2">
        <div id="denominator">
        <input type="number" id="numerator2" onchange ="color()">
        </div>
        <div id="denominator">
        <input type="number" id="denominator2" onchange ="color()">
        </div>
      </div>
      <div class="container">
        <input type="number" id="whole2" onchange ="color()">
      </div>
    </div>
    `;
  }
}
function color() {
  let num1 = document.getElementById('numerator1');
  let num2 = document.getElementById('numerator2');
  let den1 = document.getElementById('denominator1');
  let den2 = document.getElementById('denominator2');
  let whol1 = document.getElementById('whole1');
  let whol2 = document.getElementById('whole2');
  num1.style.borderColor = '';
  num2.style.borderColor = '';
  den1.style.borderColor = '';
  den2.style.borderColor = '';
  whol1.style.borderColor = '';
  whol2.style.borderColor = '';
}
function validation() {
  const Type = document.getElementById("Type").value;
  let isValid = true;
  let errorMessage = '';

  if (Type === "simple") {
    let numerator1 = document.getElementById("numerator1").value;
    let denominator1 = document.getElementById("denominator1").value;
    let numerator2 = document.getElementById("numerator2").value;
    let denominator2 = document.getElementById("denominator2").value;
    let num1 = document.getElementById('numerator1');
    let num2 = document.getElementById('numerator2');
    let den1 = document.getElementById('denominator1');
    let den2 = document.getElementById('denominator2');
    num1.style.borderColor = '';
    num2.style.borderColor = '';
    den1.style.borderColor = '';
    den2.style.borderColor = '';

    if (!numerator1 || !denominator1 || !numerator2 || !denominator2) {
      isValid = false;
      num1.style.borderColor = 'red';
      num2.style.borderColor = 'red';
      den1.style.borderColor = 'red';
      den2.style.borderColor = 'red';
      errorMessage = 'Пожалуйства введите корректные значения для всех полей. Поля не могут быть пустыми.';
    }
    else if (denominator1 == 0) {
      isValid = false;
      den1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель не может быть равен нулю.';
    } 
    else if (denominator2 == 0) {
      isValid = false;
      den2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель не может быть равен нулю.';
    } 
    else if (numerator1 % 1 != 0) {
      isValid = false;
      num1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Числительдолжен быть целым.';
    }
    else if (denominator1 % 1 != 0) {
      isValid = false;
      den1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель должен быть целым.';
    }
    else if (numerator2 % 1 != 0) {
      isValid = false;
      num2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Числитель должен быть целым.';
    }
    else if (denominator2 % 1 != 0) {
      isValid = false;
      den2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель должен быть целым.';
    }
  } else if (Type === "mixed") {
    let whole1 = document.getElementById("whole1").value;
    let numerator1 = document.getElementById("numerator1").value;
    let denominator1 = document.getElementById("denominator1").value;
    let whole2 = document.getElementById("whole2").value;
    let numerator2 = document.getElementById("numerator2").value;
    let denominator2 = document.getElementById("denominator2").value;
    let num1 = document.getElementById('numerator1');
    let num2 = document.getElementById('numerator2');
    let den1 = document.getElementById('denominator1');
    let den2 = document.getElementById('denominator2');
    let whol1 = document.getElementById('whole1');
    let whol2 = document.getElementById('whole2');
    if (!whole1 || !numerator1 || !denominator1 || !whole2 || !numerator2 || !denominator2) {
      isValid = false;
      num1.style.borderColor = 'red';
      num2.style.borderColor = 'red';
      den1.style.borderColor = 'red';
      den2.style.borderColor = 'red';
      whol1.style.borderColor = 'red';
      whol2.style.borderColor = 'red';
      errorMessage = 'Пожалуйства введите корректные значения для всех полей. Поля не могут быть пустыми.';
    }
    else if (denominator1 == 0) {
      isValid = false;
      den1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель не может быть равен нулю.';
    } 
    else if (denominator2 == 0) {
      isValid = false;
      den2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель не может быть равен нулю.';
    }
    else if (numerator1 > denominator1) {
      isValid = false;
      num1.style.borderColor = 'red';
      errorMessage = 'Пожалуйства введите корректные значения для всех полей. В смешанной дроби числитель не может быть больше знаменателя.';
    }
    else if (numerator2 > denominator2) {
      isValid = false;
      num2.style.borderColor = 'red';
      errorMessage = 'Пожалуйства введите корректные значения для всех полей. В смешанной дроби числитель не может быть больше знаменателя.';
    }
    else if (whole1 % 1 != 0) {
      isValid = false;
      whol1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Целая часть должна быть целой.';
    }
    else if (whole2 % 1 != 0) {
      isValid = false;
      whol2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Целая часть должна быть целой.';
    }
    else if (denominator1 == 0) {
      isValid = false;
      den1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель не может быть равен нулю.';
    } 
    else if (denominator2 == 0) {
      isValid = false;
      den2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель не может быть равен нулю.';
    } 
    else if (numerator1 % 1 != 0) {
      isValid = false;
      num1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Числительдолжен быть целым.';
    }
    else if (denominator1 % 1 != 0) {
      isValid = false;
      den1.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель должен быть целым.';
    }
    else if (numerator2 % 1 != 0) {
      isValid = false;
      num2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Числитель должен быть целым.';
    }
    else if (denominator2 % 1 != 0) {
      isValid = false;
      den2.style.borderColor = 'red';
      errorMessage = 'Пожалуйста введите корректные значения для всех полей. Знаменатель должен быть целым.';
    }
  }

  if (!isValid) {
    document.getElementById("error").textContent = errorMessage;
  } else {
    document.getElementById("error").textContent = '';
  }

  return isValid;
}

function calculate() {
  if (!validation()) return;

  let operations = Array.from(document.getElementById("operations").selectedOptions).map(option => option.value);
  if (!operations.length) {
    let errorMessage = 'Пожалуйста выберите операцию.'
    document.getElementById("error").textContent = errorMessage;
    return;
  }
  let resultsDiv = document.getElementById("result");
  resultsDiv.innerHTML = "";

  let fractions = getFractions();

  operations.forEach(operation => {
    let result = perform(operation, fractions);
    if (operation === "Add") {
      resultsDiv.innerHTML += `<p id="res">Сумма: ${format(result)}</p>`;
    }
    else if (operation === "Sub") {
      resultsDiv.innerHTML += `<p id="res">Разность: ${format(result)}</p>`;
    }
    else if (operation === "Mul") {
      resultsDiv.innerHTML += `<p id="res">Произведение: ${format(result)}</p>`;
    }
    else if (operation === "Div") {
      resultsDiv.innerHTML += `<p id="res">Частное: ${format(result)}</p>`;
    }
  });
}

function getFractions() {
  let Type = document.getElementById("Type").value;
  let fractions = {};

  if (Type === "simple") {
    fractions.a = {
      numerator: document.getElementById("numerator1").value,
      denominator: document.getElementById("denominator1").value
    };
    fractions.b = {
      numerator: document.getElementById("numerator2").value,
      denominator: document.getElementById("denominator2").value
    };
  } else if (Type === "mixed") {
    fractions.a = {
      whole: document.getElementById("whole1").value,
      numerator: document.getElementById("numerator1").value,
      denominator: document.getElementById("denominator1").value
    };
    fractions.b = {
      whole: document.getElementById("whole2").value,
      numerator: document.getElementById("numerator2").value,
      denominator: document.getElementById("denominator2").value
    };
  }

  return fractions;
}

function perform(operation, fractions) {
  let result;
  let { a, b } = fractions;

  switch (operation) {
    case "Add":
      result = add(a, b);
      break;
    case "Sub":
      result = sub(a, b);
      break;
    case "Mul":
      result = mul(a, b);
      break;
    case "Div":
      result = div(a, b);
      break;
    default:
      result = "Invalid operation";
  }

  return result;
}

function add(a, b) {
  let result;

  if (a.whole === undefined && b.whole === undefined) {
    let common = a.denominator * b.denominator;
    let numSum = a.numerator * b.denominator + b.numerator * a.denominator; //ищем общий, домножаем числитель на знаменатель другой дроби
    result = simply(numSum, common);
  } else {
    let A = toUncorrect(a);
    let B = toUncorrect(b);
    let common = A.denominator * B.denominator;
    let numSum = A.numerator * B.denominator + B.numerator * A.denominator;
    result = simply(numSum, common);
  }

  return result;
}

function sub(a, b) {
  let result;

  if (a.whole === undefined && b.whole === undefined) {
    let common = a.denominator * b.denominator;
    let numSub = a.numerator * b.denominator - b.numerator * a.denominator;
    result = simply(numSub, common);
  } else {
    let A = toUncorrect(a);
    let B = toUncorrect(b);
    let common = A.denominator * B.denominator;
    let numSub = A.numerator * B.denominator - B.numerator * A.denominator;
    result = simply(numSub, common);
  }

  return result;
}

function mul(a, b) {
  let result;

  if (a.whole === undefined && b.whole === undefined) {
    let numCom = a.numerator * b.numerator;
    let denCom = a.denominator * b.denominator;
    result = simply(numCom, denCom);
  } else {
    let A = toUncorrect(a);
    let B = toUncorrect(b);
    let numCom = A.numerator * B.numerator;
    let denCom = A.denominator * B.denominator;
    result = simply(numCom, denCom);
  }

  return result;
}

function div(a, b) {
  let result;

  if (a.whole === undefined && b.whole === undefined) {
    let numDiv = a.numerator * b.denominator;
    let denDiv = a.denominator * b.numerator;
    result = simply(numDiv, denDiv);
  } else {
    let A = toUncorrect(a);
    let B = toUncorrect(b);
    let numDiv = A.numerator * B.denominator;
    let denDiv = A.denominator * B.numerator;
    result = simply(numDiv, denDiv);
  }

  return result;
}

function toUncorrect(fraction) {
  if (fraction.whole === undefined) {
    return {
      numerator: parseInt(fraction.numerator),
      denominator: parseInt(fraction.denominator)
    };
  }
  return {
    numerator: parseInt(fraction.whole) * parseInt(fraction.denominator) + parseInt(fraction.numerator),
    denominator: parseInt(fraction.denominator)
  };
}

function simply(numerator, denominator) {
  let NoD = calculateNoD(numerator, denominator);
  return {
    numerator: numerator / NoD,
    denominator: denominator / NoD
  };
}

function calculateNoD(a, b) {
  if (b === 0) {
    return a;
  }
  return calculateNoD(b, a % b);
}

function format(fraction) {
  if (fraction.numerator === 0) {
    return `${fraction.numerator}`
  }
  else {
    return `${fraction.numerator}/${fraction.denominator}`;
  }
}
function clearInputs() {
  document.getElementById("Inputs").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("error").textContent = "";
  show();
}
