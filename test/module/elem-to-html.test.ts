/**
 * @description elem to html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { PDFElement } from '../../src/index'

describe('attachment elem-to-html', () => {
  const src = 'xxx.zip'
  const shortcode = '3ssdds'
  const attachmentElem: PDFElement = {
    type: 'importPdf',
    src,
    shortcode,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('attachment')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(attachmentElem, '')
    expect(html).toBe(
      `<iframe src="${src}" shortcode="${shortcode}" style="border:1px solid #DDDDDD;width:100%;height:500px"></iframe>`
    )
  })
})
