<template>
  <div>
    <div>
      <div style="padding-left:5px;margin-bottom:10px;font-size: 14px;font-weight: bold;border-left: solid 6px #2881C7;">常用功能</div>
      <Row :gutter="20">
        <i-col :xs="16" :md="8" :lg="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 20px;">
          <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
            <!--<count-to :end="infor.count" count-class="count-style"/>-->
            <p>{{ infor.title }}</p>
          </infor-card>
        </i-col>
      </Row>
    </div>

      <Row :gutter="20" style="margin-top: 10px;">
        <!--<i-col :md="24" :lg="8" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-pie style="height: 300px;" :value="pieData" text="进货趋势"></chart-pie>
          </Card>
        </i-col>
        <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
          <Card shadow>
            <chart-bar style="height: 300px;" :value="barData" text="销售趋势"/>
          </Card>
        </i-col>-->

        <i-col :md="12" :lg="12">
          <div style="display: inline-block;">
            <span style="padding-left:5px;margin-bottom:15px;font-size: 14px;font-weight: bold;border-left: solid 6px #2881C7;display: block">进货趋势</span>
            <Select v-model="model1" style="width:100px;position: absolute;right: 10px;top: -6px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <Card shadow>
            <Exa1 style="height: 300px;"></Exa1>
          </Card>
        </i-col>

        <i-col :md="12" :lg="12">
          <div style="display: inline-block">
            <span style="padding-left:5px;margin-bottom:15px;font-size: 14px;font-weight: bold;border-left: solid 6px #2881C7;display: block">销售趋势</span>
            <Select v-model="model2" style="width:100px;position: absolute;right: 10px;top: -6px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <Card shadow>
            <Exa2 style="height: 300px;"></Exa2>
          </Card>
        </i-col>
      </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar, Exa1, Exa2 } from '_c/charts'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Exa1,
    Exa2
  },
  data () {
    return {
      inforCardData: [
        { title: '单据草稿', icon: 'ios-create', color: '#2d8cf0' },
        { title: '单据中心', icon: 'md-create', color: '#19be6b' },
        { title: '进货入库单', icon: 'ios-paper', color: '#ff9900' },
        { title: '销售出库单', icon: 'md-redo', color: '#ed3f14' },
        { title: '库存状况表', icon: 'md-disc', color: '#2db7f5' },
        { title: '往来单位应收应付', icon: 'md-swap', color: '#9A66E4' },
        { title: '商品销售统计', icon: 'ios-podium', color: '#ea5504' },
        { title: '利润表', icon: 'md-list-box', color: '#E46CBB' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      },
      cityList: [
        {
          value: '最近七天',
          label: '最近七天'
        },
        {
          value: '今天',
          label: '今天'
        }
      ],
      model1: '',
      model2: ''
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
