interface Estudante {
    nome: string,
    curso: string, 
    numeroMatricula: number,
    cursosMatriculados: string[],
    isActive: boolean,
    email: string,
    valorCurso: number
}

let estudantes: Estudante[] = [
    {
        nome: "Ana",
        curso: "Engenharia da Computação",
        numeroMatricula: 101,
        cursosMatriculados: ["Matemática Discreta", "Algoritmos", "Estruturas de Dados"],
        isActive: true,
        email: "ana@gmail.com",
        valorCurso: 1500
    },
    {
        nome: "Maria",
        curso: "Ciência de Dados",
        numeroMatricula: 102,
        cursosMatriculados: ["Estatística", "Machine Learning", "Banco de Dados"],
        isActive: false,
        email: "maria@gmail.com",
        valorCurso: 2000
    },
    {
        nome: "Cecília",
        curso: "Sistemas de Informação",
        numeroMatricula: 103,
        cursosMatriculados: ["Programação Web", "Redes de Computadores"],
        isActive: true,
        email: "cecilia@gmail.com",
        valorCurso: 1800
    }

];

  estudantes.forEach((estudantes, index, array) => {
    if(estudantes.isActive) {
        console.log(estudantes.nome)
    }
  }
)