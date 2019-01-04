import React, { PureComponent } from 'react'
import { ZcTable } from '../../../../src';
import styles from './index.less'
import ReactMarkdown from 'react-markdown'
export default class ZTable extends PureComponent {
  state = {
    data: [],
    total: 100,
    pageSize: 15,
    page: 1,
  }
  // const data = [
  //   {
  //     key: '1',
  //     name: '小丁哥',
  //     gender: 1,
  //     height: 175,
  //   }, {
  //     key: '2',
  //     name: '小板凳',
  //     gender: 0,
  //     height: 165,
  //   }
  // ];
  componentDidMount() {
    const { data, total, } = this.state;
    for (let i = 0; i < total; i++) {
      data.push({
        key: i,
        name: `小丁哥${i}`,
        gender: i % 2 === 0 ? 1 : 0,
        height: 150 + Math.floor(Math.random() * 50),
        col1: `col${i}`,
        col2: `col${i}`,
        col3: `col${i}`,
        col4: `col${i}`,
        col5: `col${i}`,
      })
    }
    this.setState({
      ...data,
    })
  }
  onCheckHandler = ({ uuId, data }) => {
    console.log(uuId, data);
  }
  jumpTo = ({ uuId, data }) => {
    console.log(uuId, data)
    this.setState({
      page: data,
    })
  }
  onRowSelectHandler = ({ uuId, data }) => {
    console.log(uuId, data);
  }
  onDetail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('你点击了详情按钮')
  }
  onEdit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('你点击了编辑按钮')
  }
  render() {
    const { data, page, pageSize, total, } = this.state;
    const currentData = data.slice((page - 1) * pageSize, page * pageSize);
    const columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        rowKey: render => render.dataIndex,
        width: '150px',
        fixed: 'left',
      }, {
        title: '性别',
        dataIndex: 'gender',
        rowKey: render => render.dataIndex,
        render: text => text == 1 ? '男' : '女',
        width: '150px',
      }, {
        title: '身高',
        dataIndex: 'height',
        align: 'right',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.height - b.height,
        rowKey: render => render.dataIndex,
        width: '150px',
      }, {
        title: 'col1',
        dataIndex: 'col1',
        width: '150px',
      }, {
        title: 'col2',
        dataIndex: 'col2',
        width: '150px',
      }, {
        title: 'col3',
        dataIndex: 'col3',
        width: '150px',
      }, {
        title: 'col4',
        dataIndex: 'col4',
        width: '150px',
      }, {
        title: 'col5',
        dataIndex: 'col5',
        width: '150px',
      }, {
        title: '操作',
        dataIndex: 'operate',
        rowKey: render => render.dataIndex,
        render: (text, record) => (
          <div>
            <a href="javascript:void(0);" onClick={this.onDetail}>详情</a>
            <a href="javascript:void(0);" onClick={this.onEdit}>编辑</a>
          </div>
        ),
        width: '150px',
      },
    ];
    const md = `
      //注：有回调输出时可查看console控制台
    #### import { ZcTable } from 'sobotd'
      state = {
        data: [],
        total: 100,
        pageSize: 15,
        page: 1,
      }
      //表格列描述
      const columns = [
        {
          title: '用户名',
          dataIndex: 'name',
          rowKey: render => render.dataIndex, //必须设置key 
          width: '150px', //该列的宽度
          fixed: 'left',  //锁定该列在左侧滑动时不受影响
        }, {
          title: '性别',
          dataIndex: 'gender',
          rowKey: render => render.dataIndex,
          render: text => text == 1 ? '男' : '女',
          width: '150px',
        }, {
          title: '身高',
          dataIndex: 'height',
          align: 'right',
          defaultSortOrder: 'descend',  //该列排序时的默认排序方式    descend:降序  ascend:升序
          sorter: (a, b) => a.height - b.height,
          rowKey: render => render.dataIndex,
          width: '150px',
        },{
          title: '操作',
          dataIndex: 'operate',
          rowKey: render => render.dataIndex,
          render: (text, record) => (
            <div>
              <a href="javascript:void(0);" onClick={this.onDetail}>详情</a>
              <a href="javascript:void(0);" onClick={this.onEdit}>编辑</a>
            </div>
          ),
          width: '150px',
        },
      ]
      //表格数据
      const data = [
        {
          key: '1',
          name: '小丁哥',
          gender: 1,
          height: 175,
        }, {
          key: '2',
          name: '小板凳',
          gender: 0,
          height: 165,
        }
      ];
      //点击详情按钮
      onDetail = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('你点击了详情按钮')
      }
      //点击编辑按钮
      onEdit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('你点击了编辑按钮')
      }
      
      //该方法是当table为可多选时 点击checkbox时的回调
      onCheckHandler = ({ uuId, data }) => {
        console.log(uuId, data);
      }
      //该方法是当点击分页时的回调
      jumpTo = ({ uuId, data }) => {
        console.log(uuId, data)
        this.setState({
          page: data,
        })
      }
      //该方法是点击table的行时的回调
      onRowSelectHandler = ({ uuId, data }) => {
        console.log(uuId, data);
      }

      <ZcTable
        columns={columns} //表格列的配置描述 列名
        data={data}  //表格数据数组
        uuId='table'  //表格id
        checkHandler={this.onCheckHandler}  //当multiFlag为true时，点击checkbox时的回调
        jumpToHandler={this.jumpTo} //点击分页按键时的回调
        rowSelectHandler={this.onRowSelectHandler}  //点击表格的行时的回调
        multiFlag={true}  //表格是否支持可多选
        size="middle" //表格的大小  middle 或 small
        total={total} //总数据条数
        pageSize={pageSize} //每页显示的条数
      />
    `
    return (
      <div>
        <div className={styles.preview}>
          <ZcTable
            columns={columns}
            data={currentData}
            uuId='table'
            checkHandler={this.onCheckHandler}
            jumpToHandler={this.jumpTo}
            rowSelectHandler={this.onRowSelectHandler}
            multiFlag={true}
            size="middle"
            total={total}
            pageSize={pageSize}
          />
        </div>
        <div className={styles.codeBox}>
          <ReactMarkdown source={md} />
        </div>
      </div>
    )
  }

}