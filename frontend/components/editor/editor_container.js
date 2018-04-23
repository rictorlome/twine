import { connect } from 'react-redux';
import { Editor } from './editor.jsx';
import { BackupEditor } from './backup_editor.jsx';

import { getCharString, getStringVal } from '../../selectors/doc_selectors';

const msp = (state) => {
  return {
    chars: getCharString(state),
    stringVal: getStringVal(state)
  }
}

// export default connect(msp,null)(Editor)
export default connect(msp,null)(BackupEditor)
