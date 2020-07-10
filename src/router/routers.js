import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },

  {
    path: '/used',
    name: '常用',
    meta: {
      icon: 'logo-dropbox',
      title: '常用'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '单据草稿',
        meta: {
          icon: 'ios-create',
          title: '单据草稿'
        },
        component: () => import('@/view/used/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '单据中心',
        meta: {
          icon: 'md-create',
          title: '单据中心'
        },
        component: () => import('@/view/used/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '单据审核中心',
        meta: {
          icon: 'md-document',
          title: '单据审核中心'
        },
        component: () => import('@/view/used/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '库存状况表',
        meta: {
          icon: 'md-filing',
          title: 'statusTable'
        },
        component: () => import('@/view/used/statusTable.vue')
      }
    ]
  },

  {
    path: '/shop',
    name: '商品',
    meta: {
      icon: 'ios-analytics',
      title: '商品'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '商品信息',
        meta: {
          icon: 'ios-list-box',
          title: '商品信息'
        },
        component: () => import('@/view/shop/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: 'sku管理',
        meta: {
          icon: 'md-radio-button-on',
          title: 'sku管理'
        },
        component: () => import('@/view/shop/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '商品套餐管理',
        meta: {
          icon: 'md-recording',
          title: '商品套餐管理'
        },
        component: () => import('@/view/shop/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '商品合并',
        meta: {
          icon: 'md-swap',
          title: '商品合并'
        },
        component: () => import('@/view/shop/statusTable.vue')
      }
    ]
  },

  {
    path: '/stockPurchase',
    name: '进货',
    meta: {
      icon: 'ios-filing',
      title: '进货'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '新增进货订单',
        meta: {
          icon: 'ios-clipboard',
          title: '新增进货订单'
        },
        component: () => import('@/view/stockPurchase/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '进货订单管理',
        meta: {
          icon: 'md-bookmarks',
          title: '进货订单管理'
        },
        component: () => import('@/view/stockPurchase/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '询价管理',
        meta: {
          icon: 'md-funnel',
          title: '询价管理'
        },
        component: () => import('@/view/stockPurchase/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '进货入库单',
        meta: {
          icon: 'ios-paper',
          title: '进货入库单'
        },
        component: () => import('@/view/stockPurchase/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '进货退货单',
        meta: {
          icon: 'md-paper',
          title: '进货退货单'
        },
        component: () => import('@/view/stockPurchase/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '进货换货单',
        meta: {
          icon: 'md-list-box',
          title: '进货换货单'
        },
        component: () => import('@/view/stockPurchase/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '付款单',
        meta: {
          icon: 'md-document',
          title: '付款单'
        },
        component: () => import('@/view/stockPurchase/statusTable.vue')
      },
      {
        path: 'level_2_2',
        name: '受托代销',
        meta: {
          access: ['super_admin'],
          icon: 'md-git-commit',
          showAlways: true,
          title: '受托代销'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '受托收货单',
            meta: {
              icon: 'ios-copy-outline',
              title: '受托收货单'
            },
            component: () => import('@/view/stockPurchase/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '受托退货单',
            meta: {
              icon: 'md-copy',
              title: '受托退货单'
            },
            component: () => import('@/view/stockPurchase/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '受托结算单',
            meta: {
              icon: 'ios-create-outline',
              title: '受托结算单'
            },
            component: () => import('@/view/stockPurchase/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '受托库存查询',
            meta: {
              icon: 'ios-leaf',
              title: '受托库存查询'
            },
            component: () => import('@/view/stockPurchase/level-2-2/level-2-2-2.vue')
          }
        ]
      }

    ]
  },

  {
    path: '/sellWholesale',
    name: '批零',
    meta: {
      icon: 'md-compass',
      title: '批零'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '新增销售订单',
        meta: {
          icon: 'md-document',
          title: '新增销售订单'
        },
        component: () => import('@/view/sellWholesale/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '销售订单管理',
        meta: {
          icon: 'ios-document',
          title: '销售订单管理'
        },
        component: () => import('@/view/sellWholesale/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '报价管理',
        meta: {
          icon: 'ios-medical',
          title: '报价管理'
        },
        component: () => import('@/view/sellWholesale/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '销售出库单',
        meta: {
          icon: 'md-redo',
          title: '销售出库单'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '销售退货单',
        meta: {
          icon: 'md-refresh',
          title: '销售退货单'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '销售换货单',
        meta: {
          icon: 'md-repeat',
          title: '销售换货单'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '收款单',
        meta: {
          icon: 'ios-photos',
          title: '收款单'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '零售开单',
        meta: {
          icon: 'md-list-box',
          title: '零售开单'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '零售退货',
        meta: {
          icon: 'ios-list-box-outline',
          title: '零售退货'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '促销管理',
        meta: {
          icon: 'md-infinite',
          title: '促销管理'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '物价管理',
        meta: {
          icon: 'logo-codepen',
          title: '物价管理'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '价格折扣跟踪',
        meta: {
          icon: 'md-code-working',
          title: '价格折扣跟踪'
        },
        component: () => import('@/view/sellWholesale/statusTable.vue')
      },
      {
        path: 'level_2_2',
        name: '委托代销',
        meta: {
          access: ['super_admin'],
          icon: 'md-git-commit',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '委托发货单',
            meta: {
              icon: 'ios-copy-outline',
              title: '委托发货单'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '委托退货单',
            meta: {
              icon: 'md-copy',
              title: '委托退货单'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '委托结算单',
            meta: {
              icon: 'ios-create-outline',
              title: '委托结算单'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '委托调价单',
            meta: {
              icon: 'md-funnel',
              title: '委托调价单'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '委托库存查询',
            meta: {
              icon: 'ios-leaf',
              title: '委托库存查询'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '销售计划管理',
        meta: {
          access: ['super_admin'],
          icon: 'ios-pint',
          showAlways: true,
          title: '销售计划管理'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '销售时刻划分',
            meta: {
              icon: 'ios-radio',
              title: '销售时刻划分'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '商品销售计划',
            meta: {
              icon: 'md-send',
              title: '商品销售计划'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '客户销售计划',
            meta: {
              icon: 'md-contacts',
              title: '客户销售计划'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员销售计划',
            meta: {
              icon: 'ios-contact',
              title: '职员销售计划'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '部门销售计划',
            meta: {
              icon: 'ios-people-outline',
              title: '部门销售计划'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '地区销售计划',
            meta: {
              icon: 'ios-people',
              title: '地区销售计划'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '销售费用',
        meta: {
          access: ['super_admin'],
          icon: 'md-ribbon',
          showAlways: true,
          title: '销售费用'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '销售费用单',
            meta: {
              icon: 'logo-steam',
              title: '销售费用单'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '销售费用分摊管理',
            meta: {
              icon: 'ios-medical',
              title: '销售费用分摊管理'
            },
            component: () => import('@/view/sellWholesale/level-2-2/level-2-2-2.vue')
          }
        ]
      }

    ]
  },

  {
    path: '/stock',
    name: '库存',
    meta: {
      icon: 'md-water',
      title: '库存'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '库存状况表',
        meta: {
          icon: 'md-disc',
          title: '库存状况表'
        },
        component: () => import('@/view/stock/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '库存分布表',
        meta: {
          icon: 'ios-pie',
          title: '库存分布表'
        },
        component: () => import('@/view/stock/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '汇总备货',
        meta: {
          icon: 'ios-map',
          title: '汇总备货'
        },
        component: () => import('@/view/stock/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '报损单',
        meta: {
          icon: 'ios-paper-outline',
          title: '报损单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '报溢单',
        meta: {
          icon: 'md-paper',
          title: '报溢单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '调拨单',
        meta: {
          icon: 'md-list-box',
          title: '调拨单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '调价单',
        meta: {
          icon: 'md-funnel',
          title: '调价单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'level_2_2',
        name: '生产',
        meta: {
          access: ['super_admin'],
          icon: 'md-analytics',
          showAlways: true,
          title: '生产'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '生产模板',
            meta: {
              icon: 'logo-buffer',
              title: '生产模板'
            },
            component: () => import('@/view/stock/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '组装拆卸单',
            meta: {
              icon: 'ios-calendar',
              title: '组装拆卸单'
            },
            component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2',
            name: '委外加工',
            meta: {
              access: ['super_admin'],
              icon: 'md-git-compare',
              showAlways: true,
              title: '委外加工'
            },
            component: parentView,
            children: [
              {
                path: 'level_2_2_1',
                name: '委外加工领料单',
                meta: {
                  icon: 'md-git-merge',
                  title: '委外加工领料单'
                },
                component: () => import('@/view/stock/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_2_2',
                name: '委外加工退料单',
                meta: {
                  icon: 'md-git-network',
                  title: '委外加工退料单'
                },
                component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
              },
              {
                path: 'level_2_2_2',
                name: '委外加工入库单',
                meta: {
                  icon: 'md-git-pull-request',
                  title: '委外加工入库单'
                },
                component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
              },
              {
                path: 'level_2_2_2',
                name: '委外加工库存查询',
                meta: {
                  icon: 'ios-glasses',
                  title: '委外加工库存查询'
                },
                component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
              },
              {
                path: 'level_2_2_2',
                name: '委外加工商品查询',
                meta: {
                  icon: 'md-glasses',
                  title: '委外加工商品查询'
                },
                component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
              },
              {
                path: 'level_2_2_2',
                name: '委外完工商品查询',
                meta: {
                  icon: 'md-fit-commit',
                  title: '委外完工商品查询'
                },
                component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'statusTable',
        name: '其它入库单',
        meta: {
          icon: 'ios-map-outline',
          title: '其它入库单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '其它出库单',
        meta: {
          icon: 'md-map',
          title: '其它出库单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '内部领用单',
        meta: {
          icon: 'logo-linkedin',
          title: '内部领用单'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '库存盘点',
        meta: {
          icon: 'ios-navigate',
          title: '库存盘点'
        },
        component: () => import('@/view/stock/statusTable.vue')
      },

      {
        path: 'level_2_2',
        name: '库存报警',
        meta: {
          access: ['super_admin'],
          icon: 'ios-warning',
          showAlways: true,
          title: '库存报警'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '启动报警簿',
            meta: {
              icon: 'logo-whatsapp',
              title: '启动报警簿'
            },
            component: () => import('@/view/stock/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '库存报警设置',
            meta: {
              icon: 'md-wifi',
              title: '库存报警设置'
            },
            component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_1',
            name: '库存上限报警表',
            meta: {
              icon: 'ios-cloud-upload',
              title: '库存上限报警表'
            },
            component: () => import('@/view/stock/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '库存下限报警表',
            meta: {
              icon: 'ios-cloud-download',
              title: '库存下限报警表'
            },
            component: () => import('@/view/stock/level-2-2/level-2-2-2.vue')
          }
        ]
      },

      {
        path: 'statusTable',
        name: '智能补货',
        meta: {
          icon: 'md-aperture',
          title: '智能补货'
        },
        component: () => import('@/view/stock/statusTable.vue')
      }

    ]
  },

  {
    path: '/finance',
    name: '财务',
    meta: {
      icon: 'logo-yen',
      title: '财务'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '往来单位应收应付',
        meta: {
          icon: 'md-swap',
          title: '往来单位应收应付'
        },
        component: () => import('@/view/finance/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '收款单',
        meta: {
          icon: 'ios-paper',
          title: '收款单'
        },
        component: () => import('@/view/finance/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '付款单',
        meta: {
          icon: 'ios-paper-outline',
          title: '付款单'
        },
        component: () => import('@/view/finance/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '费用单',
        meta: {
          icon: 'md-list-box',
          title: '费用单'
        },
        component: () => import('@/view/finance/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '预收款单',
        meta: {
          icon: 'ios-copy',
          title: '预收款单'
        },
        component: () => import('@/view/finance/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '预付款单',
        meta: {
          icon: 'md-copy',
          title: '预付款单'
        },
        component: () => import('@/view/finance/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '其它收入单',
        meta: {
          icon: 'md-bookmarks',
          title: '其它收入单'
        },
        component: () => import('@/view/finance/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '提现|存现|转账',
        meta: {
          icon: 'logo-euro',
          title: '提现.存现.转账'
        },
        component: () => import('@/view/finance/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '会计凭证',
        meta: {
          icon: 'logo-hackernews',
          title: '会计凭证'
        },
        component: () => import('@/view/finance/statusTable.vue')
      },

      {
        path: 'level_2_2',
        name: '发票管理',
        meta: {
          access: ['super_admin'],
          icon: 'md-map',
          showAlways: true,
          title: '发票管理'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '开票设置',
            meta: {
              icon: 'ios-medical',
              title: '开票设置'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '销项开票',
            meta: {
              icon: 'ios-nutrition',
              title: '销项开票'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '开票结果查询',
            meta: {
              icon: 'ios-paper',
              title: '开票结果查询'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '进货开票',
            meta: {
              icon: 'ios-paper-outline',
              title: '进货开票'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '销售开票',
            meta: {
              icon: 'md-thunderstorm',
              title: '销售开票'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '进货开票管理',
            meta: {
              icon: 'md-settings',
              title: '进货开票管理'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '销售开票管理',
            meta: {
              icon: 'ios-settings-outline',
              title: '销售开票管理'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '商品开票管理',
            meta: {
              icon: 'md-radio',
              title: '商品开票管理'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '单据开票查询',
            meta: {
              icon: 'ios-radio',
              title: '单据开票查询'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '调账',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '调账'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '资金增加',
            meta: {
              icon: 'md-arrow-dropup',
              title: '资金增加'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '资金减少',
            meta: {
              icon: 'md-arrow-dropdown',
              title: '资金减少'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '应收款增加',
            meta: {
              icon: 'md-arrow-dropup-circle',
              title: '应收款增加'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '应收款减少',
            meta: {
              icon: 'md-arrow-dropdown-circle',
              title: '应收款减少'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '应付款增加',
            meta: {
              icon: 'ios-arrow-dropup',
              title: '应付款增加'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '应付款减少',
            meta: {
              icon: 'ios-arrow-dropdown',
              title: '应付款减少'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '固定资产',
        meta: {
          access: ['super_admin'],
          icon: 'md-square',
          showAlways: true,
          title: '固定资产'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '固定资产设置',
            meta: {
              icon: 'ios-star',
              title: '固定资产设置'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '固定资产购置',
            meta: {
              icon: 'ios-star-outline',
              title: '固定资产购置'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '固定资产变卖',
            meta: {
              icon: 'md-star',
              title: 'md-star-half'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '固定资产折旧',
            meta: {
              icon: 'md-star-outline',
              title: '固定资产折旧'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '待摊费用',
        meta: {
          access: ['super_admin'],
          icon: 'logo-usd',
          showAlways: true,
          title: '待摊费用'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '待摊费用发生',
            meta: {
              icon: 'ios-umbrella',
              title: '待摊费用发生'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '待摊费用摊销',
            meta: {
              icon: 'ios-umbrella-outline',
              title: '待摊费用摊销'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },

      {
        path: 'level_2_2',
        name: '期末管理',
        meta: {
          access: ['super_admin'],
          icon: 'md-unlock',
          showAlways: true,
          title: '期末管理'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '月结存',
            meta: {
              icon: 'ios-water-outline',
              title: '月结存'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '年结存信息表',
            meta: {
              icon: 'ios-water',
              title: '年结存信息表'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },

      {
        path: 'level_2_2',
        name: '提成管理',
        meta: {
          access: ['super_admin'],
          icon: 'md-trending-up',
          showAlways: true,
          title: '提成管理'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '提成方案管理',
            meta: {
              icon: 'md-timer',
              title: '提成方案管理'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员销售提成',
            meta: {
              icon: 'ios-timer-outline',
              title: '职员销售提成'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },

      {
        path: 'level_2_2',
        name: '返利管理',
        meta: {
          access: ['super_admin'],
          icon: 'ios-thunderstorm',
          showAlways: true,
          title: '返利管理'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '返利方案管理',
            meta: {
              icon: 'ios-tennisball',
              title: '返利方案管理'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '返利执行管理',
            meta: {
              icon: 'ios-tennisball-outline',
              title: '返利执行管理'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '往来单位返利统计',
            meta: {
              icon: 'md-tennisball',
              title: '往来单位返利统计'
            },
            component: () => import('@/view/finance/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'statusTable',
        name: '在线支付管理',
        meta: {
          icon: 'logo-yahoo',
          title: '在线支付管理'
        },
        component: () => import('@/view/finance/statusTable.vue')
      }
    ]
  },

  {
    path: '/reportForms',
    name: '报表',
    meta: {
      icon: 'ios-list-box',
      title: '报表'
    },
    component: Main,
    children: [
      {
        path: 'level_2_2',
        name: '进货报表',
        meta: {
          access: ['super_admin'],
          icon: 'md-list',
          showAlways: true,
          title: '进货报表'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '进货订单统计',
            meta: {
              icon: 'ios-podium',
              title: '进货订单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '商品进货|退款统计',
            meta: {
              icon: 'ios-podium-outline',
              title: '商品进货|退款统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '进货明细表',
            meta: {
              icon: 'md-reorder',
              title: '进货明细表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '销售报表',
        meta: {
          access: ['super_admin'],
          icon: 'md-pulse',
          showAlways: true,
          title: '销售报表'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '销售订单统计',
            meta: {
              icon: 'md-podium',
              title: '销售订单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '商品销售统计',
            meta: {
              icon: 'ios-podium',
              title: '商品销售统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '商品销售/退货分析',
            meta: {
              icon: 'ios-podium-outline',
              title: '商品销售/退货分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '套餐销售统计',
            meta: {
              icon: 'ios-glasses',
              title: '套餐销售统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '套餐毛利统计',
            meta: {
              icon: 'ios-glasses-outline',
              title: '套餐毛利统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '零售报表',
        meta: {
          access: ['super_admin'],
          icon: 'md-list-box',
          showAlways: true,
          title: '零售报表'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '零售金额统计',
            meta: {
              icon: 'md-podium',
              title: '零售金额统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '零售商品统计',
            meta: {
              icon: 'ios-podium',
              title: '零售商品统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '门店零售统计',
            meta: {
              icon: 'ios-podium-outline',
              title: '门店零售统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '收银台销售流水',
            meta: {
              icon: 'md-paper',
              title: '收银台销售流水'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '会员积分变动记录',
            meta: {
              icon: 'ios-ribbon',
              title: '会员积分变动记录'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '会员储值变动记录',
            meta: {
              icon: 'ios-ribbon-outline',
              title: '会员储值变动记录'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '会员卡消费分析',
            meta: {
              icon: 'md-ribbon',
              title: '会员卡消费分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '会员商品分析',
            meta: {
              icon: 'ios-stopwatch',
              title: '会员商品分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '会员商品消费统计',
            meta: {
              icon: 'md-stats',
              title: '会员商品消费统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '会员次卡变动记录',
            meta: {
              icon: 'ios-stats',
              title: '会员次卡变动记录'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '进货波动分析',
        meta: {
          access: ['super_admin'],
          icon: 'ios-pulse',
          showAlways: true,
          title: '进货波动分析'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '商品进货波动分析',
            meta: {
              icon: 'md-git-branch',
              title: '商品进货波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '单位进货波动分析',
            meta: {
              icon: 'md-git-compare',
              title: '单位进货波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员进货波动分析',
            meta: {
              icon: 'md-git-commit',
              title: '职员进货波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '仓库进货波动分析',
            meta: {
              icon: 'md-git-network',
              title: '仓库进货波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '部门进货波动分析',
            meta: {
              icon: 'md-git-pull-request',
              title: '部门进货波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '销售波动分析',
        meta: {
          access: ['super_admin'],
          icon: 'md-pulse',
          showAlways: true,
          title: '销售波动分析'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '商品销售波动分析',
            meta: {
              icon: 'ios-git-branch',
              title: '商品销售波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '单位销售波动分析',
            meta: {
              icon: 'ios-git-compare',
              title: '单位销售波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员销售波动分析',
            meta: {
              icon: 'ios-git-commit',
              title: '职员销售波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '仓库销售波动分析',
            meta: {
              icon: 'ios-git-network',
              title: '仓库销售波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '部门销售波动分析',
            meta: {
              icon: 'ios-git-merge',
              title: '部门销售波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '地区销售波动分析',
            meta: {
              icon: 'ios-git-pull-request',
              title: '地区销售波动分析'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '销售排行榜',
        meta: {
          access: ['super_admin'],
          icon: 'md-trending-up',
          showAlways: true,
          title: '销售排行榜'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '商品销售排行榜',
            meta: {
              icon: 'ios-pricetag',
              title: '商品销售排行榜'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '品牌销售排行榜',
            meta: {
              icon: 'ios-pricetag-outline',
              title: '品牌销售排行榜'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '客户销售排行榜',
            meta: {
              icon: 'md-pricetag',
              title: '客户销售排行榜'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '仓库销售排行榜',
            meta: {
              icon: 'ios-pricetags',
              title: '仓库销售排行榜'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员销售排行榜',
            meta: {
              icon: 'ios-pricetags-outline',
              title: '职员销售排行榜'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '部门销售排行榜',
            meta: {
              icon: 'md-pricetags',
              title: '部门销售排行榜'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '库存报表',
        meta: {
          access: ['super_admin'],
          icon: 'md-pie',
          showAlways: true,
          title: '库存报表'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '全能进销存变动表',
            meta: {
              icon: 'md-remove-circle',
              title: '全能进销存变动表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '进销存日报表',
            meta: {
              icon: 'md-restaurant',
              title: '进销存日报表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '报损单统计',
            meta: {
              icon: 'md-stats',
              title: '报损单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '报溢单统计',
            meta: {
              icon: 'ios-stats',
              title: '报溢单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '调拨单统计',
            meta: {
              icon: 'ios-stats-outline',
              title: '调拨单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '拆装单统计',
            meta: {
              icon: 'md-podium',
              title: '拆装单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '其它入库单统计',
            meta: {
              icon: 'ios-podium',
              title: '其它入库单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '其它出库单统计',
            meta: {
              icon: 'ios-podium-outline',
              title: '其它出库单统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '内部领用统计',
            meta: {
              icon: 'ios-contrast',
              title: '内部领用统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '调拨在途库存表',
            meta: {
              icon: 'md-document',
              title: '调拨在途库存表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '库存周转率',
            meta: {
              icon: 'md-pie',
              title: '库存周转率'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '库存积压统计',
            meta: {
              icon: 'md-contrast',
              title: '库存积压统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '商品库龄查询',
            meta: {
              icon: 'ios-search',
              title: '商品库龄查询'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '往来单位业务分析',
        meta: {
          access: ['super_admin'],
          icon: 'ios-speedometer',
          showAlways: true,
          title: '往来单位业务分析'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '单位进货统计',
            meta: {
              icon: 'md-podium',
              title: '单位进货统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '单位进货|退货统计',
            meta: {
              icon: 'ios-podium',
              title: '单位进货|退货统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '单位销售|退货统计',
            meta: {
              icon: 'ios-podium-outline',
              title: '单位销售|退货统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '收付款账户明细查询',
            meta: {
              icon: 'ios-paper',
              title: '收付款账户明细查询'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '往来单位回款统计',
            meta: {
              icon: 'md-stats',
              title: '往来单位回款统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '往来单位费用分布',
            meta: {
              icon: 'ios-stats',
              title: '往来单位费用分布'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '往来单位业务统计',
            meta: {
              icon: 'ios-stats-outline',
              title: '往来单位业务统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '部门职员业务分析',
        meta: {
          access: ['super_admin'],
          icon: 'md-git-merge',
          showAlways: true,
          title: '部门职员业务分析'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '部门费用分布',
            meta: {
              icon: 'ios-pie',
              title: '部门费用分布'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '部门业务统计',
            meta: {
              icon: 'md-podium',
              title: '部门业务统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员应收应付',
            meta: {
              icon: 'md-share-alt',
              title: '职员应收应付'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '职员费用分布',
            meta: {
              icon: 'md-pie',
              title: '职员费用分布'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '业务员业务统计',
            meta: {
              icon: 'ios-podium',
              title: '业务员业务统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '制单人收付款统计',
            meta: {
              icon: 'ios-podium-outline',
              title: '制单人收付款统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '人员核算业绩统计',
            meta: {
              icon: 'md-stats',
              title: '人员核算业绩统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_2',
        name: '财务报表',
        meta: {
          access: ['super_admin'],
          icon: 'md-paper',
          showAlways: true,
          title: '财务报表'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '经营报告',
            meta: {
              icon: 'ios-paper',
              title: '经营报告'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '经营日报',
            meta: {
              icon: 'ios-paper-outline',
              title: '经营日报'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '利润表',
            meta: {
              icon: 'md-list-box',
              title: '利润表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '资产负债表',
            meta: {
              icon: 'ios-list-box',
              title: '资产负债表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '待摊费用查询',
            meta: {
              icon: 'md-search',
              title: '待摊费用查询'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '按单结算查询',
            meta: {
              icon: 'ios-search-outline',
              title: '按单结算查询'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '老板表',
            meta: {
              icon: 'md-grid',
              title: '老板表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '资金变动记录',
            meta: {
              icon: 'ios-options',
              title: '资金变动记录'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '超期应付款统计',
            meta: {
              icon: 'md-stats',
              title: '超期应付款统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '超期应收款统计',
            meta: {
              icon: 'ios-stats-outline',
              title: '超期应收款统计'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '往来单位汇总余额表',
            meta: {
              icon: 'md-document',
              title: '往来单位汇总余额表'
            },
            component: () => import('@/view/reportForms/level-2-2/level-2-2-2.vue')
          }
        ]
      }
    ]
  },

  {
    path: '/means',
    name: '资料',
    meta: {
      icon: 'ios-albums',
      title: '资料'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '往来单位',
        meta: {
          icon: 'ios-bowtie-outline',
          title: '往来单位'
        },
        component: () => import('@/view/means/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '地区管理',
        meta: {
          icon: 'ios-bowtie',
          title: '地区管理'
        },
        component: () => import('@/view/means/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '路线设置',
        meta: {
          icon: 'md-git-merge',
          title: '路线设置'
        },
        component: () => import('@/view/means/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '存货仓库',
        meta: {
          icon: 'ios-cube',
          title: '存货仓库'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '仓库货位',
        meta: {
          icon: 'ios-cube-outline',
          title: '仓库货位'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '现金银行',
        meta: {
          icon: 'logo-hackernews',
          title: '现金银行'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '费用支出',
        meta: {
          icon: 'md-trending-up',
          title: '费用支出'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '其它收入',
        meta: {
          icon: 'md-undo',
          title: '其它收入'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '门店管理',
        meta: {
          icon: 'logo-octocat',
          title: '门店管理'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '物流公司',
        meta: {
          icon: 'logo-designernews',
          title: '物流公司'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '会员管理',
        meta: {
          icon: 'md-ribbon',
          title: '会员管理'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '维修登记',
        meta: {
          icon: 'ios-create',
          title: '维修登记'
        },
        component: () => import('@/view/means/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '常用说明',
        meta: {
          icon: 'ios-list-box',
          title: '常用说明'
        },
        component: () => import('@/view/means/statusTable.vue')
      }
    ]
  },

  {
    path: '/system',
    name: '系统',
    meta: {
      icon: 'ios-desktop',
      title: '系统'
    },
    component: Main,
    children: [
      {
        path: 'draftDocument',
        name: '职员及权限设置',
        meta: {
          icon: 'ios-disc',
          title: '职员及权限设置'
        },
        component: () => import('@/view/system/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '系统配置',
        meta: {
          icon: 'md-settings',
          title: '系统配置'
        },
        component: () => import('@/view/system/documentCenter.vue')
      },
      {
        path: 'approvalCenter',
        name: '单据格式配置',
        meta: {
          icon: 'md-nuclear',
          title: '单据格式配置'
        },
        component: () => import('@/view/system/approvalCenter.vue')
      },
      {
        path: 'statusTable',
        name: '单据审核设置',
        meta: {
          icon: 'md-nutrition',
          title: '单据审核设置'
        },
        component: () => import('@/view/system/statusTable.vue')
      },
      {
        path: 'level_2_2',
        name: '导入导出',
        meta: {
          access: ['super_admin'],
          icon: 'md-repeat',
          showAlways: true,
          title: '导入导出'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '业务单据导出',
            meta: {
              icon: 'md-return-left',
              title: '业务单据导出'
            },
            component: () => import('@/view/system/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '业务单据导入',
            meta: {
              icon: 'md-return-right',
              title: '业务单据导入'
            },
            component: () => import('@/view/system/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '财务单据导入',
            meta: {
              icon: 'ios-return-right',
              title: '财务单据导入'
            },
            component: () => import('@/view/system/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '查看导出记录',
            meta: {
              icon: 'md-resize',
              title: '查看导出记录'
            },
            component: () => import('@/view/system/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'statusTable',
        name: '单据打印次数设置',
        meta: {
          icon: 'md-cloud-download',
          title: '单据打印次数设置'
        },
        component: () => import('@/view/system/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '自定义常用菜单',
        meta: {
          icon: 'md-bookmark',
          title: '自定义常用菜单'
        },
        component: () => import('@/view/system/statusTable.vue')
      },
      {
        path: 'statusTable',
        name: '电脑绑定授权',
        meta: {
          icon: 'md-desktop',
          title: '电脑绑定授权'
        },
        component: () => import('@/view/system/statusTable.vue')
      }

    ]
  },

  {
    path: '/valueAddedService',
    name: '增值服务',
    meta: {
      icon: 'logo-xbox',
      title: '增值服务'
    },
    component: Main,
    children: [
      {
        path: 'level_2_2',
        name: '短信功能',
        meta: {
          access: ['super_admin'],
          icon: 'md-chatboxes',
          showAlways: true,
          title: '短信功能'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: '短信账户设置',
            meta: {
              icon: 'md-cash',
              title: '短信账户设置'
            },
            component: () => import('@/view/valueAddedService/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: '短信充值',
            meta: {
              icon: 'ios-checkbox',
              title: '短信充值'
            },
            component: () => import('@/view/valueAddedService/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '短信模板管理',
            meta: {
              icon: 'md-chatbubbles',
              title: '短信模板管理'
            },
            component: () => import('@/view/valueAddedService/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '短信签名设置',
            meta: {
              icon: 'ios-chatbubbles',
              title: '短信签名设置'
            },
            component: () => import('@/view/valueAddedService/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '营销短信管理',
            meta: {
              icon: 'ios-cash',
              title: '营销短信管理'
            },
            component: () => import('@/view/valueAddedService/level-2-2/level-2-2-2.vue')
          },
          {
            path: 'level_2_2_2',
            name: '短信发送记录',
            meta: {
              icon: 'ios-chatbubbles-outline',
              title: '短信发送记录'
            },
            component: () => import('@/view/valueAddedService/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'draftDocument',
        name: '招商银行|生意管家',
        meta: {
          icon: 'md-print',
          title: '招商银行|生意管家'
        },
        component: () => import('@/view/valueAddedService/draftDocument.vue')
      },
      {
        path: 'documentCenter',
        name: '管鑫所服务',
        meta: {
          icon: 'logo-vimeo',
          title: '管鑫所服务'
        },
        component: () => import('@/view/valueAddedService/documentCenter.vue')
      }
    ]
  },

  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'tree_select_page',
        name: 'tree_select_page',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '树状下拉选择器'
        },
        component: () => import('@/view/components/tree-select/index.vue')
      },
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          icon: 'md-list',
          title: '可拖拽抽屉'
        },
        component: () => import('@/view/components/drag-drawer')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: '组织结构树'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          icon: 'md-git-branch',
          title: '树状表格'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          icon: 'md-crop',
          title: '图片裁剪'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },

  {
    path: '/update',
    name: 'update',
    meta: {
      icon: 'md-cloud-upload',
      title: '数据上传'
    },
    component: Main,
    children: [
      {
        path: 'update_table_page',
        name: 'update_table_page',
        meta: {
          icon: 'ios-document',
          title: '上传Csv'
        },
        component: () => import('@/view/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '粘贴表格数据'
        },
        component: () => import('@/view/update/update-paste.vue')
      }
    ]
  },

  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },

  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
