import * as ApiUtil from '../util/api_util';
import * as DocUtil from '../util/doc_util';

export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT'

export const receiveDocument = (doc) => {
  return {
    type: RECEIVE_DOCUMENT,
    doc
  }
}

export const pullDocument = (path) => (dispatch) => {
  return DocUtil.pullDoc(path).then(
    (doc) => dispatch(receiveDocument(doc))
  )
}

export const createDocument = () => (dispatch) => {
  return ApiUtil.createDocument().then(
    (doc) => dispatch(receiveDocument(doc))
  )
}
