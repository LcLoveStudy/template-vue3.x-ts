import { getItem, setItem, removeItem } from './common/localstorage'
import {startLoading,endLoading }from './page/nprogress'
import { arrNoRepeat, arrSort, isArray } from './array'
import { deepFreeze, objectCopy } from './object'
import { pageScroll } from './page/pageScroll'
import { Percentage } from './page/percentage'
import { dateFormat } from './dateFormat'
import { downLoad } from './file/download'
import getColor from './getColor'
import getType from './getType'
import hasRole from './auth/hasRole'
import getCopy from './common/copy'
import http from './http'
export {
  Percentage,
  http,
  downLoad,
  arrNoRepeat,
  startLoading,
  endLoading,
  arrSort,
  hasRole,
  deepFreeze,
  getColor,
  getItem,
  getType,
  isArray,
  setItem,
  removeItem,
  pageScroll,
  getCopy,
  objectCopy,
  dateFormat
}
