import ZcButton from '../components/button'
import ZcInput from '../components/input'
import ZcCheckbox from '../components/checkbox'
import ZcRadio from '../components/radio'
import ZcSwitch from '../components/switch'
import ZcDrawer from '../components/drawer'
import ZcModal from '../components/modal'
import ZcTabs from '../components/tabs'
import ZcTable from '../components/table'
import ZcSelect from '../components/select'
import ZcDateTime from '../components/datetime'
import ZcMenu from '../components/menu'
export default [
  { name: 'Button 按钮', id: '001', path: '/button', active: false, component: ZcButton, },
  { name: 'Input 输入框', id: '002', path: '/input', active: false, component: ZcInput },
  { name: 'CheckBox 复选框', id: '003', path: '/checkbox', active: false, component: ZcCheckbox },
  { name: 'Radio 单选框', id: '004', path: '/radio', active: false, component: ZcRadio },
  { name: 'select 下拉框', id: '005', path: '/select', active: false, component: ZcSelect },
  { name: 'switch 开关', id: '006', path: '/switch', active: false, component: ZcSwitch },
  { name: '滑动 弹层', id: '007', path: '/drawer', active: false, component: ZcDrawer },
  { name: 'Modal 弹层', id: '008', path: '/modal', active: false, component: ZcModal },
  { name: 'Tabs 标签页', id: '009', path: '/tabs', active: false, component: ZcTabs },
  { name: 'Table 表格', id: '010', path: '/table', active: false, component: ZcTable },
  { name: 'DateTime 日期选择器', id: '011', path: '/datetime', active: false, component: ZcDateTime },
  { name: '菜单', id: '012', path: '/menu', active: false, component: ZcMenu },
]