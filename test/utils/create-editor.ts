/*
 * @Author: libo
 * @Date: 2024-11-20 11:07:39
 * @LastEditors: libo
 * @LastEditTime: 2024-11-20 11:33:51
 * @FilePath: \wangEditor-plugin-upload-attachment-main\test\utils\create-editor.ts
 * @Description:
 */
/**
 * @description create editor
 * @author wangfupeng
 */

import { createEditor } from '@wangeditor-next/editor'

export default function (options: any = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  return createEditor({
    selector: container,
    ...options,
  })
}
