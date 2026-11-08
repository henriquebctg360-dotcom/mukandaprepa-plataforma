// Artigos do site — fonte única (página Artigos, página inicial e painel).

export const MATERIAS = ['Matemática', 'Física', 'Química', 'Biologia', 'Português', 'História'];
export const NIVEIS = ['Básico', 'Intermédio', 'Avançado'];

// ESP-19 (08 Nov 2026): os artigos estão escondidos do site enquanto os
// professores não escreverem os seus. Saíram os doze títulos de exemplo —
// anunciar artigos que não existem não ajuda ninguém.
//
// A página /artigos continua a funcionar por link directo, com o
// artigo-modelo, porque é o que o corpo docente recebeu no seu documento.
// Escondido: a entrada "Artigos" no menu e no rodapé, a secção da página
// inicial e o separador do Blog.
//
// Quando os artigos chegarem: pôr isto a true e acrescentá-los a ARTIGOS.
export const ARTIGOS_VISIVEIS = false;

// ESP-15 (09 Out 2026): artigo-modelo pedido pelos professores. É o primeiro
// artigo real do site e serve de estrutura para todos os outros:
//
//   1. Resumo de duas linhas, logo a seguir ao título.
//   2. Um exemplo concreto, do dia-a-dia, que põe toda a gente no mesmo ponto
//      de partida — e que depois serve para explicar as definições.
//   3. As definições, apoiadas nesse mesmo exemplo.
//   4. As propriedades e as regras que é preciso saber antes de resolver.
//   5. O passo a passo, com exemplos resolvidos, os erros mais comuns e
//      exercícios de escolha múltipla — duas equações e um problema, com
//      quatro opções cada e SEM a resposta certa, para o estudante trabalhar
//      e levar as dúvidas para a aula de correcção.
//
// COMO ESCREVER O `corpo`
//   Parágrafos separados por uma linha em branco.
//   "## " no início da linha  → subtítulo
//   "- " no início da linha   → item de lista
//   "1. " no início da linha  → lista numerada (passos)
//   "> " no início da linha   → caixa de destaque (regra, aviso)
//
// Os artigos marcados com `exemplo: true` são só títulos, à espera do texto
// dos professores. Quando o texto chegar, acrescenta-se `resumo` e `corpo` e
// tira-se o `exemplo`.

const MODELO = `## 1. Começa por aqui: um problema da papelaria

A Ndala foi à papelaria comprar material para as aulas. Levou 3 cadernos iguais e uma caneta. A caneta custou 500 kwanzas e, no fim, pagou 2000 kwanzas por tudo.

Quanto custou cada caderno?

Não sabemos o preço do caderno. Vamos então chamar-lhe x. O que sabemos é isto:

> 3x + 500 = 2000

Três cadernos, mais a caneta de 500, dá 2000. Esta igualdade é uma equação do 1.º grau — e é com ela que vamos trabalhar o artigo todo.

## 2. As partes de uma equação

Olha outra vez para a nossa equação e repara em cada pedaço:

- Equação: uma igualdade com uma letra cujo valor não conhecemos. Tem sempre um sinal de igual.
- Incógnita: a letra desconhecida. Na nossa equação é o x, o preço do caderno.
- 1.º membro: o que está antes do sinal de igual, 3x + 500. 2.º membro: o que está depois, 2000.
- Termos: as parcelas de cada membro — 3x, 500 e 2000.
- Coeficiente: o número que multiplica a incógnita. Aqui é 3, porque são 3 cadernos.
- Termo independente: o termo que não tem incógnita — o 500 e o 2000.
- Grau: o maior expoente da incógnita. Como x é o mesmo que x¹, a equação é do 1.º grau.
- Solução, ou raiz: o valor que torna a igualdade verdadeira. Vamos descobri-lo já a seguir.

Qualquer equação do 1.º grau pode escrever-se na forma ax + b = 0, em que a e b são números e a é diferente de zero. Se a fosse zero, a incógnita desaparecia e já não havia equação do 1.º grau.

## 3. As duas regras que seguram tudo

Resolver uma equação é ir mudando a equação sem estragar a igualdade, até a incógnita ficar sozinha de um lado. Para isso há duas regras, e só duas.

- Princípio aditivo: pode somar-se ou subtrair-se o mesmo número aos dois membros.
- Princípio multiplicativo: pode multiplicar-se ou dividir-se os dois membros pelo mesmo número, desde que esse número não seja zero.

> Regra de ouro: o que se faz a um membro faz-se ao outro. Pensa numa balança com dois pratos. Se tiras 500 de um prato, tens de tirar 500 do outro, senão a balança desequilibra-se.

Aquilo a que muitos professores chamam "passar para o outro lado" é só um atalho destas duas regras:

- Um termo que está a somar passa para o outro membro a subtrair, e ao contrário.
- Um número que está a multiplicar passa para o outro membro a dividir, e ao contrário.

Mais duas coisas que convém saber:

- Uma equação do 1.º grau com o coeficiente diferente de zero tem sempre uma e uma só solução.
- Há dois casos estranhos que podem aparecer no exame. Se chegares a 0x = 0, qualquer número serve e a equação diz-se indeterminada. Se chegares a 0x = 5, nenhum número serve e a equação é impossível.

## 4. O passo a passo

1. Tira os denominadores e os parênteses, se existirem.
2. Junta os termos com incógnita num membro e os números no outro.
3. Soma os termos semelhantes de cada lado.
4. Divide os dois membros pelo coeficiente da incógnita.
5. Verifica a solução na equação inicial.

## Exemplo 1: o problema da papelaria

Equação: 3x + 500 = 2000

1. Não há denominadores nem parênteses. Avançamos.
2. O 500 está a somar no 1.º membro, por isso passa para o 2.º a subtrair: 3x = 2000 − 500.
3. Somamos: 3x = 1500.
4. O 3 está a multiplicar, por isso passa a dividir: x = 1500 ÷ 3, ou seja, x = 500.
5. Verificamos na equação inicial: 3 × 500 + 500 = 1500 + 500 = 2000. Certo.

Cada caderno custou 500 kwanzas.

## Exemplo 2: com parênteses e denominador

Equação: (x + 1) ÷ 2 = x − 4

1. Multiplicamos os dois membros por 2, para tirar o denominador: x + 1 = 2(x − 4). Atenção: o 2 multiplica tudo o que está dentro dos parênteses, por isso x + 1 = 2x − 8.
2. Passamos o 2x para o 1.º membro e o 1 para o 2.º: x − 2x = −8 − 1.
3. Somamos os termos semelhantes: −x = −9.
4. Dividimos os dois membros por −1: x = 9.
5. Verificamos: (9 + 1) ÷ 2 = 5 e 9 − 4 = 5. Os dois membros dão 5. Certo.

## Os erros que mais tiram pontos

- Mudar um termo de membro e esquecer de lhe mudar o sinal.
- Multiplicar os dois membros por um número e esquecer um dos termos. Se multiplicas, multiplicas tudo.
- Dividir só um termo pelo coeficiente, em vez de dividir o membro inteiro.
- Trocar o sinal quando o coeficiente é negativo. Se chegas a −x = −9, então x = 9, e não x = −9.
- Não verificar a solução no fim. São trinta segundos que salvam a pergunta toda.

## Agora experimenta tu

Resolve cada uma no caderno, seguindo os cinco passos, e só depois escolhe a opção.

Questão 1. Resolve a equação: 5x − 12 = 3

- A) x = −1,8
- B) x = −3
- C) x = 3
- D) x = 15

Questão 2. Resolve a equação: 4(x − 2) = 2x + 6

- A) x = 7
- B) x = 4
- C) x = −1
- D) x = 14

Questão 3. Numa turma, o número de rapazes é o dobro do número de raparigas. Ao todo são 45 estudantes. Quantas raparigas tem a turma?

- A) 20 raparigas
- B) 22 raparigas
- C) 30 raparigas
- D) 15 raparigas

As respostas certas são discutidas nas aulas de correcção. Leva as tuas dúvidas para lá.

## O que costuma cair no exame de acesso

As equações do 1.º grau raramente aparecem sozinhas. Aparecem escondidas dentro de problemas — preços, distâncias, idades, percentagens — e dentro de outras matérias, como os sistemas de equações e a geometria. Quem traduz o enunciado para uma equação, e depois segue os cinco passos, resolve.`;

export const ARTIGOS = [
  {
    titulo: 'Como resolver a equação do 1.º grau',
    materia: 'Matemática',
    nivel: 'Básico',
    data: '09 Out 2026',
    autor: 'Equipa Pedagógica MUKANDA PREPA',
    resumo: 'Uma equação do 1.º grau é uma igualdade com uma letra escondida, e resolvê-la é descobrir essa letra. Partimos de um problema da papelaria, vemos as regras e fazemos o passo a passo, com exemplos resolvidos e os erros mais comuns.',
    corpo: MODELO,
  },
];

// Os três mais recentes, para a página inicial.
export const ARTIGOS_RECENTES = ARTIGOS.slice(0, 3);
