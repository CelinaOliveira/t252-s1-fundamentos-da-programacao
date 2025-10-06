type ItemEstoque = {
    produto: string;
    quantidade: number;
    minimo: number;
};

let estoque: ItemEstoque[] = [
    { produto: "Arroz", quantidade: 50, minimo: 20 },
    { produto: "Feijão", quantidade: 15, minimo: 20 },
    { produto: "Macarrão", quantidade: 5, minimo: 10 },
    { produto: "Açúcar", quantidade: 30, minimo: 15 }
];

let quantidadeMaiorQue20: ItemEstoque[] = [];

for(let i = 0; i < estoque.length; i++) {
    let itens = estoque[i]
    if(itens!!.quantidade > 20) {
        quantidadeMaiorQue20.push(items)
    }
}

let quantidadeMaiorQue20: ItemEstoque[] = estoque.filter(item:ItemEstoque): boolean => {
    return item.quantidade > 20;
}

  console.log(quantidadeMaiorQue20);