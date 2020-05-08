/**
 * Copyright (c) 2015-present, Haltu Oy
 * Released under the MIT license
 * https://github.com/haltu/muuri/blob/master/LICENSE.md
 */

/**
 * Get event target across shadow dom
 *
 * @param {*} event
 * @returns {String}
 */
export default function getEventTarget(event) {
  return (event.composedPath && event.composedPath()[0]) || event.path[0] || event.target;
}
