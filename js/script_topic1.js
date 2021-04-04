(function() {
  'use strict';

  const cvs1 = document.getElementById('my_chart');
  cvs1.setAttribute("width", 100);
  cvs1.setAttribute("height", 100);

  var type1 = 'line';

  var data1 = {
    labels: [2010, 2011, 2012, 2013],
    datasets: [{
      label: '@AAA',
      data: [120, 300, 200, 210],
      borderColor: "#ff6347",
      backgroundColor: "#ff6347"
    }, {
      label: '@BBB',
      data: [180, 250, 320, 340],
      borderColor: "#4169e1",
      backgroundColor: "#4169e1"
    }, {
      label: '@CCC',
      data: [240, 280, 120, 300],
      borderColor: "#00ff7f",
      backgroundColor: "#00ff7f"
    }]
  };

  var options1 = {
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 0,
          suggestedMax: 400,
        }
      }]
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'chart1'
      }
    }
  };

  var ctx = document.getElementById('my_chart').getContext('2d');
  var Chart1 = new Chart(ctx, {
    type: type1,
    data: data1,
    options: options1
  });

  //chart2

  const cvs2 = document.getElementById('my_chart2');
  cvs2.setAttribute("width", 100);
  cvs2.setAttribute("height", 100);

  var type2 = 'bar';

  var options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart2'
      }
    }
  }

var data2 = {
  labels: [2010, 2011, 2012, 2013],
  datasets: [{
    label: '@AAA',
    data: [120, 300, 200, 210],
    borderColor: "#ff7f50",
    backgroundColor: "#ff7f50"
  }, {
    label: '@BBB',
    data: [180, 250, 320, 340],
    borderColor: "#b0c4de",
    backgroundColor: "#b0c4de"
  }, {
    label: '@CCC',
    data: [240, 280, 120, 300],
    borderColor: "#008080",
    backgroundColor: "#008080"
  }]
}

var ctx = document.getElementById('my_chart2').getContext('2d');
var Chart2 = new Chart(ctx, {
  type: type2,
  data: data2,
  options: options2
});

//chart3

const cvs3 = document.getElementById('my_chart3');
  cvs3.setAttribute("width", 100);
  cvs3.setAttribute("height", 100);

  var type3 = 'pie';

  var options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart3'
      }
    }
  }

var data3 = {
  labels: [10, 20, 30, 40],
  datasets: [{
    label: '@AAA',
    data: [120, 300, 200, 210],
    backgroundColor: ["#ff9e9e", "#93c9ff", "#93ffc9", "#ffff99" ],
  }]
}

var ctx = document.getElementById('my_chart3').getContext('2d');
var Chart3 = new Chart(ctx, {
  type: type3,
  data: data3,
  options: options3
});

})();