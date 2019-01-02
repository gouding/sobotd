import ZcButton from '../components/button'
import ZcInput from '../components/input'
import ZcCheckbox from '../components/checkbox'
import ZcRadio from '../components/radio'
import ZcSwitch from '../components/switch'
import ZcDrawer from '../components/drawer'
import ZcModal from '../components/modal'
import ZcAlert from '../components/alert'
export default [
  {
    name: 'Button 按钮',
    id: '001',
    path: '/button',
    active: false,
    component: ZcButton,
  },
  { name: 'Input 输入框', id: '002', path: '/input', active: false, component: ZcInput },
  { name: 'CheckBox 复选框', id: '003', path: '/checkbox', active: false, component: ZcCheckbox },
  { name: 'Radio 单选框', id: '004', path: '/radio', active: false, component: ZcRadio },
  { name: 'switch 开关', id: '005', path: '/switch', active: false, component: ZcSwitch },
  { name: '滑动 弹层', id: '006', path: '/drawer', active: false, component: ZcDrawer },
  { name: 'Modal 弹层', id: '007', path: '/modal', active: false, component: ZcModal },
  { name: 'Alert 弹层', id: '008', path: '/alert', active: false, component: ZcAlert },
]