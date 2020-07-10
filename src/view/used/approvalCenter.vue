<template>
  <div>
    <Table :columns="columns8" :data="data7" stripe="true" size="small" ref="table"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon>导出原始数据</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon>导出排序和过滤后的数据</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon>导出自定义数据</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns8: [
        {
          'title': 'id',
          'key': 'name',
          'align': 'center',
          // "fixed": "left",
          'width': 100
        },
        {
          'title': 'check',
          'key': 'show',
          'align': 'center',
          'width': 100
        },
        {
          'title': '能否批量过账',
          'key': 'weak',
          'align': 'center',
          'width': 150
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
          'title': '审核状态',
          'key': 'day7',
          'align': 'center',
          'width': 100
        },
        {
          'title': '往来单位',
          'key': 'day30',
          'align': 'center',
          'width': 100
        },
        {
          'title': '单据金额',
          'key': 'tomorrow',
          'align': 'center',
          'width': 100
        },
        {
          'title': '单据摘要',
          'key': 'day',
          'align': 'center',
          'width': 100
        },
        {
          'title': '出库仓库',
          'key': 'week',
          'align': 'center',
          'width': 100
        },
        {
          'title': '入库仓库',
          'key': 'month',
          'align': 'center',
          'width': 100
        },
        {
          'title': '经手人',
          'key': 'month',
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
          'title': '附加说明',
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
