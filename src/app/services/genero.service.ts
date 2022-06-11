import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Genero } from '../models/genero';
import { delay, map } from 'rxjs/operators';
import { Livro } from '../models/livro';

const Generos = [
  {
    'codigo': 12362,
    'nome'  : 'Ação',
    'livros': [
      {
        'nome':'Cronicas de Nárnia',
        'autor':'Clive Staples Lewis',
        'data': new Date(),
        'resumo': 'Resumo do livroViagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é "O leão, a feiticeira e o guarda-roupa", escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como "As crônicas de Nárnia". Nos últimos cinqüenta anos, "As crônicas de Nárnia" transcenderam o gênero da fantasia para se tornar parte do cânone da literaturaclássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações. Esta edição apresenta todas as sete crônicas integralmente, num único volume. Os livros são apresentados de acordo com a ordem de preferência de Lewis, cada capítulo com uma ilustração do artista original, Pauline Baynes. Enganosamente simples e direta, "As crônicas de Nárnia" continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades.',
        'imagem': '../assets/images/cronicas-narnia.jpg'
      },
      {
        'nome':'Jogos Vorazes',
        'autor':'Suzanne Collins',
        'data': new Date(2012,2,15),
        'resumo': 'Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto. Onze tiros no primeiro dia. Treze jovens restaram, entre eles, Katniss. Para quem os tiros de canhão serão no dia seguinte?... Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte! Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade. Até onde Katniss estará disposta a ir para ser vitoriosa nos Jogos Vorazes? Best-seller da Veja, a trilogia Jogos Vorazes foi adaptada para o cinema e estrelada por Jennifer Lawrence.',
        'imagem': '../assets/images/jogos-vorazes.jpg'
      }
    ]
  },
  {
    'codigo': 12362,
    'nome'  : 'Suspense',
    'livros': [
      {
        'nome':'A Garota do Lago',
        'autor':'Charlie Donlea',
        'data': new Date(),
        'resumo': 'Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.',
        'imagem': '../assets/images/garota-do-lago.jpg'
      },
      {
        'nome':'Bird Box',
        'autor':'Josh Malerman',
        'data': new Date(),
        'resumo': 'Quatro anos depois de as mortes terem começado, há poucos sobreviventes em Michigan. Malorie e seus dois filhos pequenos estão entre eles. O trio faz parte do grupo que tenta resistir em um mundo no qual abrir os olhos pode ser fatal. Vivendo em uma casa abandonada, Malorie e os filhos não sabem o que se passa do lado de fora. Sempre com as janelas e portas cobertas e sem comunicação com o exterior, o local é uma área isolada no meio do caos. Até o momento em que uma misteriosa neblina atinge a região e Malorie toma uma decisão que adiou por muito tempo. Após quatro anos trancados, Malorie e as crianças fogem da casa em um barco a remo na esperança de encontrar um lugar distante do surto que matou todos ao seu redor. De olhos tapados, os três encaram uma viagem assustadora rumo ao desconhecido.',
        'imagem': '../assets/images/bird-box.jpg'
      },
      {
        'nome':'Colecionador de Ossos',
        'autor':'Jeffery Deaver',
        'data': new Date(),
        'resumo': 'Lincoln Rhyme é um criminologista brilhante, um gênio da investigação médica forense. Mas sua carreira é brutalmente interrompida por um acidente que o deixa tetraplégico, preso a uma cama. Seu isolamento do mundo termina quando um assassino começa a espalhar vítimas mutiladas pela cidade de Nova York e Rhyme é o único que pode detê-lo.        Com a ajuda da bela detetive Amelia Sachs, eles tentam desvendar o labirinto de pistas para evitar o próximo crime hediondo do Colecionador de Ossos. Uma dupla que se completa e brilha neste thriller inteligente e empolgante que foi levado às telas em 1999 sob a direção de Phillip Noyce, num filme estrelado por Denzel Washington e Angelina Jolie.',
        'imagem': '../assets/images/colecionador-ossos.jpg'
      }
    ]
  },
  {
    'codigo': 12362,
    'nome'  : 'Romance',
    'livros': [
      {
        'nome':'A culpa é das Estrelas',
        'autor':'John Green',
        'data': new Date(2014,10,27),
        'resumo': 'Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante ― o que lhe dá a promessa de viver mais alguns anos ―, o último capítulo de sua história foi escrito no momento do diagnóstico. Mas em todo bom enredo há uma reviravolta, e a de Hazel se chama Augustus Waters, um garoto bonito que certo dia aparece no Grupo de Apoio a Crianças com Câncer. Juntos, os dois vão preencher o pequeno infinito das páginas em branco de suas vidas. Inspirador, corajoso, irreverente e brutal, A culpa é das estrelas é a obra mais ambiciosa e emocionante de John Green, sobre a alegria e a tragédia que é viver e amar.',
        'imagem': '../assets/images/culpa-estrelas.jpg'
      },
      {
        'nome':'Os Miseráveis',
        'autor':'Victor Hugo',
        'data': new Date(),
        'resumo': 'Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.',
        'imagem': '../assets/images/os-miseraveis.jpg'
      }
    ]
  },
  {
    'codigo': 12362,
    'nome'  : 'Ficção Científica',
    'livros': [
      {
        'nome':'O guia do mochileiro das Galáxias',
        'autor':'Douglas Adams',
        'data': new Date(),
        'resumo': 'Considerado um dos maiores clássicos da literatura de ficção científica, O Guia do Mochileiro das Galáxias vem encantando gerações de leitores ao redor do mundo com seu humor afiado. Este é o primeiro título da famosa série escrita por Douglas Adams, que conta as aventuras espaciais do inglês Arthur Dent e de seu amigo Ford Prefect. A dupla escapa da destruição da Terra pegando carona numa nave alienígena, graças aos conhecimentos de Prefect, um E.T. que vivia disfarçado de ator desempregado enquanto fazia pesquisa de campo para a nova edição do Guia do Mochileiro das Galáxias, o melhor guia de viagens interplanetário. Mestre da sátira, Douglas Adams cria personagens inesquecíveis e situações mirabolantes para debochar da burocracia, dos políticos, da "alta cultura" e de diversas instituições atuais. Seu livro, que trata em última instância da busca do sentido da vida, não só diverte como também faz pensar.',
        'imagem': '../assets/images/mochileiro.jpg'
      },
      {
        'nome':'A Guerra dos Mundos',
        'autor':'Herbert George Wells',
        'data': new Date(),
        'resumo': 'Eles vieram do espaço. Eles vieram de Marte. Com tripés biomecânicos gigantes, querem conquistar a Terra e manter os humanos como escravos. Nenhuma tecnologia terrestre parece ser capaz de conter a expansão do terror pelo planeta. É o começo da guerra mais importante da história. Como a humanidade poderá resistir à investida de um potencial bélico tão superior? Publicado pela primeira vez em 1898, A guerra dos mundos aterrorizou e divertiu muitas gerações de leitores. Esta edição especial contém as ilustrações originais criadas em 1906 por Henrique Alvim Corrêa, brasileiro radicado na Bélgica. Conta também com um prefácio escrito por Braulio Tavares, uma introdução de Brian Aldiss, membro da H. G. Wells Society, e uma entrevista com H. G. Wells e o famoso cineasta Orson Welles - responsável pelo sucesso radiofônico de A guerra dos mundos em 1938 -, que fazem desta a edição definitiva para fãs de Wells.',
        'imagem': '../assets/images/guerra-mundos.jpg'
      }
    ]
  }
  
  
];

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor() { }

  public get(): Observable<Genero[]> {
    return of(Generos).pipe(
      delay(1000),
      map(arr => {

        return arr.map(gen => {
          return new Genero(
            gen.codigo, 
            gen.nome,
            gen.livros.map(l => new Livro(
              l.nome, 
              l.autor, l.data, l.resumo, l.imagem))
          );
        });
      }),
      
    );

  }
}
