/**
 * Data Transfer Object for User entity.
 * @typedef {Object} UserDTO
 * @property {number} id
 * @property {string} email
 * @property {string} nickname
 * @property {string} phone
 */
class UserDTO {
  /**
   * @param {{ 
   * id: number,
   * email: string,
   * nickname: string,
   * phone: string
   * }} data
   */
  constructor({ id, email, nickname, phone }) {
    this.id = id;
    this.email = email;
    this.nickname = nickname;
    this.phone = phone;
  }
}

module.exports = UserDTO;