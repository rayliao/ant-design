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
    searchPlaceholder: 'បញ្ចូលមាតិកាស្វែងរក',
    itemUnit: 'ធាតុ',
    itemsUnit: 'ធាតុ',
    remove: 'លុប',
    selectCurrent: 'ជ្រើសរើសទាំងអស់នៅលើទំព័របច្ចុប្បន្ន',
    removeCurrent: 'លុបទំព័របច្ចុប្បន្ន',
    selectAll: 'ជ្រើស​យក​ទាំងអស់',
    removeAll: 'លុប​ទាំងអស់',
    selectInvert: 'ដោះជម្រើសទំព័របច្ចុប្បន្ន',
  },
  Upload: {
    uploading: 'ការផ្ទុកឯកសារឡើង',
    removeFile: 'លុបឯកសារ',
    uploadError: 'កំហុសក្នុងការផ្ទុកឡើង',
    previewFile: 'មើលឯកសារជាមុន',
    downloadFile: 'ទាញ​យក​ឯកសារ',
  },
  Empty: {
    description: 'គ្មាន​ទិន្នន័យ',
  },
  Icon: {
    icon: 'រូបតំណាង',
  },
  Text: {
    edit: 'កែប្រែ',
    copy: 'ចម្លង',
    copied: 'ចម្លងដោយជោគជ័យ',
    expand: 'លាតត្រដាង',
  },
  PageHeader: {
    back: 'ត្រឡប់មកវិញ',
  },
  Form: {
    optional: '(ស្រេចចិត្ត)',
    defaultValidateMessages: {
      default: 'កំហុសសុពលភាពវាល${label}',
      required: 'សូមបញ្ចូល${label}',
      enum: '${label}ត្រូវតែជារបស់មួយ[${enum}]',
      whitespace: '${label}មិនអាចជាតួអក្សរទទេ',
      date: {
        format: '${label}ទ្រង់ទ្រាយកាលបរិច្ឆេទមិនត្រឹមត្រូវ',
        parse: '${label}មិនអាចប្តូរទៅកាលបរិច្ឆេទទេ',
        invalid: '${label}ជាកាលបរិច្ឆេទមិនត្រឹមត្រូវ',
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
        len: '${label} ត្រូវមានតួអក្សរ ${len}',
        min: '${label} យ៉ាងហោចណាស់ ${min} តួអក្សរ',
        max: '${label} ច្រើនបំផុត ${max} តួអក្សរ',
        range: '${label} ត្រូវមានចន្លោះតួអក្សរ ${min}-${max}',
      },
      number: {
        len: '${label} ត្រូវតែស្មើនឹង {len}',
        min: '${label} តម្លៃអប្បបរមាគឺ ${min}',
        max: '${label} តម្លៃអតិបរមាគឺ ${max}',
        range: '${label} ត្រូវតែនៅចន្លោះ ${min}-${max}',
      },
      array: {
        len: 'ត្រូវតែ ${len}${label}',
        min: 'យ៉ាងហោចណាស់ ${min}${label}',
        max: 'ភាគច្រើន ${max}${label}',
        range: '${label} បរិមាណត្រូវស្ថិតនៅចន្លោះ ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} មិនត្រូវនឹងលំនាំ ${pattern}',
      },
    },
  },
  Image: {
    preview: 'មើលជាមុន',
  },
};

export default localeValues;
