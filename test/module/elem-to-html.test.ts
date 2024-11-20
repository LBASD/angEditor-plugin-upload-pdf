/**
 * @description elem to html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { PDFElement } from '../../src/index'

describe('pdf elem-to-html', () => {
  const src = 'xxx.zip'
  const shortcode = '3ssdds'
  const pdfElem: PDFElement = {
    type: 'importPdf',
    src,
    shortcode,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('importPdf')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(pdfElem, '')
    expect(html).toBe(
      `<iframe src="${src}" shortcode="${shortcode}" style="border:1px solid #DDDDDD;width:100%;height:500px"></iframe>`
    )
  })
})
