import React from 'react';
import '../style/style.css';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';

export default function Dashboard() {

  const [chartState, setChartState] = React.useState({

    series: [
      {
        name: "Profit",
        data: [10, 20, 15, 25, 20, 30],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: false },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#00C8E6"],
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
        lines: { show: true },
      },
      yaxis: {
        show: false,
        lines: { show: false },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      markers: {
        size: 5,
        colors: ["#00C8E6"],
        strokeColors: "#fff",
        border: "1px dashed",
        strokeWidth: 2,
      },
    },
  });

  // ............. Customers Chart ................ //
  const [chartData, setChartData] = React.useState({
    series: [76], // Define series value directly here
    options: {
      chart: {
        height: 200,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '80%',
            background: '#fff',
            fontSize: '12px',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: false,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.5,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.7,
            },
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              formatter: function (val) {
                return `${parseInt(val)}%`;
              },
              color: '#111',
              fontSize: '14px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: [],
    },
  });

  // // ............. Monthly Report Chart ................ //
  const [state, setState] = React.useState({
    series: [44, 55, 41, 17, 15],
    productNames: ["TV", "Sports", "Furniture", "Home appliance", "Yoga", "Makeup"],
    options: {
      chart: {
        width: "100%",
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: "75%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Products",
                style: {
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#333",
                },
                formatter: function (w) {
                  const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return `Total: ${total}`;
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        show: false,
      },
      title: {
        text: "",
      },
      responsive: [
        {
          breakpoint: 1024, // Tablet
          options: {
            chart: {
              width: 300,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "65%",
                },
              },
            },
          },
        },
        {
          breakpoint: 768, // Mobile
          options: {
            chart: {
              width: 250,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "55%",
                },
              },
            },
          },
        },
        {
          breakpoint: 480, // Smaller mobile
          options: {
            chart: {
              width: 200,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "50%",
                },
              },
            },
          },
        },
        {
          breakpoint: 400, // Smallest mobile
          options: {
            chart: {
              width: 100,
            },
            plotOptions: {
              pie: {
                donut: {
                  size: "20%",
                },
              },
            },
            tooltip: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      ],
      tooltip: {
        custom: function ({ series, seriesIndex, w }) {
          return `<div style="padding: 10px; text-align: center; font-size: 12px;">
                    <strong>${state.productNames[seriesIndex]}</strong>
                    <br />
                    Quantity: ${series[seriesIndex]}
                  </div>`;
        },
      },
    },
  });


  return (
    <>
      <div className="container dashboard-section">
        <div className="row">
          <div className='col-lg-3 col-sm-6 mb-3'>
            <div class="card order-revenue dashboard-card h-100">
              <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                  <div class="avatar me-3">
                    <span class="avatar-initial rounded bg-label-primary">
                      <i class="bi bi-truck"></i></span>
                  </div>
                  <h4 class="mb-0">42</h4>
                </div>
                <p class="mb-1">Lead</p>
                <p class="mb-0">
                  <span class="text-heading text-success fw-medium me-2">+18.2%</span>
                  <small class="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="card produts-quantity dashboard-card h-100 border-bottom-0">
              <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                  <div class="avatar me-4">
                    <span class="avatar-initial rounded bg-label-warning"><i class="bi bi-box"></i></span>
                  </div>
                  <h4 class="mb-0">8</h4>
                </div>
                <p class="mb-1">Users</p>
                <p class="mb-0">
                  <span class="text-heading text-danger fw-medium me-2">-8.7%</span>
                  <small class="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="card dashboard-card customers-card border-bottom-0 h-100">
              <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                  <div class="avatar me-4">
                    <span class="avatar-initial rounded bg-label-info"><i class="bi bi-people ti-28px"></i></span>
                  </div>
                  <h4 class="mb-0">13</h4>
                </div>
                <p class="mb-1">Total Post</p>
                <p class="mb-0">
                  <span class="text-heading text-success fw-medium me-2">+5.5%</span>
                  <small class="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-3">
            <div class="card dashboard-card review-card border-bottom-0 h-100">
              <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                  <div class="avatar me-4">
                    <span class="avatar-initial rounded bg-label-danger"><i class="bi bi-chat-square-dots ti-28px"></i></span>
                  </div>
                  <h4 class="mb-0">27</h4>
                </div>
                <p class="mb-1">Review</p>
                <p class="mb-0">
                  <span class="text-heading text-success fw-medium me-2">+4.3%</span>
                  <small class="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className='col-md-6 mb-3'>
            <div className="chart-container p-4" style={{ textAlign: "left" }}>
              <p style={{ margin: "0", color: "#666", fontSize: "14px", fontWeight: "bold" }}>Profit</p>
              <p style={{ margin: "0", color: "#999", fontSize: "12px" }}>Last Month</p>
              <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={185} />
              <p style={{ margin: "10px 0 0", fontSize: "24px", fontWeight: "bold", color: "#333" }}>624k</p>
              <p style={{ margin: "0", fontSize: "14px", color: "#4CAF50" }}>+8.24%</p>
            </div>
          </div>
          <div className='col-md-6 mb-3'>
            <div className="chart-container p-4" style={{ textAlign: "left" }}>
              <p style={{ margin: "0", color: "#666", fontSize: "14px", fontWeight: "bold" }}>Customers</p>
              <p style={{ margin: "0", color: "#999", fontSize: "12px" }}>Last Month</p>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="radialBar"
                height={chartData.options.chart.height}
              />


              <p style={{ margin: "10px 0 0", fontSize: "24px", fontWeight: "bold", color: "#333" }}>82.5k</p>
              <p style={{ margin: "0", fontSize: "14px", color: "#4CAF50" }}>+8.24%</p>
            </div>
          </div>
        </div>
        <div className='card mt-3'>
          <div className='row  p-4 mx-1'>
            <div className='col-md-6 mb-3'>
              <div className='border-0 bg-white'>
                <p style={{ marginBottom: "0", color: "#000", fontSize: "20px", fontWeight: "bold" }}>Generated Leads</p>
                <p style={{ marginBottom: "0", color: "#8d8a94", fontSize: "14px" }}>Monthly Report</p>
                <p style={{ margin: "10px 0 0", fontSize: "24px", fontWeight: "bold", color: "#333", marginTop: "47px" }}>82.5k</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#4CAF50" }}>+8.24%</p>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div id="donut_chart">
                <ReactApexChart options={state.options} series={state.series} type="donut" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}
