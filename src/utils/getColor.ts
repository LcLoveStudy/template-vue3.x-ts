/**
 * @description 随机生成16进制颜色
 * @return {String}
 */
const getColor = (): string => {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
}

export default getColor