
function Math () {
  
  /* Math ref
  this.add = function (x, y) {
    return x+y;
  }
  */
  
  this.power = function (x, y) {
    if (y < 0) return 0;
    var result = 1;
    for (var i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }
}


function BmiCalculator () {
  this.weight = 0;
  this.height = 0;

  this.setWeight = function (w) {
    this.weight = w;
  }

  this.getWeight = function () {
    return this.weight;
  }

  this.printWeight = function () {
    return this.weight + 'kg = '
      + (this.weight*1000) + 'g';
  }

  this.setHeight = function (h) {
    this.height = h;
  }

  this.getHeight = function () {
    return this.height;
  }

  this.printHeight = function () {
    return this.height + 'm = '
      + (this.height*100) + 'cm';
  }

  this.calculate = function () {
    var math = new Math();
    return this.weight / math.power(this.height, 2);
  };
}

/*html
var calc_btn = document.getElementById('calc');
calc_btn.addEventListener('click', function () {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  var bmiCalculator = new BmiCalculator();
  bmiCalculator.setWeight(weight);
  bmiCalculator.setHeight(height);

  document.getElementById('output_weight')
    .innerHTML = bmiCalculator.printWeight();
  document.getElementById('output_height')
    .innerHTML = bmiCalculator.printHeight();
  document.getElementById('output_bmi')
    .innerHTML = bmiCalculator.calculate();
});
*/
