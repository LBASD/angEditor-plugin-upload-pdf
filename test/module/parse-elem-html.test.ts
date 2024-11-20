/**
 * @description parse elem html test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { PDFElement } from '../../src/index'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('iframe[data-w-e-type="importPdf"]')
  })

  it('parse html', () => {
    const src = 'aaa'
    const shortcode = 'bbb'
    // elem-to-html 产出的 html 格式： <a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline href="${link}" download="${fileName}">${fileName}</a>
    const elem = document.createElement('a')
    elem.setAttribute('data-w-e-type', 'importPdf')
    elem.setAttribute('src', src)
    elem.setAttribute('shortcode', shortcode)

    const attachment = parseHtmlConf.parseElemHtml(elem, [], editor) as PDFElement
    expect(attachment.type).toBe('importPdf')
    expect(attachment.src).toBe('aaa')
    expect(attachment.shortcode).toBe('bbb')
  })
})
