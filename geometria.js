//classe Circulo
class Circulo {
    constructor(radius) {
        this.radius = radius
        this.pi = 3.14
    }

    area() {

        let area = this.pi * Math.pow(this.radius, 2)
        return console.log(`área: ${area}`)
    }

    perimeter() {
        let perimeter = 2 * this.pi * this.radius
        return console.log(`Comprimento: ${perimeter.toFixed(2)}`)
    }
}

//objetos da classe Circulo
let circulo = new Circle(5) // 5 de raio
let circulo1 = new Circle(10) // 10 de raio
let circulo2 = new Circle(8) // 8 de raio

//invocando os métodos da classe abstrata
circulo.area() //area do circulo - 5 de raio
circulo.perimeter()
circulo1.area() //area do circulo1 - 10 de raio
circulo1.perimeter()
circulo2.area() //area do circulo1 - 8 de raio

//classe Quadrado
class Quadrado {
    constructor(lado) {
        this.side = lado
    }

    area() {
        let area = this.lado * this.lado
        return console.log(`Área total: ${area}cm`)
    }

    perimeter() {
        let perimeter = 4 * this.lado
        return console.log(`Perímetro total: ${perimeter}cm \n`)
    }
}

//Objeto criado a partir da classe Quadrado
let quadrado = new Quadrado(5)

//Trabalhando com protótipo para calcular a diagonal do quadrado
Square.prototype.diagonal = square.side * Math.sqrt(2) //calcula a diágonal

console.log(`A diagonal do quadrado é: ${square.diagonal.toFixed(2)}`) 

//Classe retangulo
class Rectangle {
    constructor(length, height) {
        this.length = length
        this.height = height
    }

    area() {
        let area = this.height * this.length
        return console.log(`Área total: ${area}`)
    }

    perimeter() {
        let perimeter = 2 * (this.height + this.length)
        return console.log(`Perimetro total: ${perimeter}`)
    }
}

let rectangle = new Rectangle(5, 4)

/* rectangle.rectangleInformations() */