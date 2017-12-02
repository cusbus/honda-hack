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
                    categories: [15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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
                        data: [1030, 1201, 1350, 1102, 1100, 902, 851, 701, 652, 602, 602, 602, 600, 620, 630, 700, 811, 900, 921, 950, 1001, 1015, 1020, 1025]
                    },
                    {
                        name: "Commute time for getting from point A to point B",
                        data: [48, 50, 51, 55, 51, 47, 40, 34, 30, 29, 22, 20, 21, 25, 29, 35, 45, 47, 45, 40, 37, 45, 42, 45]
                    },
                    {
                        name: "Available parking sports",
                        data: [300, 290, 295, 240, 300, 400, 550, 670, 700, 700, 710, 720, 710, 699, 450, 500, 470, 490, 390, 400, 350, 320, 320, 301]
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