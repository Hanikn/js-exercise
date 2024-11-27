/**
 * Имплементировать связный список
 * optional - значит, что параметр может быть, а может и не быть передан
 * индексы начинаются с 0
 */
class DoubleLinkedList {
    /**
     * values(optional) - массив значений, которыми нужно заполнить созданный список
     *
     */
    constructor(values) {
        this.head = null;
        this.length = 0;
    }

    /**
     * метод добавляет значение в конец списка
     * @param value
     */
    add(value) {

    }

    /**
     * метод вставляет значение в заданную позицию списка
     * если i < 0 или i > size  - бросить ошибку
     * @param i
     * @param value
     */
    insert(i, value) {

    }

    /**
     * метод возвращает значение с заданным индексом
     * если i < 0 или i > size  - бросить ошибку
     * @param i
     */
    get(i) {

    }

    /**
     * метод удаляет значение в заданной позиции и возвращает его
     * если i < 0 или i > size  - бросить ошибку
     * @param i
     */
    removeAt(i) {

    }

    /**
     * возвращает самое первое значение в списке
     */
    getFirst() {

    }

    /**
     * возвращает самое последнее значение в списке
     */
    getLast() {

    }

    /**
     * удаляет значение в начале списка и возвращает его
     * если список пустой - бросить ошибку
     */
    removeFirst() {

    }

    /**
     * удаляет значение в конце списка и возвращает его
     * если список пустой - бросить ошибку
     */
    removeLast() {

    }

    /**
     * возвращает размер списка
     */
    size() {

    }
}