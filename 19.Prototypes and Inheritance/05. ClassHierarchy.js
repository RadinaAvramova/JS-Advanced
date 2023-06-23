function hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(value) {
            this.units = value;
        }
        metricConversion(num) {
            if (this.units === 'm') return num /= 10;
            if (this.units === 'mm') return num *= 10;
            return num;
        }
        toString() {
            if (this.hasOwnProperty('radius')) {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
            }
            if (this.hasOwnProperty('width')) {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            }
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            this.radius = this.metricConversion(this._radius);
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            this.width = this.metricConversion(this._width);
            this.height = this.metricConversion(this._height);
            return this.width * this.height;
        }
    }
    return { Figure, Circle, Rectangle };
}

function Hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract');
            }
        }
        changeUnits(value) {
            this.units = value;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            let radius = this._radius;
            switch (this.units) {
                case 'm':
                    radius /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    radius *= 10;
                    break;
                default:
                    break;
            }
            return radius;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            let width = this._width;
            switch (this.units) {
                case 'm':
                    width /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    width *= 10;
                    break;
                default:
                    break;
            }
            return width;
        }
        get height() {
            let height = this._height;
            switch (this.units) {
                case 'm':
                    height /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    height *= 10;
                    break;
                default:
                    break;
            }
            return height;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}

function Hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract');
            }
        }
        changeUnits(value) {
            this.units = value;
        }
        scaleParam(param) {
            switch (this.units) {
                case 'm':
                    param /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    param *= 10;
                    break;
                default:
                    break;
            }
            return param;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            return this.scaleParam(this._radius);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            return this.scaleParam(this._width);
        }
        get height() {
            return this.scaleParam(this._height);
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}


function createHirarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {}
        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        _divideValue(){
            switch(this.units) {
                case 'cm': return 1;
                case 'mm': return 0.1;
                case 'm': return 100;
            }
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius(){
            return this._radius / this._divideValue;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            let baseToString = super.toString();
            return `${baseToString} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        } 

        get _divideValue(){
            switch(this.units) {
                case 'cm': return 1;
                case 'mm': return 0.1;
                case 'm': return 100;
            }
        }

        get width(){
            return this._width / this._divideValue;
        }

        getArea() {
            let area = this.width * this.height;
            return area;
        }

        toString() {
            let baseToString = super.toString();
            return `${baseToString} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
}


function hierarchy() {
    // Write a function that returns 3 classes - Figure, Circle and Rectangle.

    class Figure {
        // Should have property units ("m", "cm", "mm") with default value "cm"
        // Has method changeUnits that sets different units for that figure
        constructor(units = 'cm') {
            this.units = units;
        }
        changeUnits(newUnits) {
            this.units = newUnits;
        }
        get area() {
            throw new Error('Not implemented!')
        }

        transformMetric(valInCm) {
            return this.units === 'm' ?
            valInCm / 100 : this.units === 'mm' ? valInCm * 10 : valInCm;
        }
    }

    class Circle extends Figure {
        // Extends Figure
        // Has a property radius
        // Overrides area getter to return the area of the Circle (PI * r * r)
        // toString() - should return a string representation of the figure in the format
        // "Figures units: {type} Area: {area} - radius: {radius}"
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() {
            const radius = this.transformMetric(this.radius);
            return Math.PI * radius * radius;
        }

        toString() {
            const r = this.transformMetric(this.radius);
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${r}`;
        }
    }

    class Rectangle extends Figure {
        // Extends Figure
        // Has properties width and height
        // Overrides area getter to return the area of the Rectangle (width * height)
        // toString() - should return a string representation of the figure in the format
        // Figures units: {type} Area: {area} - width: {width}, height: {height}"
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            const width = this.transformMetric(this.width);
            const height = this.transformMetric(this.height);
            return width * height;
        }

        toString() {
            const w = this.transformMetric(this.width);
            const h = this.transformMetric(this.height);
            return `Figures units: ${this.units} Area: ${this.area} - width: ${w}, height: ${h}`;
        }
    }

    return {
        // Your function should return an object containing the Figure, Circle and Rectangle classes.
        Figure,
        Circle,
        Rectangle,
    };
}

hierarchy();