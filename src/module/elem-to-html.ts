/**
 * @description elem to html
 * @author wangfupeng
 */

import { SlateElement } from '@wangeditor-next/editor'
import { PDFElement } from './custom-types'

// 生成 html 的函数
function attachmentToHtml(elem: SlateElement, childrenHtml: string): string {
  const { src = '', shortcode = '' } = elem as PDFElement
  return `<iframe src="${src}" shortcode="${shortcode}" style="border:1px solid #DDDDDD;width:100%;height:500px"></iframe>`
}

// 配置
const conf = {
  type: 'importPdf', // 节点 type ，重要！！！
  elemToHtml: attachmentToHtml,
}

export default conf
