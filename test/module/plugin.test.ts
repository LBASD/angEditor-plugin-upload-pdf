/**
 * @description plugin test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import withImportPdf from '../../src/module/plugin'
import { PDFElement } from '../../src/index'

describe('attachment plugin', () => {
  const editor = withImportPdf(createEditor())
  const elem: PDFElement = {
    type: 'importPdf',
    src: 'x',
    shortcode: 'y',
    children: [{ text: '' }],
  }

  it('isInline', () => {
    expect(editor.isInline(elem)).toBe(false)
  })

  it('isVoid', () => {
    expect(editor.isVoid(elem)).toBe(true)
  })
})
