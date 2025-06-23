/**
 * Data Transfer Object for Event entity.
 * @typedef {Object} EventDTO
 * @property {number} id
 * @property {number} userId
 * @property {number} calendarId
 * @property {string} title
 * @property {string} start
 * @property {string} end
 * @property {string|null} description
 * @property {string} bgcolor
 */

class EventDTO {
  /**
   * @param {{ 
   * id: number,
   * userId: number,
   * calendarId: number,
   * title: string,
   * start: string,
   * end: string,
   * description: string|null,
   * bgcolor: string
   * }} data
   */
  constructor({ id, userId, calendarId, title, start, end, description, bgcolor }) {
    this.id = id;
    this.userId = userId;
    this.calendarId = calendarId;
    this.title = title;
    this.start = start;
    this.end = end;
    this.description = description;
    this.bgcolor = bgcolor;
  }
}

module.exports = EventDTO;