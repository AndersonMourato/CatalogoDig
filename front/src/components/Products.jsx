//http://app.absfarma.com.br:3031/png/1016.png

const products =  [
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://s3-sa-east-1.amazonaws.com/nexfar-documents-private/2021/3/17/605259c72fdfe9294266d109.png",
        cod: "8750",
        descricao: "ABCLER 50FLACONETES 10ML AIRELA",
        marca: "AIRELA",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "MIP",
        departamento: "ALIMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nf-static-abs.s3.sa-east-1.amazonaws.com/products/7894164008087.png",
        cod: "13576",
        descricao: "ABCALCIUM MORANGO D3 240ML AIRELA",
        marca: "AIRELA",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "MIP",
        departamento: "ALIMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nexfar-documents-private.s3.sa-east-1.amazonaws.com/2023/7/31/64c7b754773d500b050057b9.png",
        cod: "16056",
        descricao: "ABIDOR 750MG 20CPR AIRELA",
        marca: "AIRELA",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "GENERICOS",
        departamento: "MEDICAMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nf-static-abs.s3.sa-east-1.amazonaws.com/products/7899095239227.png",
        cod: "9646",
        descricao: "ACETILCISTEINA 600MG GRAN 16ENV GEOLAB",
        marca: "GEOLAB",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "GENERICO",
        departamento: "MEDICAMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nexfar-documents-private.s3.sa-east-1.amazonaws.com/2022/9/20/6329acd24870a9041e2c86c2.png",
        cod: "14817",
        descricao: "ACETILCISTEINA CYSTEIN AD XP 100ML LAPON",
        marca: "LAPON",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "SUPLEMENTO",
        departamento: "COSMETICO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nf-static-abs.s3.sa-east-1.amazonaws.com/products/7896004715285.png",
        cod: "14817",
        descricao: "ACETILCISTEINA XP INF20MG/ML120ML GERMED",
        marca: "GERMED",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "DESCARTAVEIS",
        departamento: "CORRELATOS",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://s3-sa-east-1.amazonaws.com/nexfar-documents-private/2021/3/17/605259c72fdfe9294266d109.png",
        cod: "8750",
        descricao: "ABCLER 50FLACONETES 10ML AIRELA",
        marca: "AIRELA",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "DESCARTAVEIS",
        departamento: "CORRELATOS",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nf-static-abs.s3.sa-east-1.amazonaws.com/products/7894164008087.png",
        cod: "13576",
        descricao: "ABCALCIUM MORANGO D3 240ML AIRELA",
        marca: "AIRELA",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "SUPLEMENTO",
        departamento: "COSMETICO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nexfar-documents-private.s3.sa-east-1.amazonaws.com/2023/7/31/64c7b754773d500b050057b9.png",
        cod: "16056",
        descricao: "ABIDOR 750MG 20CPR AIRELA",
        marca: "AIRELA",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "MIP",
        departamento: "MEDICAMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nf-static-abs.s3.sa-east-1.amazonaws.com/products/7899095239227.png",
        cod: "9646",
        descricao: "ACETILCISTEINA 600MG GRAN 16ENV GEOLAB",
        marca: "GEOLAB",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "MIP",
        departamento: "ALIMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nexfar-documents-private.s3.sa-east-1.amazonaws.com/2022/9/20/6329acd24870a9041e2c86c2.png",
        cod: "14817",
        descricao: "ACETILCISTEINA CYSTEIN AD XP 100ML LAPON",
        marca: "LAPON",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "GENERICO",
        departamento: "MEDICAMENTO",
    },
    {
        img: "https://images.nexfar.com.br/unsafe/0x1024/https://nf-static-abs.s3.sa-east-1.amazonaws.com/products/7896004715285.png",
        cod: "14817",
        descricao: "ACETILCISTEINA XP INF20MG/ML120ML GERMED",
        marca: "GERMED",
        preco: "R$ 12,89 ",
        promo: "Acima de 4",
        prFinal: "R$ 10,89",
        categoria: "SIMILAR",
        departamento: "MEDICAMENTO",
    }
]
export function getProducts(){
    const array = [];
    products.map((item, k)=>{
        array[k] = {...item, id:k};
    })
    return array;
}

export function getMarcas(){
    const array = [];
    products.map((item, k)=>{
        array[k] = item.marca;
    })
    const newArray = [...new Set(array)];
    return newArray;
}

export function getDepartamentos(){
    const array = [];
    products.map((item, k)=>{
        array[k] = item.departamento;
    })
    const newArray = [...new Set(array)];
    return newArray;
}

export function getCategorias(){
    const array = [];
    products.map((item, k)=>{
        array[k] = item.categoria;
    })
    const newArray = [...new Set(array)];
    return newArray;
}

