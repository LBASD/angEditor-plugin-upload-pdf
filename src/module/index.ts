/*
 * @Author: libo
 * @Date: 2024-11-19 20:41:53
 * @LastEditors: libo
 * @LastEditTime: 2024-11-20 10:34:44
 * @FilePath: \vue3-wangeditor-demo-main\src\plungins\plugin-upload-pdf\module\index.ts
 * @Description:
 */
/**
 * @description attachment module entry
 * @author wangfupeng
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor-next/editor'
import withImportPdf from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'
import { uploadPDFMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withImportPdf,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [uploadPDFMenuConf],
}

export default module
