<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card class="box-card">
          <div id="echarts1" style="height:500px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div id="echarts3" style="height:500px"></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card class="box-card">
          <div id="echarts2" style="height:500px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div id="echarts4" style="height:500px"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.lineRender();
    this.barRender();
    this.piaRender();
    this.radarRender();
  },
  methods: {
    // 柱状折线渲染
    lineRender() {
      var myChart = echarts.init(document.getElementById("echarts1"));
      var options = {
        title: {
          text: "我只是来测试的",
          x: "left"
        },
        xAxis: {
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          x: "10%",
          x2: "10%",
          y: "10%",
          y2: "10%",
          borderWidth: 0
        },
        series: [
          {
            name: "放款",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#8ec6ad"
              }
            },
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#8ec6ad"
                  },
                  {
                    offset: 1,
                    color: "#ffe"
                  }
                ])
              }
            },
            barMaxWidth: 35,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name: "还款",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#d68262"
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#d68262"
                  },
                  {
                    offset: 1,
                    color: "#ffe"
                  }
                ])
              }
            },
            barMaxWidth: 35,
            data: [620, 832, 751, 834, 1090, 1130, 1020]
          }
        ]
      };
      myChart.setOption(options);
      window.onresize = myChart.resize;
    },
    barRender() {
      var myChart = echarts.init(document.getElementById("echarts2"));
      var options = {
        title: {
          text: "我只是来测试的",
          x: "left"
        },
        xAxis: {
          splitLine: {
            show: false
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        grid: {
          x: "10%",
          x2: "10%",
          y: "10%",
          y2: "10%",
          borderWidth: 0
        },
        series: [
          {
            name: "放款",
            type: "bar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#8ec6ad" },
                  { offset: 1, color: "#ffe" }
                ])
              }
            },
            barMaxWidth: 30,
            data: [320, 532, 1201, 1500, 1390, 730, 420]
          },
          {
            name: "还款",
            type: "bar",

            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#d68262" },
                  { offset: 1, color: "#ffe" }
                ])
              }
            },
            barMaxWidth: 30,
            data: [620, 832, 1751, 1334, 1090, 830, 620]
          }
        ]
      };
      myChart.setOption(options);
      window.onresize = myChart.resize;
    },
    // 饼图渲染
    piaRender() {
      var myChart6 = echarts.init(document.getElementById("echarts3"));
      var option6 = {
        title: {
          text: "我只是来测试的",
          x: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
          {
            name: "放款",
            type: "pie",
            roseType: "radius",
            data: [
              { value: 820, name: "Mon" },
              { value: 932, name: "Tue" },
              { value: 1001, name: "Wed" },
              { value: 1134, name: "Thu" },
              { value: 1090, name: "Fri" },
              { value: 1330, name: "Sat" },
              { value: 1420, name: "Sun" }
            ]
          }
        ]
      };
      window.onresize = myChart6.resize;
      myChart6.setOption(option6);
    },
    radarRender() {
      var myChart6 = echarts.init(document.getElementById("echarts4"));
      var option6 = {
        title: {
          text: "我只是来测试的",
          x: "left"
        },
        tooltip: {},
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "Mon", max: 1000 },
            { name: "Tue", max: 1100 },
            { name: "Wed", max: 1200 },
            { name: "Thu", max: 1200 },
            { name: "Fri", max: 1300 },
            { name: "Sat", max: 1400 },
            { name: "Sun", max: 1400 }
          ]
        },
        series: [
          {
            name: "放款 vs 还款",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [820, 932, 901, 934, 1290, 1330, 1320],
                name: "放款",
                areaStyle: {
                  normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        offset: 0,
                        color: "#d68262"
                      },
                      {
                        offset: 1,
                        color: "#ffe"
                      }
                    ])
                  }
                }
              },
              {
                value: [620, 832, 751, 834, 1090, 1130, 1020],
                name: "还款",
                areaStyle: {
                  normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        offset: 0,
                        color: "#8ec6ad"
                      },
                      {
                        offset: 1,
                        color: "#ffe"
                      }
                    ])
                  }
                }
              }
            ]
          }
        ]
      };
      window.onresize = myChart6.resize;
      myChart6.setOption(option6);
    }
  }
};
</script>
<style scoped>
</style>