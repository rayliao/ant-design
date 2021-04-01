import CalendarLocale from 'rc-picker/lib/locale/km_KH';
import TimePickerLocale from '../../time-picker/locale/km_KH';
import { PickerLocale } from '../generatePicker';

const locale: PickerLocale = {
  lang: {
    placeholder: 'សូមជ្រើសរើសកាលបរិច្ឆេទ',
    yearPlaceholder: 'សូមជ្រើសរើសឆ្នាំ',
    quarterPlaceholder: 'សូមជ្រើសរើសត្រីមាស',
    monthPlaceholder: 'សូមជ្រើសរើសខែ',
    weekPlaceholder: 'សូមជ្រើសរើសសប្តាហ៍',
    rangePlaceholder: ['ថ្ងៃ​ចាប់ផ្តើម', 'កាលបរិច្ឆេទបញ្ចប់'],
    rangeYearPlaceholder: ['ឆ្នាំចាប់ផ្តើម', 'ឆ្នាំបញ្ចប់'],
    rangeMonthPlaceholder: ['ខែចាប់ផ្តើម', 'ខែបញ្ចប់'],
    rangeWeekPlaceholder: ['ចាប់ផ្តើមសប្តាហ៍', 'បញ្ចប់សប្តាហ៍'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

locale.lang.ok = 'កំណត់';

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
