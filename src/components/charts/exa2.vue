<template>
  <div ref="dom"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  name: 'serviceRequests',
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },
  mounted () {
    var colors = ['#4CCED0', '#D7CDEB']
    const option = {
      legend: {
        data: ['销售笔数', '销售金额']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#93E0E1'
          }
        }
      },
      grid: {
        top: '3%',
        left: '1.2%',
        right: '1%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一1', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '销售笔数',
          type: 'line',
          stack: '总数',
          symbolSize: 10, // 设定实心点的大小
          smooth: true,
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              color: colors[0], // 改变折线点的颜色
              lineStyle: {
                color: colors[0], // 改变折线颜色
                width: 2 // 折线宽度
              }
            }
          },
          areaStyle: { normal: {
            color: colors[0]
          } },
          data: [0, 20, 60, 80, 100, 150, 500]
        },
        {
          name: '销售金额',
          type: 'line',
          stack: '总金额',
          symbolSize: 10, // 设定实心点的大小
          smooth: true,
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              color: colors[1], // 改变折线点的颜色
              lineStyle: {
                color: colors[1], // 改变折线颜色
                width: 2 // 折线宽度
              }
            }
          },
          areaStyle: { normal: {
            color: colors[1]
          } },
          data: [820, 645, 546, 745, 872, 624, 258]
        }
      ]
    }
    this.$nextTick(() => {
      this.dom = echarts.init(this.$refs.dom)
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
