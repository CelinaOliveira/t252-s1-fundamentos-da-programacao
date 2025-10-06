
const cursos = [
  { id: 1, nome: "Desenvolvimento Web" },
  { id: 2, nome: "Lógica de Programação" },
  { id: 3, nome: "Banco de Dados" },
];

const estudante1 = {
  nome: "Thais",
  cursoId: 1,
  notas: [8, 7, 9],
  mensagem: "",
};

const estudante2 = {
  nome: "Jessica",
  cursoId: 2,
  notas: [6, 5, 4],
  mensagem: "",
};

const estudante3 = {
  nome: "Carol",
  cursoId: 3,
  notas: [3, 4, 2],
  mensagem: "",
};

const estudantes = [estudante1, estudante2, estudante3];

function mediaEstudante(estudante: { notas: number[] }): number {
  const media = (estudante.notas[0] + estudante.notas[1] + estudante.notas[2]) / 3;
  return media;
}

const estiloAprendizadoArrow = (estudante: { notas: number[] }): string => {
  const media = mediaEstudante(estudante);

  return media >= 7
    ? "Exploradora confiante."
    : media >= 5
    ? "Brilha como aprendiz."
    : "Desbravando a programação.";
};

estudantes.forEach((estudante) => {
  const media = mediaEstudante(estudante);
  const curso = nomeDoCurso(estudante.cursoId);
  const mensagem = estiloAprendizadoArrow(estudante);

  console.log(" Estudante:", estudante.nome);
  console.log(" Curso:", curso);
  console.log("Média:", media.toFixed(2));
  console.log(" Mensagem:", mensagem);

});

function nomeDoCurso(cursoId: number) {
    throw new Error("Function not implemented.");
}
