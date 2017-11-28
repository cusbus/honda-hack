(function () {
    'use strict'
    angular.module('client.metrics')
        .controller('metricsController', MetricsController);

    MetricsController.$inject = [];

    function MetricsController() {
        'use strict'
        var vm = this;
        vm.header = "David Tram"

        vm.$onInit = () => {
            vm.chartConfig = {
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
                        text: "Number of Public Proposals"
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
                    text: 'PROPOSALS'
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

    }
})();