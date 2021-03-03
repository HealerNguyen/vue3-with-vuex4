/**
 * Mocking client-server processing
 */
const users = [
  { 'id': 1, 'name': 'Nguyễn Đức Tuấn', username: 'nguyen-duc-tuan' },
  { 'id': 2, 'name': 'Nguyễn Thu Trang', username: 'nguyen-thu-trang' },
  { 'id': 3, 'name': 'Nguyễn Đức Gia Đăng', username: 'nguyen-duc-gia-dang' }
]

export default {
  getUsers (cb) {
    setTimeout(() => cb(users), 100)
  },
}