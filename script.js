alert("Esse é um programa para fazer ficha de D&D 5º edição(sitema de rpg)")
alert(`
    Quando aparecer perguntas que tem opções(1. 2. 3. ou [S/N]) escolha a que você desejar!
    Quando pedir para digitar valores, coloque apenas números inteiros!
    Quando pedir para digitar, você escolher oque quer escrever
    `)
let ajuda = prompt("Você quer ver algumas regras do D&D antes de fazer a ficha? [S/N]").toUpperCase()
if (ajuda === "S") {
    alert("Cada raça pode te dar um aumento em alguns atributos")
    alert("Cada atributo tem um modificador")
    alert("O modificador é o número que vai ser somado com o valor do dado que você rolar")
    alert("O modificador é calculado com a seguinte fórmula: (valor do atributo - 10)/2  caso de um número quebrado o valr será arredontado paro o menor número inteiro mais próximo")
    alert(`
        No D&D 5E é usado é usado 7 diferentes tipos de dados, sendo eles:
        dado de 4 faces (d4) 
        dado de 6 faces (d6)
        dado de 8 faces (d8)
        dado de 10 faces (d10)
        dado de 12 faces (d12)
        dado de 20 faces (d20)
        dado de 100 faces (100)
        `)
    alert("Cada classe ira dar habilidade para o personagem")
    alert("Nos níveis 4, 8, 12, 16 e 19 você o personagem ira receber mais dois pontos para colocar nos atribustos, você decide como vai colocar")
    alert("")
} else {
    alert("Então vamos começar")
}

let nome = prompt("Digite o nome do personagem: ")
let raca = parseInt(prompt(`
                Coloque a raça do seu personagem:
                Raças:
                1.Anão
                2.Elfo
                3.Halfling
                4.Humano
                5.Draconato
                6.Gnomo
                7.Meio-Elfo
                8.Meio-Orc
                9.Tiefling
                `))
let classe = parseInt(prompt(`
                Classe do seu personagem: 
                 Classes:
                1.Bárbaro
                2.Bardo
                3.Bruxo
                4.Clérigo
                5.Druida
                6.Feiticeiro
                7.Guerreiro
                8.Ladino
                9.Mago
                10.Monge
                11.Paladino
                12.Patrulheiro
                `))

alert("Agora você vai colocar valores nos atributos")
let forca = parseInt(prompt("Coloque o valor de força: "))
let destreza = parseInt(prompt("Coloque o valor de destreza: "))
let constituicao = parseInt(prompt("Coloque o valor constituição: "))
let inteligencia = parseInt(prompt("Coloque o valor de inteligência: "))
let sabedoria = parseInt(prompt("Coloque o valor de sabedoria : "))
let carisma = parseInt(prompt("Coloque o valor carisma: "))

switch (raca) {
    case 1:
        constituicao = constituicao + 2
        raca = "Anão"
        break
    case 2:
        raca = "Elfo"
        destreza = destreza + 2
        break
    case 3:
        raca = "Halfling"
        destreza = destreza + 2
        break
    case 4:
        raca = "Humano"
        forca = forca + 1
        destreza = destreza + 1
        constituicao = constituicao + 1
        inteligencia = inteligencia + 1
        sabedoria = sabedoria + 1
        carisma = carisma + 1
        break
    case 5:
        raca = "Draconato"
        carisma = carisma + 1
        forca = forca + 2
        break
    case 6:
        raca = "Gnomo"
        destreza = destreza + 1
        break
    case 7:
        raca = "Meio-Elfo"
        carisma = carisma + 2
        destreza = destreza + 1
        constituicao = constituicao + 1
        break
    case 8:
        raca = "Meio-Orc"
        forca = forca + 2
        constituicao = constituicao + 1
        break
    case 9:
        raca = "Tiefling"
        inteligencia = inteligencia + 1
        carisma = carisma + 2
        break
    default:
        alert("Você escreveu alguma coisa errada")
}

let modforca = Math.floor((forca - 10) / 2)
let moddestreza = Math.floor((destreza - 10) / 2)
let modconstituicao = Math.floor((constituicao - 10) / 2)
let modinteligencia = Math.floor((inteligencia - 10) / 2)
let modsabedoria = Math.floor((sabedoria - 10) / 2)
let modcarisma = Math.floor((carisma - 10) / 2)
let vida

switch (classe) {
    case 1:
        vida = 12 + Math.floor(modconstituicao)
        classe = "Bárbaro"
        break
    case 2:
        classe = "Bardo"
        vida = 8 + Math.floor(modconstituicao)
        break
    case 3:
        classe = "Bruxo"
        vida = 8 + Math.floor(modconstituicao)
        break
    case 4:
        classe = "Clérigo"
        vida = 8 + Math.floor(modconstituicao)
        break
    case 5:
        classe = "Druida"
        vida = 8 + Math.floor(modconstituicao)
        break
    case 6:
        classe = "Feiticeiro"
        vida = 6 + Math.floor(modconstituicao)
        break
    case 7:
        classe = "Guerreiro"
        vida = 10 + Math.floor(modconstituicao)
        break
    case 8:
        classe = "Ladino"
        vida = 8 + Math.floor(modconstituicao)
        break
    case 9:
        classe = "Mago"
        vida = 6 + Math.floor(modconstituicao)
    case 10:
        classe = "Monge"
        vida = 8 + Math.floor(modconstituicao)
        break
    case 11:
        classe = "Paladino"
        vida = 10 + Math.floor(modconstituicao)
        break
    case 12:
        classe = "Patrulheiro"
        vida = 10 + Math.floor(modconstituicao)
        break
    default:
        alert("Você escreveu alguma coisa errada")
}

alert(`
                =====FICHA DO PERSONAGEM=====
                NOME: ${nome}
                RACA: ${raca} 
                CLASSE: ${classe}
                VIDA: ${vida}
                ==========ATRIBUTOS==========
                FORÇA: ${forca} modficador: ${modforca}
                DESTREZA: ${destreza} modficador: ${moddestreza}
                CONSTITUIÇÃO: ${constituicao} modficador: ${modconstituicao}
                INTELIGÊNCIA: ${inteligencia} modficador: ${modinteligencia}
                SABEDORIA: ${sabedoria} modficador: ${modsabedoria}
                CARISMA: ${carisma} modficador: ${modcarisma}
                =============================
                `)

let nivelpergunta = prompt("Você quer colocar um nível no personagem? [S/N]").toUpperCase()
let nivel
if (nivelpergunta === "S") {
    nivel = true
} else {
    alert("Até mais.")
}

if (nivel === true) {
    nivel = parseInt(prompt("Coloque o nível do seu personagem de 1 até 20: "))
    if (nivel === 1) {
        switch (classe) {
            case "Bardo":
                alert(`
                        O Bardo  começa com as seguintes habilidades:
                        Conjuração
                        Inspiraçõ de Bardo(d6)
                        `)
                break
            case "Bruxo":
                alert(`
                            O Bruxo começa com as seguintes habilidades:
                            Patrono Transcedental
                            Magia de Pacto
                           `)
                break
            case "Clérigo":
                alert(`
                        O Clérigo começa com as seguintes habilidades: 
                        Conjuração
                        Domíinio Divino
                        `)
                break
            case "Druida":
                alert(`
                        O Druida começa com as seguintes habilidades: 
                        Druídico
                        Conjuração
                        `)
                break
            case "Bárbaro":
                alert(`
                        O Bárbaro começa com as seguintes habilidades: 
                        Fúria
                        Proteção sem armadura
                        `)
                break
            case "Feiticeiro":
                alert(`
                            O Feiticeiro começa com as seguintes habilidades: 
                            Conjuração
                            Origem de Feitiçaria
                            `)
                break
            case "Guerreiro":
                alert(`
                        O Guerreiro começa com as seguintes habilidades:
                        Estilo de Luta
                        Retomar o Fôlego
                        `)
                break
            case "Ladino":
                alert(`
                            O Ladino começa com as seguintes habilidades: 
                            Especialização
                            Ataque Furtivo
                            Gíria de Ladrão
                            `)
                break
            case "Mago":
                alert(`
                            O Mago começa com as seguintes habilidades:
                            Con juração
                            Recuperação Arcana
                            `)
                break
            case "Monge":
                alert(`
                            O Monge começa com as seguintes habilidades: 
                            Defesa sem Armadura
                            Artes Maciais
                            `)
                break
            case "Paladino":
                alert(`
                            O Paladino começa com as seguintes habilidades: 
                            Sentido Divino
                            Cura pelas Mãos
                            `)
                break
            case "Patrulheiro":
                alert(`
                        O Patrulheiro começa com as seguintes habilidades: 
                        Inimigo Fovorito
                        Explorador Natural
                        `)
                break
        }
    } else if (nivel === 2) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                        No segundo nível o Bárbaro possui as seguintes habilidades:
                        Fúria
                        Defesa sem Armadura
                        Ataque Descuidado
                        Sentido de Perigo
                        `)
                break
            case "Bardo":
                alert(`
                        No segundo nível o Bardo possui as seguintes habilidades:
                        Conjuração
                        Inspiração de Bardo (d6)
                        Versatilidade
                        Canção de Descanso (d6)
                        `)
            case "Bruxo":
                alert(`
                        No segundo nível o Bruxo possui as seguintes habillidades:
                        Patrono Transcendental
                        Magia de Pacto
                        Invocação Mística
                        `)
            case "Clérigo":
                alert(`
                        No segundo nível o Clérigo possui as seguintes habilidades:
                        Conjuração
                        Domínio Divino
                        Canalizar Divindade(1/descanso)
                        Características de Domínio Divino
                        `)
            case "Druida":
                alert(`
                        No segundo nível o druida possui as seguintes habilidades:
                        Druídico
                        Conjuração
                        Círculo Druídico
                        Forma Selvagem
                        `)
            case "Feiticeiro":
                alert(`
                        No segundo nível o feiticeiro possui as seguintes hibilidades:
                        Conjuração
                        Origem de Feitiçaria
                        Fonte de Magia
                        `)
                break
            case "Guerreiro":
                alert(`
                        No segundo nível o guerreiro possui as seguintes habilidades: 
                        Estilo de Luta
                        Retomar o Fôlego
                        Surto de Ação (um uso)
                        `)
                break
            case "Ladino":
                alert(`
                        No segundo nível o ladino possui as seguintes habilidades:
                        Especialização
                        Ataque Furtivo
                        Gíria de Ladrão
                        Ação Ardilosa
                        `)
                break
            case "Mago":
                alert(`
                        No segundo nível o mago possui as seguintes habilidades:
                        Conjuração
                        Recuperação Arcana
                        Tradição Arcana 
                        `)
                break
            case "Monge":
                alert(`
                        No segundo nível o monge possui as seguintes habilidades:
                        Defesa sem Armadura
                        Artes Marciais
                        Chi
                        Movimento sem Armadura
                        `)
                break
            case "Paladino":
                alert(`
                         No segundo nível o paladino possui as seguintes habilidades:
                         Sentido Divino
                         Cura pelas Mãos
                         Estilo de Luta
                         Conjuração
                         Destruição Divina
                        `)
                break
            case "Patrulheiro":
                alert(`
                        No segundo nível o patrulheiro possui as seguintes habilidades:
                        Inimigo Favorito
                        Explorador Natural
                        Estilo de Luta
                        Conjuração
                        `)
                break
        }
    } else if (nivel === 3) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No terceiro nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                        `)
                break
            case "Bardo":
                alert(`
                            No terceiro nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d6)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                        `)
                break
            case "Bruxo":
                alert(`
                            No terceiro nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                        `)
                break
            case "Clérigo":
                alert(`
                            No terceiro nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (1/descanso)
                            Características de Domínio Divino
                        `)
                break
            case "Druida":
                alert(`
                            No terceiro nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No terceiro nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                        `)
                break
            case "Guerreiro":
                alert(`
                            No terceiro nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                        `)
                break
            case "Ladino":
                alert(`
                            No terceiro nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (2d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                        `)
                break
            case "Mago":
                alert(`
                            No terceiro nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                        `)
                break
            case "Monge":
                alert(`
                            No terceiro nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                        `)
                break
            case "Paladino":
                alert(`
                            No terceiro nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No terceiro nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                        `)
                break
        }
    } else if (nivel === 5) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No quinto nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                        `)
                break
            case "Bardo":
                alert(`
                            No quinto nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                        `)
                break
            case "Bruxo":
                alert(`
                            No quinto nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                        `)
                break
            case "Clérigo":
                alert(`
                            No quinto nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (1/descanso)
                            Características de Domínio Divino
                            Destruição Divina
                        `)
                break
            case "Druida":
                alert(`
                            No quinto nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No quinto nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                        `)
                break
            case "Guerreiro":
                alert(`
                            No quinto nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                        `)
                break
            case "Ladino":
                alert(`
                            No quinto nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (3d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                        `)
                break
            case "Mago":
                alert(`
                            No quinto nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                        `)
                break
            case "Monge":
                alert(`
                            No quinto nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                        `)
                break
            case "Paladino":
                alert(`
                            No quinto nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No quinto nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                        `)
                break
        }
    } else if (nivel === 6) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No sexto nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                        `)
                break
            case "Bardo":
                alert(`
                            No sexto nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                        `)
                break
            case "Bruxo":
                alert(`
                            No sexto nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                        `)
                break
            case "Clérigo":
                alert(`
                            No sexto nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                        `)
                break
            case "Druida":
                alert(`
                            No sexto nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No sexto nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                        `)
                break
            case "Guerreiro":
                alert(`
                            No sexto nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                        `)
                break
            case "Ladino":
                alert(`
                            No sexto nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (3d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                        `)
                break
            case "Mago":
                alert(`
                            No sexto nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                        `)
                break
            case "Monge":
                alert(`
                            No sexto nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                        `)
                break
            case "Paladino":
                alert(`
                            No sexto nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No sexto nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                        `)
                break
        }
    } else if (nivel === 7) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No sétimo nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                        `)
                break
            case "Bardo":
                alert(`
                            No sétimo nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                        `)
                break
            case "Bruxo":
                alert(`
                            No sétimo nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                        `)
                break
            case "Clérigo":
                alert(`
                            No sétimo nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                        `)
                break
            case "Druida":
                alert(`
                            No sétimo nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Forma Selvagem Aprimorada (movimento de natação/escavar se aplicável)
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No sétimo nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                        `)
                break
            case "Guerreiro":
                alert(`
                            No sétimo nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                        `)
                break
            case "Ladino":
                alert(`
                            No sétimo nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (4d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                        `)
                break
            case "Mago":
                alert(`
                            No sétimo nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                        `)
                break
            case "Monge":
                alert(`
                            No sétimo nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                        `)
                break
            case "Paladino":
                alert(`
                            No sétimo nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No sétimo nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                        `)
                break
        }
    } else if (nivel === 9) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No nono nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                        `)
                break
            case "Bardo":
                alert(`
                            No nono nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                        `)
                break
            case "Bruxo":
                alert(`
                            No nono nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                        `)
                break
            case "Clérigo":
                alert(`
                            No nono nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                        `)
                break
            case "Druida":
                alert(`
                            No nono nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No nono nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                        `)
                break
            case "Guerreiro":
                alert(`
                            No nono nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                        `)
                break
            case "Ladino":
                alert(`
                            No nono nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (5d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                        `)
                break
            case "Mago":
                alert(`
                            No nono nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                        `)
                break
            case "Monge":
                alert(`
                            No nono nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                        `)
                break
            case "Paladino":
                alert(`
                            No nono nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No nono nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                        `)
                break
        }
    } else if (nivel === 10) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No décimo nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem (Caminho Primitivo)
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                        `)
                break
            case "Druida":
                alert(`
                            No décimo nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (5d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                        `)
                break
            case "Mago":
                alert(`
                            No décimo nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                        `)
                break
            case "Monge":
                alert(`
                            No décimo nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                        `)
                break
        }
    } else if (nivel === 11) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No décimo primeiro nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo primeiro nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo primeiro nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo primeiro nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                        `)
                break
            case "Druida":
                alert(`
                            No décimo primeiro nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo primeiro nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo primeiro nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo primeiro nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (6d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                        `)
                break
            case "Mago":
                alert(`
                            No décimo primeiro nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                        `)
                break
            case "Monge":
                alert(`
                            No décimo primeiro nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo primeiro nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo primeiro nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                        `)
                break
        }
    } else if (nivel === 13) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No décimo terceiro nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                            Maestria em Fúria
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo terceiro nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                            Inspirar Excelência
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo terceiro nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                            Poder Arcano
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo terceiro nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                            Magia de 7º nível
                        `)
                break
            case "Druida":
                alert(`
                            No décimo terceiro nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                            Magia de 7º nível
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo terceiro nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                            Magia de 7º nível
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo terceiro nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                            Ataque Extra Aprimorado
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo terceiro nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (6d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                        `)
                break
            case "Mago":
                alert(`
                            No décimo terceiro nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                            Magia de 7º nível
                        `)
                break
            case "Monge":
                alert(`
                            No décimo terceiro nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                            Ataque do Ki Aprimorado
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo terceiro nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                            Magia de 5º nível
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo terceiro nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                            Magia de 5º nível
                        `)
                break
        }
    } else if (nivel === 14) {
        switch (classe) {
            case "Bárabro":
                alert(`
                            No décimo quarto nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                            Maestria em Fúria
                            Fúria Brutal
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo quarto nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                            Inspirar Excelência
                            Conjuração Avançada
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo quarto nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                            Poder Arcano
                            Magia de 7º nível
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo quarto nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                            Magia de 7º nível
                            Destruição Divina Aprimorada
                        `)
                break
            case "Druida":
                alert(`
                            No décimo quarto nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                            Magia de 7º nível
                            Forma Selvagem Superior
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo quarto nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                            Magia de 7º nível
                            Metamagia Avançada
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo quarto nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                            Ataque Extra Aprimorado
                            Mestre de Combate
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo quarto nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (6d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                            Maestria em Esquiva
                        `)
                break
            case "Mago":
                alert(`
                            No décimo quarto nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                            Magia de 7º nível
                            Magia de 8º nível
                        `)
                break
            case "Monge":
                alert(`
                            No décimo quarto nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                            Ataque do Ki Aprimorado
                            Poder Supremo do Ki
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo quarto nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                            Magia de 5º nível
                            Aura Suprema
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo quarto nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                            Magia de 5º nível
                            Mestre do Campo
                        `)
                break
        }
    } else if (nivel === 15) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No décimo quinto nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                            Maestria em Fúria
                            Fúria Brutal
                            Dominância Selvagem
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo quinto nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                            Inspirar Excelência
                            Conjuração Avançada
                            Melodia Suprema
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo quinto nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                            Poder Arcano
                            Magia de 7º nível
                            Magia de 8º nível
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo quinto nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                            Magia de 7º nível
                            Destruição Divina Aprimorada
                            Magia de 8º nível
                        `)
                break
            case "Druida":
                alert(`
                            No décimo quinto nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                            Magia de 7º nível
                            Forma Selvagem Superior
                            Magia de 8º nível
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo quinto nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                            Magia de 7º nível
                            Metamagia Avançada
                            Magia de 8º nível
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo quinto nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                            Ataque Extra Aprimorado
                            Mestre de Combate
                            Ataque Supremo
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo quinto nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (7d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                            Maestria em Esquiva
                        `)
                break
            case "Mago":
                alert(`
                            No décimo quinto nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                        `)
                break
            case "Monge":
                alert(`
                            No décimo quinto nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                            Ataque do Ki Aprimorado
                            Poder Supremo do Ki
                            Ataque Imparável
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo quinto nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                            Magia de 5º nível
                            Aura Suprema
                            Magia de 6º nível
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo quinto nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                            Magia de 5º nível
                            Mestre do Campo
                            Magia de 6º nível
                        `)
                break
        }
    } else if (nivel === 17) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No décimo sétimo nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                            Maestria em Fúria
                            Fúria Brutal
                            Dominância Selvagem
                            Caminho do Berserker Aprimorado
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo sétimo nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                            Inspirar Excelência
                            Conjuração Avançada
                            Melodia Suprema
                            Magia de 7º nível
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo sétimo nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                            Poder Arcano
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo sétimo nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                            Magia de 7º nível
                            Destruição Divina Aprimorada
                            Magia de 8º nível
                            Magia de 9º nível
                        `)
                break
            case "Druida":
                alert(`
                            No décimo sétimo nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                            Magia de 7º nível
                            Forma Selvagem Superior
                            Magia de 8º nível
                            Magia de 9º nível
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo sétimo nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                            Magia de 7º nível
                            Metamagia Avançada
                            Magia de 8º nível
                            Magia de 9º nível
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo sétimo nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                            Ataque Extra Aprimorado
                            Mestre de Combate
                            Ataque Supremo
                            Ataque Imparável
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo sétimo nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (8d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                            Maestria em Esquiva
                        `)
                break
            case "Mago":
                alert(`
                            No décimo sétimo nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                        `)
                break
            case "Monge":
                alert(`
                            No décimo sétimo nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                            Ataque do Ki Aprimorado
                            Poder Supremo do Ki
                            Ataque Imparável
                            Maestria Monástica
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo sétimo nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                            Magia de 5º nível
                            Aura Suprema
                            Magia de 6º nível
                            Aura Celestial
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo sétimo nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                            Magia de 5º nível
                            Mestre do Campo
                            Magia de 6º nível
                            Mestre Caçador
                        `)
                break
        }
    } else if (nivel === 18) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No décimo oitavo nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                            Maestria em Fúria
                            Fúria Brutal
                            Dominância Selvagem
                            Caminho do Berserker Aprimorado
                            Fúria Suprema
                        `)
                break
            case "Bardo":
                alert(`
                            No décimo oitavo nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                            Inspirar Excelência
                            Conjuração Avançada
                            Melodia Suprema
                            Magia de 7º nível
                            Inspiração Suprema
                        `)
                break
            case "Bruxo":
                alert(`
                            No décimo oitavo nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                            Poder Arcano
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                            Invocação Suprema
                        `)
                break
            case "Clérigo":
                alert(`
                            No décimo oitavo nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                            Magia de 7º nível
                            Destruição Divina Aprimorada
                            Magia de 8º nível
                            Magia de 9º nível
                            Milagre Divino
                        `)
                break
            case "Druida":
                alert(`
                            No décimo oitavo nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                            Magia de 7º nível
                            Forma Selvagem Superior
                            Magia de 8º nível
                            Magia de 9º nível
                            Forma Selvagem Suprema
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No décimo oitavo nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                            Magia de 7º nível
                            Metamagia Avançada
                            Magia de 8º nível
                            Magia de 9º nível
                            Metamagia Suprema
                        `)
                break
            case "Guerreiro":
                alert(`
                            No décimo oitavo nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                            Ataque Extra Aprimorado
                            Mestre de Combate
                            Ataque Supremo
                            Ataque Imparável
                            Ataque Perfeito
                        `)
                break
            case "Ladino":
                alert(`
                            No décimo oitavo nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (8d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                            Maestria em Esquiva
                            Ataque Furtivo Supremo
                        `)
                break
            case "Mago":
                alert(`
                            No décimo oitavo nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                            Mestre da Magia
                        `)
                break
            case "Monge":
                alert(`
                            No décimo oitavo nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                            Ataque do Ki Aprimorado
                            Poder Supremo do Ki
                            Ataque Imparável
                            Maestria Monástica
                            Chi Supremo
                        `)
                break
            case "Paladino":
                alert(`
                            No décimo oitavo nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                            Magia de 5º nível
                            Aura Suprema
                            Magia de 6º nível
                            Aura Celestial
                            Aura de Proteção Suprema
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No décimo oitavo nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                            Magia de 5º nível
                            Mestre do Campo
                            Magia de 6º nível
                            Mestre Caçador Supremo
                        `)
                break
        }
    } else if (nivel === 20) {
        switch (classe) {
            case "Bárbaro":
                alert(`
                            No vigésimo nível o Bárbaro possui as seguintes habilidades:
                            Fúria
                            Defesa sem Armadura
                            Ataque Descuidado
                            Sentido de Perigo
                            Caminho Primitivo
                            Ataque Extra
                            Movimento Rápido
                            Poder do Caminho Primitivo
                            Instinto Selvagem
                            Indomável
                            Totalmente Selvagem
                            Ataque Imparável
                            Maestria em Fúria
                            Fúria Brutal
                            Dominância Selvagem
                            Caminho do Berserker Aprimorado
                            Fúria Suprema
                            Força Primordial
                        `)
                break
            case "Bardo":
                alert(`
                            No vigésimo nível o Bardo possui as seguintes habilidades:
                            Conjuração
                            Inspiração de Bardo (d8)
                            Versatilidade
                            Canção de Descanso (d6)
                            Colégio do Bardo
                            Perícia
                            Fonte de Inspiração
                            Característica do Colégio
                            Magia Avançada
                            Inspirar Heroísmo
                            Magia de 6º nível
                            Inspirar Excelência
                            Conjuração Avançada
                            Melodia Suprema
                            Magia de 7º nível
                            Inspiração Suprema
                            Performance Lendária
                        `)
                break
            case "Bruxo":
                alert(`
                            No vigésimo nível o Bruxo possui as seguintes habilidades:
                            Patrono Transcendental
                            Magia de Pacto
                            Invocação Mística
                            Domínio de Pacto
                            Característica do Patrono
                            Invocação Avançada
                            Magia de 5º nível
                            Magia de 6º nível
                            Poder Arcano
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                            Invocação Suprema
                            Mestre dos Pactos
                        `)
                break
            case "Clérigo":
                alert(`
                            No vigésimo nível o Clérigo possui as seguintes habilidades:
                            Conjuração
                            Domínio Divino
                            Canalizar Divindade (2 usos)
                            Características de Domínio Divino
                            Magia de 5º nível
                            Domínio Aprimorado
                            Magia de 6º nível
                            Magia de 7º nível
                            Destruição Divina Aprimorada
                            Magia de 8º nível
                            Magia de 9º nível
                            Milagre Divino Supremo
                        `)
                break
            case "Druida":
                alert(`
                            No vigésimo nível o Druida possui as seguintes habilidades:
                            Druídico
                            Conjuração
                            Círculo Druídico
                            Forma Selvagem
                            Forma Selvagem Aprimorada
                            Característica do Círculo
                            Magia de 5º nível
                            Forma Selvagem Aprimorada (nova forma)
                            Magia de 6º nível
                            Magia de 7º nível
                            Forma Selvagem Superior
                            Magia de 8º nível
                            Magia de 9º nível
                            Forma Selvagem Suprema Suprema
                        `)
                break
            case "Feiticeiro":
                alert(`
                            No vigésimo nível o Feiticeiro possui as seguintes habilidades:
                            Conjuração
                            Origem de Feitiçaria
                            Fonte de Magia
                            Característica da Origem de Feitiçaria
                            Magia de 5º nível
                            Metamagia Aprimorada
                            Magia de 6º nível
                            Magia de 7º nível
                            Metamagia Avançada
                            Magia de 8º nível
                            Magia de 9º nível
                            Metamagia Suprema
                            Feitiçaria Suprema
                        `)
                break
            case "Guerreiro":
                alert(`
                            No vigésimo nível o Guerreiro possui as seguintes habilidades:
                            Estilo de Luta
                            Retomar o Fôlego
                            Surto de Ação (um uso)
                            Arquétipo Marcial
                            Ataque Extra
                            Característica do Arquétipo
                            Superioridade Marcial (se aplicável)
                            Ação Extra Aprimorada
                            Ataque Extra (2)
                            Ataque Extra Aprimorado
                            Mestre de Combate
                            Ataque Supremo
                            Ataque Imparável
                            Ataque Perfeito
                            Guerreiro Lendário
                        `)
                break
            case "Ladino":
                alert(`
                            No vigésimo nível o Ladino possui as seguintes habilidades:
                            Especialização
                            Ataque Furtivo (9d6)
                            Gíria de Ladrão
                            Ação Ardilosa
                            Arquétipo de Ladino
                            Esquiva Sobrenatural
                            Especialização adicional
                            Evasão
                            Ataque Furtivo Aprimorado
                            Maestria em Esquiva
                            Ataque Furtivo Supremo
                            Ladrão Lendário
                        `)
                break
            case "Mago":
                alert(`
                            No vigésimo nível o Mago possui as seguintes habilidades:
                            Conjuração
                            Recuperação Arcana
                            Tradição Arcana
                            Característica da Tradição Arcana
                            Magia de 5º nível
                            Especialização Arcana
                            Magia de 6º nível
                            Magia de 7º nível
                            Magia de 8º nível
                            Magia de 9º nível
                            Mestre da Magia Suprema
                        `)
                break
            case "Monge":
                alert(`
                            No vigésimo nível o Monge possui as seguintes habilidades:
                            Defesa sem Armadura
                            Artes Marciais
                            Chi
                            Movimento sem Armadura
                            Tradição Monástica
                            Defletir Projéteis
                            Ataque Extra
                            Movimento sem Armadura Aprimorado
                            Ataques Desarmados contam como Mágicos
                            Poder da Tradição Monástica
                            Passo sem Traço
                            Defesa Superior
                            Movimento Veloz
                            Golpe Tranquilo
                            Ataque do Ki Aprimorado
                            Poder Supremo do Ki
                            Ataque Imparável
                            Maestria Monástica
                            Chi Supremo
                            Monge Lendário
                        `)
                break
            case "Paladino":
                alert(`
                            No vigésimo nível o Paladino possui as seguintes habilidades:
                            Sentido Divino
                            Cura pelas Mãos
                            Estilo de Luta
                            Conjuração
                            Destruição Divina
                            Juramento Sagrado
                            Saúde Divina
                            Ataque Extra
                            Aura de Proteção
                            Aura do Juramento
                            Magia de 3º nível
                            Aura Aprimorada
                            Magia de 4º nível
                            Magia de 5º nível
                            Aura Suprema
                            Magia de 6º nível
                            Aura Celestial
                            Aura de Proteção Suprema
                            Paladino Lendário
                        `)
                break
            case "Patrulheiro":
                alert(`
                            No vigésimo nível o Patrulheiro possui as seguintes habilidades:
                            Inimigo Favorito
                            Explorador Natural
                            Estilo de Luta
                            Conjuração
                            Conclave do Patrulheiro
                            Consciência Primeva
                            Ataque Extra
                            Característica do Conclave
                            Magia de 3º nível
                            Espírito Guardião
                            Magia de 4º nível
                            Magia de 5º nível
                            Mestre do Campo
                            Magia de 6º nível
                            Mestre Caçador Supremo
                            Patrulheiro Lendário
                        `)
                break
        }
    } else if (nivel === 4) {
        let adicionar = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
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
    } else if (nivel === 8) {
        let adicionar = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
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
    } else if (nivel === 12) {
        let adicionar = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
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
    } else if (nivel === 16) {
        let adicionar = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
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
    } else if (nivel === 19) {
        let adicionar = prompt("Você tem 2 valores para colocar em um ou dois atributos. 1.Um atribtuo 2.Dois atributos")
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