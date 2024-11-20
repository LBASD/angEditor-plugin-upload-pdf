/**
 * @description upload attachment menu test
 * @author wangfupeng
 */

import { SlateEditor, IDomEditor } from '@wangeditor-next/editor'
import createEditor from '../../utils/create-editor'
import { PDFElement } from '../../../src/index'
import UploadPDFMenu from '../../../src/module/menu/UploadPDF'
import withImportPdf from '../../../src/module/plugin'

describe('upload pdf menu', () => {
  const editor = withImportPdf(createEditor())
  const menu = new UploadPDFMenu()

  function getStartLocation(editor: IDomEditor) {
    return SlateEditor.start(editor, [])
  }

  function genPdfElem() {
    const pdfElem: PDFElement = {
      type: 'importPdf',
      src: 'aaa',
      shortcode: 'bbb',
      children: [{ text: '' }],
    }
    return pdfElem
  }

  it('getValue', () => {
    expect(menu.getValue(editor)).toBe('')
  })

  it('isActive', () => {
    expect(menu.isActive(editor)).toBe(false)
  })

  // it('isDisabled', () => {
  //   // 选中空编辑器
  //   editor.select(getStartLocation(editor))
  //   expect(menu.isDisabled(editor)).toBeFalsy()

  //   // 选中 attachment 节点
  //   editor.insertNode(genPdfElem())
  //   editor.select({ path: [0, 1, 0], offset: 0 })
  //   expect(menu.isDisabled(editor)).toBeTruthy()
  // })
})
