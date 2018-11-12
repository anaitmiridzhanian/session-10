Vue.component('multibar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted() {
    var data = this.data || {
      type: 'bar',
      data: data,
      labels: ["Mediterranean Migrant Crisis", "Protests of Islam critical PEGIDA movement in Dresden", "Financial Crisis in Greece", "Ukraine conflict between Russia and Western Countries"],
      datasets: [{
        label: 'Very high trust',
        backgroundColor: 'darkgreen',
        data: [0.03, 0.03, 0.04, 0.02],
      }, {
        label: 'High trust',
        backgroundColor: 'green',
        data: [0.45, 0.37, 0.31, 0.3],
      }, {
        label: 'No answer',
        backgroundColor: 'red',
        data: [0.02, 0.04, 0.02, 0.02],
      }, {
        label: 'Low trust',
        backgroundColor: 'yellow',
        data: [0.41, 0.41, 0.46, 0.52],
      }, {
        label: 'Very low trust',
        backgroundColor: 'grey',
        data: [0.09, 0.15, 0.17, 0.14],
      }]
    }
    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          stacked: true,
          categoryPercentage: 1,
          barPercentage: 2 / 3
        }],
        yAxes: [{
          display: true,
          stacked: true,
          ticks: {
            beginAtZero: true
          }}]
      }
      }
    this.renderChart(data, options);
  }
})