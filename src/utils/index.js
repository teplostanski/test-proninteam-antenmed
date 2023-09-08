/**
 * Функция с замыканием
 * @param object Замыкаемый объект
 * @desc Мутирует замыкаемый объект напрямую, не возвращая новый объект
 */
export const setObjectValue = (object) => {
  /**
   * @param {string} key Строка с именем ключа
   * @param {string} newValue Строка с новым значением
   */
  return (key, newValue) => {
    Object.keys(object).forEach((objectKey) => {
      if (objectKey === key) {
        object[key] = newValue
      }
    })

    return object
  }
}

/**
 * Функция с замыканием
 * @param object Замыкаемый объект
 * @param {string} key Строка с именем ключа
 */
export const isEqualObjectValue = (object, key) => {
  /**
   * @param {string} value Строка с проверяемым значением
   * @returns {boolean}
   */
  return (value) => {
    return (
      Object.entries(object)
        .map(([objectKey, objectValue]) => {
          if (objectKey === key) {
            if (objectValue === value) {
              return true
            } else if (objectValue !== value) {
              return false
            }
          } else {
            return false
          }
        })
        /**
         * Превращает массив в строку
         * и возвращает true если значение true
         */
        .toString() === 'true'
        ? true
        : false
    )
  }
}
