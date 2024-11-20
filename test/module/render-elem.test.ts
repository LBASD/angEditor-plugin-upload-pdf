/**
 * @description render-elem test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import renderElemConf from '../../src/module/render-elem'
import { PDFElement } from '../../src/index'

describe('attachment render-elem', () => {
  const editor = createEditor()

  const fileName = 'xxx.zip'
  const attachmentElem: PDFElement = {
    type: 'importPdf',
    src: 'y',
    shortcode: 'x',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(renderElemConf.type).toBe('importPdf')
  })

  it('render elem', () => {
    const vnode = renderElemConf.renderElem(attachmentElem, null, editor) as any
    expect(vnode.sel).toBe('iframe')
    expect(vnode.data.props.contentEditable).toBe(false)

    // const children = vnode.children || []
    // expect(children[0].sel).toBe('img')
    // expect(children[1].text).toBe(fileName)
  })
})
