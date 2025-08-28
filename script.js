alert(`
    classses:   Raças:
    Bárbaro    Anão
    Bruxo       Elfo
    Clérigo     Halfling
    Druida      Humano
    Feiticeiro  Draconato
    Guerreiro  Gnomo
    Ladino      Meio-Elfo
    Mago        Meio-Orc
    Monge       Tiefling
    Paladino
    Patrulheiro
    `)

let nome = prompt("Digite o nome do personagem: ").toUpperCase()
let raca = prompt(`Raça do ${nome}`).toUpperCase()
let classe = prompt(`Classe do ${nome}: `).toUpperCase()

alert("Agora você vai colocar valores nos atributos")
let forca = parseInt(prompt("Coloque o valor de força: "))
let destreza = parseInt(prompt("Coloque o valor de destreza: "))
let constituicao = parseInt(prompt("Coloque o valor constituição: "))
let inteligencia = parseInt(prompt("Coloque o valor de inteligência: "))
let sabedoria = parseInt(prompt("Coloque o valor de sabedoria : "))
let carisma = parseInt(prompt("Coloque o valor carisma: "))

if (raca === "ANÃO" || raca === "ANAO") {
    constituicao = constituicao + 2
    raca = "ANÃO"
} else if (raca === "ELFO") {
    destreza = destreza + 2
} else if (raca === "HALFLING") {
    destreza = destreza + 2
} else if (raca === "HUMANO") {
    forca = forca + 1
    destreza = destreza + 1
    constituicao = constituicao + 1
    inteligencia = inteligencia + 1
    sabedoria = sabedoria + 1
    carisma = carisma + 1
} else if (raca === "DRACONATO") {
    carisma = carisma + 1
    forca = forca + 2
} else if (raca === "gnomo") {
    destreza = destreza + 1
} else if (raca === "MEIO-ELFO" || raca === "MEIO ELFO") {
    carisma = carisma + 2
    destreza = destreza + 1
    constituicao = constituicao + 1
    raca = "MEIO-ELFO"
} else if (raca === "MEIO-ORC" || raca === "MEIO ORC") {
    forca = forca + 2
    constituicao = constituicao +1
    raca = "MEIO-ORC"
} else if (raca === "TIEFLING") {
    inteligencia = inteligencia + 1
    carisma = carisma + 2
}

let modforca = (forca - 10)/2
let moddestreza = (destreza - 10)/2
let modconstituicao = (constituicao - 10)/2
let modinteligencia = (inteligencia - 10)/2
let modsabedoria = (sabedoria - 10)/2
let modcarisma = (carisma - 10)/2
let vida

if (classe === "BÁRBARO" || classe === "BARBARO") {
     vida = 12 + modconstituicao
    classe = "BÁRBARO"
} else if (classe === "BARDO") {
     vida = 8 + modconstituicao
} else if (classe === "BRUXO") {
     vida = 8 + modconstituicao 
} else if (classe === "CLÉRIGO" ||  classe === "CLERIGO") {
     vida = 8 + modconstituicao
    classe = "CLÉRIGO"
} else if (classe === "DRUIDA") {
     vida = 8 + modconstituicao
} else if (classe === "FEITICEIRO") {
     vida = 6 + modconstituicao
} else if (classe === "GUERREIRO" || classe === "GUERRERO") {
     vida = 10 + modconstituicao
    classe = "GUERREIRO"
} else if (classe === "LADINO") {
     vida = 8 + modconstituicao
} else if (classe === "MAGO") {
     vida = 6 + modconstituicao
} else if (classe === "MONGE") {
     vida = 8 + modconstituicao 
} else if (classe === "PALADINO") {
     vida = 10 + modconstituicao
} else if (classe === "PATRULHEIRO" || classe === "PATRULHERO") {
     vida = 10 + modconstituicao
    classe = "PATRULHEIRO"
}

alert (`
    
    =====FICHA DO PERSONAGEM=====
    NOME: ${nome}
    RACA: ${raca} 
    CLASSE: ${classe}
    VIDA: ${vida.toFixed(0)}
    ==========ATRIBUTOS==========
    FORÇA: ${forca.toFixed(0)} modficador: ${modforca.toFixed(0)}
    DESTREZA: ${destreza.toFixed(0)} modficador: ${moddestreza.toFixed(0)}
    CONSTITUIÇÃO: ${constituicao.toFixed(0)} modficador: ${modconstituicao.toFixed(0)}
    INTELIGÊNCIA: ${inteligencia.toFixed(0)} modficador: ${modinteligencia.toFixed(0)}
    SABEDORIA: ${sabedoria.toFixed(0)} modficador: ${modsabedoria.toFixed(0)}
    CARISMA: ${carisma.toFixed(0)} modficador: ${modcarisma.toFixed(0)}
    =============================
    `)

    
    let nivelpergunta = prompt("Você quer colocar um nível no personagem? [S/N]").toUpperCase
    
    if (nivelpergunta === "S") {
        let nivel = true
    } else {alert("Até mais.")}
    
    if (nivel === true) {
        alert("então vamos lá. Nível máximo: 20")
        nivel = parseInt(prompt("Coloque o nível do seu personagem: "))
    }
            if (nivel === 4) {
                let adicionar  = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
                if (adicionar == 1) {
                    let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    }
                } else if (adicionar == 2) {
                    alert("Escolha um e depois outro")
                     let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    } 
                    let segundo = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha outro: ")
                    if (segundo == 1) {
                        forca = forca + 2
                    } else if (segundo == 2) {
                        destreza = destreza + 2
                    } else if (segundo == 3) {
                        constituicao = constituicao + 2
                    } else if (segundo == 4) {
                        inteligencia = inteligencia + 2
                    } else if (segundo == 5) {
                        sabedoria = sabedoria + 2
                    } else if (segundo == 6) {
                        carisma = carisma + 2
                }
            }
            if (nivel === 8) {
                let adicionar  = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
                if (adicionar == 1) {
                    let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    }
                } else if (adicionar == 2) {
                    alert("Escolha um e depois outro")
                     let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    } 
                    let segundo = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha outro: ")
                    if (segundo == 1) {
                        forca = forca + 2
                    } else if (segundo == 2) {
                        destreza = destreza + 2
                    } else if (segundo == 3) {
                        constituicao = constituicao + 2
                    } else if (segundo == 4) {
                        inteligencia = inteligencia + 2
                    } else if (segundo == 5) {
                        sabedoria = sabedoria + 2
                    } else if (segundo == 6) {
                        carisma = carisma + 2
                }
            }
            }
            if (nivel === 12) {
                let adicionar  = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
                if (adicionar == 1) {
                    let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    }
                } else if (adicionar == 2) {
                    alert("Escolha um e depois outro")
                     let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    } 
                    let segundo = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha outro: ")
                    if (segundo == 1) {
                        forca = forca + 2
                    } else if (segundo == 2) {
                        destreza = destreza + 2
                    } else if (segundo == 3) {
                        constituicao = constituicao + 2
                    } else if (segundo == 4) {
                        inteligencia = inteligencia + 2
                    } else if (segundo == 5) {
                        sabedoria = sabedoria + 2
                    } else if (segundo == 6) {
                        carisma = carisma + 2
                }
            }
            }
            if (nivel === 16) {
                let adicionar  = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
                if (adicionar == 1) {
                    let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    }
                } else if (adicionar == 2) {
                    alert("Escolha um e depois outro")
                     let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    } 
                    let segundo = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha outro: ")
                    if (segundo == 1) {
                        forca = forca + 2
                    } else if (segundo == 2) {
                        destreza = destreza + 2
                    } else if (segundo == 3) {
                        constituicao = constituicao + 2
                    } else if (segundo == 4) {
                        inteligencia = inteligencia + 2
                    } else if (segundo == 5) {
                        sabedoria = sabedoria + 2
                    } else if (segundo == 6) {
                        carisma = carisma + 2
                }
            }
            }
            if (nivel === 19) {
                let adicionar  = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
                if (adicionar == 1) {
                    let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    }
                } else if (adicionar == 2) {
                    alert("Escolha um e depois outro")
                     let escolhaAdicionar = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha um:")
                    if (escolhaAdicionar == 1) {
                        forca = forca + 2
                    } else if (escolhaAdicionar == 2) {
                        destreza = destreza + 2
                    } else if (escolhaAdicionar == 3) {
                        constituicao = constituicao + 2
                    } else if (escolhaAdicionar == 4) {
                        inteligencia = inteligencia + 2
                    } else if (escolhaAdicionar == 5) {
                        sabedoria = sabedoria + 2
                    } else if (escolhaAdicionar == 6) {
                        carisma = carisma + 2
                    } 
                    let segundo = prompt("1.FORÇA 2.DESTREZA 3.CONSTITUIÇÃO 4.INTELIGÊNCIA 5.SABEDORIA 6.CARISMA escolha outro: ")
                    if (segundo == 1) {
                        forca = forca + 2
                    } else if (segundo == 2) {
                        destreza = destreza + 2
                    } else if (segundo == 3) {
                        constituicao = constituicao + 2
                    } else if (segundo == 4) {
                        inteligencia = inteligencia + 2
                    } else if (segundo == 5) {
                        sabedoria = sabedoria + 2
                    } else if (segundo == 6) {
                        carisma = carisma + 2
                }
            }
            }
        }