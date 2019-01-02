import { ZcBtn, ZcTextBtn } from '../ZcButton'
import styles from './fields.less';
import React, { PureComponent } from 'react';
import { Checkbox, Spin, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;
export default class FidlesLayer extends PureComponent {
  state = {
    show: false,
    mutex: true,
    loading: false,
    checkedData: [],
    data: [{
      title: 'aaa',
      value: '001',
      disabled: true,
      checked: true,
      default: true,
    }, {
      title: 'bbb',
      value: '002',
      disabled: false,
      checked: true,
      default: true,
    }, {
      title: 'ccc',
      value: '003',
      disabled: false,
      checked: false,
      default: false,
    }, {
      title: 'ddd',
      value: '004',
      disabled: false,
      checked: false,
      default: false,
    }, {
      title: 'eee',
      value: '005',
      disabled: false,
      checked: false,
      default: false,
    }],
  };
  onFields = () => {
    const { show, } = this.state;
    const { data = [{ checkd: true, value: 'item1' }, { checkd: false, value: 'item2' }] } = this.props;
    const checkedData = data.filter(item => item.checked).map(item => item.value);
    this.setState({
      show: !show,
      checkedData,
    })
  }
  onChange = (value) => {
    this.setState({
      checkedData: value,
    })
  }
  onEnsure = () => {
    const { handler, uuId } = this.props;
    const { checkedData, show } = this.state;
    handler && handler({ uuId, type: 'ensuer', data: checkedData });
    this.setState({
      show: !show,
    })
  }
  onCancle = () => {
    const { handler, uuId } = this.props;
    handler && handler({ uuId, type: 'cancle' });
    this.setState({
      show: !this.state.show,
    })
  }
  onDefault = () => {
    const { handler, data, uuId } = this.props;
    setTimeout(() => {
      this.setState({
        mutex: false,
      }),
        setTimeout(() => {
          this.setState({
            mutex: true,
            loading: false,
          })
        })
    }, 500)
    const defaultValue = data.filter(item => item.default).map(item => item.value);
    data.forEach(item => {
      item.checked = item.default;
    });
    this.setState({
      loading: true,
      checkedData: defaultValue,
      ...data,
    })
    // handler && handler({ uuId, type: 'default', data: defaultValue });
  }
  onCheckBox = () => {
    const { data } = this.props;
    return data.map((item, i) => {
      return (
        <Col key={i} span={6} style={{ lineHeight: '30px' }}>
          <Checkbox
            disabled={item.disabled}
            value={item.value}
          >{item.name}</Checkbox>
        </Col>
      )
    })
  }
  render() {
    const { mutex, loading, show,} = this.state;
    const { data } = this.props;
    const defaultValue = data.filter(item => item.checked).map(item => item.value);
    return (
      <div className={styles.wrap}>
        <ZcBtn title={'自定义字段'} handler={this.onFields}></ZcBtn>
        {
          show ? <div className={styles.layer}>
            {
              mutex ?
                <Spin spinning={loading}>
                  <Checkbox.Group style={{ width: '100%' }} defaultValue={defaultValue} onChange={this.onChange}>
                    <Row>
                      {this.onCheckBox()}
                    </Row>
                  </Checkbox.Group>
                </Spin>
                : ''
            }
            <div className={styles.footer}>
              <ZcBtn title={'确定'} type="o" handler={this.onEnsure} />
              <ZcTextBtn title={'取消'} handler={this.onCancle} />
              <span className={styles.defaultBtn} onClick={this.onDefault}>恢复默认</span>
            </div>
          </div> : ''
        }
      </div>
    )
  }
}