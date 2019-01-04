import './global.less'
import {
  ZcBtn,
  ZcDelBtn,
  ZcTimeBtn,
  ZcEditBtn,
  ZcMoveBtn,
  ZcOpenBtn,
  ZcAddBtn,
  ZcStopBtn,
  ZcCancleBtn,
  ZcTextBtn,
  ZcDownloadBtn,
} from './ZcButton';
//zcinput
import ZcInput from './ZcInput'
//zccheckbox
import ZcCheckbox, { FieldsCheckbox } from './ZcCheckbox'
ZcCheckbox.FieldsCheckbox = FieldsCheckbox;
//zcradio
import ZcRadio from './ZcRadio'
//ZcSwitch
import ZcSwitch from './ZcSwitch'
//ZcDrawer 
import ZcDrawer from './ZcDrawer'
//ZcModal 
import ZcModal, { ZcSuccess, ZcWarning, ZcError, ZcAlert } from './ZcModal'
ZcModal.success = ZcSuccess;
ZcModal.warning = ZcWarning;
ZcModal.error = ZcError;
ZcModal.alert = ZcAlert;
//ZcTabs
import ZcTabs from './ZcTabs'
//ZcTable
import ZcTable from './ZcTable'
//ZcSelect 
import ZcSelect from './ZcSelect'
//ZcDateTime
import ZcDateTime from './ZcDateTime'
export {
  ZcBtn,
  ZcDelBtn,
  ZcTimeBtn,
  ZcEditBtn,
  ZcMoveBtn,
  ZcOpenBtn,
  ZcAddBtn,
  ZcStopBtn,
  ZcCancleBtn,
  ZcTextBtn,
  ZcDownloadBtn,
  ZcInput,
  ZcCheckbox,
  ZcRadio,
  ZcSwitch,
  ZcDrawer,
  ZcModal,
  ZcTabs,
  ZcTable,
  ZcSelect,
  ZcDateTime,
}
