/*
 * @Author: libo
 * @Date: 2024-11-19 20:41:53
 * @LastEditors: libo
 * @LastEditTime: 2024-11-20 14:22:29
 * @FilePath: \wangEditor-plugin-upload-pdf-main\src\module\render-elem.ts
 * @Description:
 */

import { h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor-next/editor'
import { PDFElement } from './custom-types'

function renderImportPdf(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // 构建 vnode
  const { src = '', shortcode = '' } = elem as PDFElement
  const vnode = h('iframe', {
    props: {
      contentEditable: false, // 不可编辑
      src,
      shortcode,
    },
    style: {
      display: 'block', // inline
      border: '1px solid #DDDDDD',
      height: '500px',
      width: '100%',
    },
    on: {},
  })
  return vnode
}

const conf = {
  type: 'importPdf', // 节点 type ，重要！！！
  renderElem: renderImportPdf,
}

export default conf
