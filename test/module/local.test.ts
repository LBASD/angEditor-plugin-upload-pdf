/**
 * @description attachment local test
 * @author wangfupeng
 */

import '../../src/module/local'
import { i18nChangeLanguage, t } from '@wangeditor-next/editor'

describe('local', () => {
  it('zh-CN', () => {
    expect(t('pdf.upload')).toBe('上传PDF')
  })
  it('en', () => {
    i18nChangeLanguage('en')
    expect(t('pdf.upload')).toBe('Upload PDF')
  })
})
