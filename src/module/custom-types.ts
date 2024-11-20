/**
 * @description attachment element
 * @author wangfupeng
 */

type EmptyText = {
  text: ''
}

export type PDFElement = {
  type: 'importPdf'
  src: string
  shortcode: string
  children: EmptyText[]
}
