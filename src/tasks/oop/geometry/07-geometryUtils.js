const GeometryUtils = {

    createLine(l) {
        return new LineSegment([new Point(0, 0), new Point(0, l)])
    },

    /**
     * ф-ция должна уметь создавать равносторонний треугольник со стороной длиной l,
     * координаты вершин можно задавать как удобно, можно так что-бы одна вершина была в начале координат, как вариант
     * ф-ция должна вернуть созданный треугольник
     */
    createTriangle(l) {

    },

    /**
     * ф-ция должна уметь создавать квадрат со стороной длиной l,
     * координаты вершин можно задавать как удобно, можно как с труегульником
     * ф-ция должна вернуть созданный квадрат
     */
    createSquare(l) {

    },

    /**
     * ф-ция должна уметь создавать круг радиуса r
     * координаты центра можно взять любые
     * ф-ция должна вернуть созданный круг
     */
    createCircle(r) {

    },

    /**
     * написать ф-цию, которая сгенерирует список из n случайных фигур
     */
    createRandomShapes(n) {
        const l = 10;

    }
};