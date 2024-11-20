/**
 * @description parse elem html
 * @author wangfupeng
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor-next/editor'
import { PDFElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const src = elem.getAttribute('src') || ''
  const shortcode = elem.getAttribute('shortcode') || ''
  return {
    type: 'importPdf',
    src,
    shortcode,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as PDFElement
}

const parseHtmlConf = {
  selector: 'iframe[data-w-e-type="importPdf"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
