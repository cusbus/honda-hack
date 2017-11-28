(function () {
    'use strict'
    angular.module('client.components')
        .component('metricsComponent', {
            templateUrl: '/client/components/metrics/metrics.html',
            controller: MetricsController
        });

    MetricsController.$inject = [];

    function MetricsController() {
        'use strict'
        let $ctrl = this;
        $ctrl.chartName = "Line Chart";

        $ctrl.changeChart = _changeChart;

        $ctrl.$onInit = () => {
            $ctrl.chartConfig = {
                chart: {
                    height: 500,
                    width: 800,
                    reflow: true,
                    type: "column",
                    plotBorderColor: '#346691',
                    plotBorderWidth: 2,
                    zoomType: 'x',
                    panning: true,
                    panKey: 'shift'
                },
                xAxis: {
                    categories: [],
                    crosshair: true,
                    endOnTick: true
                },
                yAxis: {
                    title: {
                        text: "Number/Frequency"
                    },
                    allowDecimals: false
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0.5
                    }
                },
                title: {
                    text: 'Traffic Related Data'
                },
                series: [
                    {
                        name: "Population Congestion Over Time",
                        data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                    },
                    {
                        name: "Commute time for getting from point A to point B",
                        data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                    },
                    {
                        name: "Available parking sports",
                        data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                    },
                    {
                        name: "Express Lanes Cost",
                        data: [12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12, 12, 13, 3, 4, 5, 6, 7, 8, 9, 10, 23, 12]
                    }
                ]
            };
        };

        function _changeChart() {
            if ($ctrl.chartName == "Line Chart") {
                $ctrl.chartConfig.chart.type = "line";
                $ctrl.chartName = "Column Chart";
            }
            else {
                $ctrl.chartConfig.chart.type = "column";
                $ctrl.chartName = "Line Chart";
            }
        }
    }
})();