"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ZcBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcBtn;
  }
});
Object.defineProperty(exports, "ZcDelBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcDelBtn;
  }
});
Object.defineProperty(exports, "ZcTimeBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcTimeBtn;
  }
});
Object.defineProperty(exports, "ZcEditBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcEditBtn;
  }
});
Object.defineProperty(exports, "ZcMoveBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcMoveBtn;
  }
});
Object.defineProperty(exports, "ZcOpenBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcOpenBtn;
  }
});
Object.defineProperty(exports, "ZcAddBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcAddBtn;
  }
});
Object.defineProperty(exports, "ZcStopBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcStopBtn;
  }
});
Object.defineProperty(exports, "ZcCancleBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcCancleBtn;
  }
});
Object.defineProperty(exports, "ZcTextBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcTextBtn;
  }
});
Object.defineProperty(exports, "ZcDownloadBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcDownloadBtn;
  }
});
Object.defineProperty(exports, "ZcUploadBtn", {
  enumerable: true,
  get: function get() {
    return _ZcButton.ZcUploadBtn;
  }
});
Object.defineProperty(exports, "ZcInput", {
  enumerable: true,
  get: function get() {
    return _ZcInput.default;
  }
});
Object.defineProperty(exports, "ZcCheckbox", {
  enumerable: true,
  get: function get() {
    return _ZcCheckbox.default;
  }
});
Object.defineProperty(exports, "ZcRadio", {
  enumerable: true,
  get: function get() {
    return _ZcRadio.default;
  }
});
Object.defineProperty(exports, "ZcSwitch", {
  enumerable: true,
  get: function get() {
    return _ZcSwitch.default;
  }
});
Object.defineProperty(exports, "ZcDrawer", {
  enumerable: true,
  get: function get() {
    return _ZcDrawer.default;
  }
});
Object.defineProperty(exports, "ZcModal", {
  enumerable: true,
  get: function get() {
    return _ZcModal.default;
  }
});
Object.defineProperty(exports, "ZcTabs", {
  enumerable: true,
  get: function get() {
    return _ZcTabs.default;
  }
});
Object.defineProperty(exports, "ZcTable", {
  enumerable: true,
  get: function get() {
    return _ZcTable.default;
  }
});
Object.defineProperty(exports, "ZcSelect", {
  enumerable: true,
  get: function get() {
    return _ZcSelect.default;
  }
});
Object.defineProperty(exports, "ZcDateTime", {
  enumerable: true,
  get: function get() {
    return _ZcDateTime.default;
  }
});
Object.defineProperty(exports, "ZcMenu", {
  enumerable: true,
  get: function get() {
    return _ZcMenu.default;
  }
});

require("./global.less");

var _ZcButton = require("./ZcButton");

var _ZcInput = _interopRequireDefault(require("./ZcInput"));

var _ZcCheckbox = _interopRequireWildcard(require("./ZcCheckbox"));

var _ZcRadio = _interopRequireDefault(require("./ZcRadio"));

var _ZcSwitch = _interopRequireDefault(require("./ZcSwitch"));

var _ZcDrawer = _interopRequireDefault(require("./ZcDrawer"));

var _ZcModal = _interopRequireWildcard(require("./ZcModal"));

var _ZcTabs = _interopRequireDefault(require("./ZcTabs"));

var _ZcTable = _interopRequireDefault(require("./ZcTable"));

var _ZcSelect = _interopRequireDefault(require("./ZcSelect"));

var _ZcDateTime = _interopRequireDefault(require("./ZcDateTime"));

var _ZcMenu = _interopRequireDefault(require("./ZcMenu"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//zcinput
//zccheckbox
_ZcCheckbox.default.FieldsCheckbox = _ZcCheckbox.FieldsCheckbox; //zcradio

_ZcModal.default.success = _ZcModal.ZcSuccess;
_ZcModal.default.warning = _ZcModal.ZcWarning;
_ZcModal.default.error = _ZcModal.ZcError;
_ZcModal.default.alert = _ZcModal.ZcAlert; //ZcTabs