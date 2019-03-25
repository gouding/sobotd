import React from 'react'
import { Table, LocaleProvider, Pagination, } from 'antd'
import styles from './index.less'
import zhCN from 'antd/lib/locale-provider/zh_CN';

export default (props) => {
  const { columns,
    data,
    uuId,
    checkHandler,
    jumpToHandler,
    rowSelectHandler,
    multiFlag = false,
    size = 'middle',
    total,
    pageSize = 15,
    hideOnSinglePage,
    paginationFlag = true,
    type = 'checkbox',
    scrollFlag=true,
  } = props;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const data = selectedRows;
      checkHandler && checkHandler({ uuId, data });
    },
    type,
  };
  const onPageChange = (page) => {
    jumpToHandler && jumpToHandler({ uuId, data: page });
  }
  const onRow = (e) => ({
    onClick: () => {
      rowSelectHandler && rowSelectHandler({ uuId, data: e })
    }
  })
  const params = {
    columns: columns,
    dataSource: data,
    size,
    pagination: false,
    onRow
    // scroll: { x: 1500, y: 300 }
  };
  if (multiFlag) params.rowSelection = rowSelection;
  return (
    <div>
      <LocaleProvider locale={zhCN}>
        <div className={scrollFlag?'zc-scroll-bar':''}>
          <Table {...params} className={'table'} />
          {
            paginationFlag ? <div className={'pagination'}>
              <Pagination
                showQuickJumper
                hideOnSinglePage={hideOnSinglePage}
                defaultCurrent={1}
                defaultPageSize={pageSize}
                total={total}
                onChange={onPageChange}
              />
            </div> : ''
          }
        </div>
      </LocaleProvider>
    </div>
  )
}