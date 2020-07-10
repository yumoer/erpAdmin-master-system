<template>
  <div>
    <div>
      <div style="line-height: 30px">
        <span style="font-size: 14px;margin-bottom: 10px;font-weight: bold">{{name}}</span>
        <span style="margin-left: 40px">[日期：2020-02-23 至 2020-03-23]</span>
        <span style="margin-left: 40px">出库仓库：
          <Input style="width: 100px" disabled placeholder="全部仓库"/>
        </span>
        <span style="margin-left: 40px">入库仓库：
          <Input style="width: 100px" disabled placeholder="全部仓库"/>
        </span>
        <Button type="primary" style="float: right;font-size: 14px;" size="large" @click="exportData(2)"><Icon type="md-refresh" />刷新</Button>
      </div>
      <div style="border: solid 1px #ddd;padding: 5px;margin-top: 10px">
        <span style="margin-left: 5px">今天</span>
        <span style="margin-left: 5px">近3天</span>
        <span style="margin-left: 5px">近15天</span>
        <span style="margin-left: 5px">近30天</span>
        <span style="margin-left: 10px">单据类型：
          <Select v-model="model1" style="width:80px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </span>
        <span style="margin-left: 10px">审核状态：
           <Select v-model="model1" style="width:80px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>
        <span style="margin-left: 10px">往来单位：
          <Select v-model="model1" style="width:80px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>
        <span style="margin-left: 10px">经手人：
          <Select v-model="model1" style="width:80px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>
        <span style="margin-left: 10px">科目：
          <Select v-model="model1" style="width:80px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>
        <span style="margin-left: 10px">商品：
          <Select v-model="model1" style="width:80px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(2)"><Icon type="md-search" />查询</Button>
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(2)"><Icon type="md-pricetag" />高级</Button>
      </div>
    </div>
    <div style="margin-top: 15px;display: block">
      <Table border highlight-row :columns="columns8" :data="data7" :stripe="true" size="small" ref="table"></Table>
    </div>
    <div style="border: solid 1px #ddd;padding: 5px;text-align: right">
      <Page :total="20" :current="pageNum" :page-size="pageSize" show-elevator show-sizer show-total placement="top" @on-change="handlePage" prev-text="上一页" next-text="下一页" @on-page-size-change='handlePageSize'></Page>
    </div>
    <div style="margin-top: 10px">
      <div style="float: left">
        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon>复制打开</Button>
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon>修改单据</Button>
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon>删除单据</Button>
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(4)"><Icon type="ios-download-outline"></Icon>批量过账</Button>
      </div>
      <div style="float: right">
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(5)"><Icon type="ios-download-outline"></Icon>打印</Button>
        <Button type="primary" style="margin-left: 10px" size="large" @click="exportData(6)"><Icon type="ios-download-outline"></Icon>退出(X)</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '单据草稿',
      model1: '',
      pageNum: 1,
      pageSize: 10,
      cityList: [
        { value: '全部', label: '全部' },
        { value: '进货入库', label: '进货入库' },
        { value: '进货退货', label: '进货退货' },
        { value: '进货换货', label: '进货换货' },
        { value: '销售出库', label: '销售出库' },
        { value: '销售退货', label: '销售退货' },
        { value: '销售换货', label: '销售换货' },
        { value: '报损', label: '报损' },
        { value: '报溢', label: '报溢' },
        { value: '其他入库', label: '其他入库' },
        { value: '其他出库', label: '其他出库' },
        { value: '组装拆卸', label: '组装拆卸' },
        { value: '期初库存调整', label: '期初库存调整' },
        { value: '收款', label: '收款' },
        { value: '付款', label: '付款' },
        { value: '调价', label: '调价' },
        { value: '调拨', label: '调拨' },
        { value: '会计凭证', label: '会计凭证' },
        { value: '费用', label: '费用' },
        { value: '待摊费用', label: '待摊费用' },
        { value: '费用摊销', label: '费用摊销' }
      ],
      columns8: [
        {
          'title': '序号',
          'type': 'index',
          'width': 80,
          'align': 'center'
        },
        {
          'title': '日期',
          'key': 'signin',
          'align': 'center',
          'width': 100
        },
        {
          'title': '单据编号',
          'key': 'click',
          'align': 'center',
          'width': 100
        },
        {
          'title': '单据类型',
          'key': 'active',
          'align': 'center',
          'width': 100
        },
        {
          'title': '单据金额',
          'key': 'day7',
          'align': 'center',
          'width': 100
        },
        {
          'title': '优惠后金额',
          'key': 'day30',
          'align': 'center',
          'width': 100
        },
        {
          'title': '摘要',
          'key': 'tomorrow',
          'align': 'center',
          'width': 100
        },
        {
          'title': '经手人',
          'key': 'day',
          'align': 'center',
          'width': 100
        },
        {
          'title': '制单人',
          'key': 'week',
          'align': 'center',
          'width': 100
        },
        {
          'title': '部门',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '往来单位',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '仓库',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '过账人',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '业务类型',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '附加说明',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '红冲原因',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '物流单号',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '过账时间',
          'key': 'month',
          'align': 'center',
          'width': 100
        }
      ],
      data7: [
        {
          'name': 'Name1',
          'fav': 0,
          'show': 7302,
          'weak': 5627,
          'signin': 1563,
          'click': 4254,
          'active': 1438,
          'day7': 274,
          'day30': 285,
          'tomorrow': 1727,
          'day': 558,
          'week': 4440,
          'month': 5610
        },
        {
          'name': 'Name2',
          'fav': 0,
          'show': 4720,
          'weak': 4086,
          'signin': 3792,
          'click': 8690,
          'active': 8470,
          'day7': 8172,
          'day30': 5197,
          'tomorrow': 1684,
          'day': 2593,
          'week': 2507,
          'month': 1537
        },
        {
          'name': 'Name3',
          'fav': 0,
          'show': 7181,
          'weak': 8007,
          'signin': 8477,
          'click': 1879,
          'active': 16,
          'day7': 2249,
          'day30': 3450,
          'tomorrow': 377,
          'day': 1561,
          'week': 3219,
          'month': 1588
        },
        {
          'name': 'Name4',
          'fav': 0,
          'show': 9911,
          'weak': 8976,
          'signin': 8807,
          'click': 8050,
          'active': 7668,
          'day7': 1547,
          'day30': 2357,
          'tomorrow': 7278,
          'day': 5309,
          'week': 1655,
          'month': 9043
        },
        {
          'name': 'Name5',
          'fav': 0,
          'show': 934,
          'weak': 1394,
          'signin': 6463,
          'click': 5278,
          'active': 9256,
          'day7': 209,
          'day30': 3563,
          'tomorrow': 8285,
          'day': 1230,
          'week': 4840,
          'month': 9908
        },
        {
          'name': 'Name6',
          'fav': 0,
          'show': 6856,
          'weak': 1608,
          'signin': 457,
          'click': 4949,
          'active': 2909,
          'day7': 4525,
          'day30': 6171,
          'tomorrow': 1920,
          'day': 1966,
          'week': 904,
          'month': 6851
        },
        {
          'name': 'Name7',
          'fav': 0,
          'show': 5107,
          'weak': 6407,
          'signin': 4166,
          'click': 7970,
          'active': 1002,
          'day7': 8701,
          'day30': 9040,
          'tomorrow': 7632,
          'day': 4061,
          'week': 4359,
          'month': 3676
        },
        {
          'name': 'Name8',
          'fav': 0,
          'show': 862,
          'weak': 6520,
          'signin': 6696,
          'click': 3209,
          'active': 6801,
          'day7': 6364,
          'day30': 6850,
          'tomorrow': 9408,
          'day': 2481,
          'week': 1479,
          'month': 2346
        },
        {
          'name': 'Name9',
          'fav': 0,
          'show': 567,
          'weak': 5859,
          'signin': 128,
          'click': 6593,
          'active': 1971,
          'day7': 7596,
          'day30': 3546,
          'tomorrow': 6641,
          'day': 1611,
          'week': 5534,
          'month': 3190
        },
        {
          'name': 'Name10',
          'fav': 0,
          'show': 3651,
          'weak': 1819,
          'signin': 4595,
          'click': 7499,
          'active': 7405,
          'day7': 8710,
          'day30': 5518,
          'tomorrow': 428,
          'day': 9768,
          'week': 2864,
          'month': 5811
        }
      ]
    }
  },
  methods: {
    handlePage () {

    },
    handlePageSize () {

    },
    exportData (type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: 'The original data'
        })
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: 'Sorting and filtering data',
          original: false
        })
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: 'Custom data',
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        })
      }
    }
  }
}
</script>
