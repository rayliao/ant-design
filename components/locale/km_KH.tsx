/* eslint-disable no-template-curly-in-string */
import Pagination from 'rc-pagination/lib/locale/km_KH';
import DatePicker from '../date-picker/locale/km_KH';
import TimePicker from '../time-picker/locale/km_KH';
import Calendar from '../calendar/locale/km_KH';
import { Locale } from '../locale-provider';

const typeTemplate = '${label}不是一个有效的${type}';

const localeValues: Locale = {
  locale: 'km',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  // locales for all components
  global: {
    placeholder: 'សូម​ជ្រើសរើស',
  },
  Table: {
    filterTitle: 'ត្រង',
    filterConfirm: 'យល់ព្រម',
    filterReset: 'កំណត់ឡើងវិញ',
    filterEmptyText: 'គ្មានធាតុតម្រង',
    selectAll: 'ជ្រើសរើសទាំងអស់នៅលើទំព័រ',
    selectInvert: 'ដាក់បញ្ច្រាសការជ្រើសរើសទំព័របច្ចុប្បន្ន',
    selectNone: 'ទទេទាំងអស់',
    selectionAll: 'ជ្រើសរើសទាំងអស់',
    sortTitle: 'តម្រៀប',
    expand: 'ពង្រីកជួរដេក',
    collapse: 'បិទជួរដេក',
    triggerDesc: 'ចុចលើលំដាប់ចុះ',
    triggerAsc: 'ចុចលំដាប់ឡើង',
    cancelSort: 'បោះបង់ការតម្រៀប',
  },
  Modal: {
    okText: 'យល់ព្រម',
    cancelText: 'បោះបង់',
    justOkText: 'យល់ហើយ',
  },
  Popconfirm: {
    cancelText: 'បោះបង់',
    okText: 'យល់ព្រម',
  },
  Transfer: {
    searchPlaceholder: '请输入搜索内容',
    itemUnit: '项',
    itemsUnit: '项',
    remove: '删除',
    selectCurrent: '全选当页',
    removeCurrent: '删除当页',
    selectAll: '全选所有',
    removeAll: '删除全部',
    selectInvert: '反选当页',
  },
  Upload: {
    uploading: '文件上传中',
    removeFile: '删除文件',
    uploadError: '上传错误',
    previewFile: '预览文件',
    downloadFile: '下载文件',
  },
  Empty: {
    description: '暂无数据',
  },
  Icon: {
    icon: '图标',
  },
  Text: {
    edit: '编辑',
    copy: '复制',
    copied: '复制成功',
    expand: '展开',
  },
  PageHeader: {
    back: '返回',
  },
  Form: {
    optional: '（可选）',
    defaultValidateMessages: {
      default: '字段验证错误${label}',
      required: '请输入${label}',
      enum: '${label}必须是其中一个[${enum}]',
      whitespace: '${label}不能为空字符',
      date: {
        format: '${label}日期格式无效',
        parse: '${label}不能转换为日期',
        invalid: '${label}是一个无效日期',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label}须为${len}个字符',
        min: '${label}最少${min}个字符',
        max: '${label}最多${max}个字符',
        range: '${label}须在${min}-${max}字符之间',
      },
      number: {
        len: '${label}必须等于${len}',
        min: '${label}最小值为${min}',
        max: '${label}最大值为${max}',
        range: '${label}须在${min}-${max}之间',
      },
      array: {
        len: '须为${len}个${label}',
        min: '最少${min}个${label}',
        max: '最多${max}个${label}',
        range: '${label}数量须在${min}-${max}之间',
      },
      pattern: {
        mismatch: '${label}与模式不匹配${pattern}',
      },
    },
  },
  Image: {
    preview: '预览',
  },
};

export default localeValues;
