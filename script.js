/* ==========================================================================
   1. CATÁLOGO DE FILMES E CARROSSEL (6s)
   ========================================================================== */
(function () {
  var FILMES = [
    {
      titulo: 'O Poderoso Chefão',
      ano: 1972,
      diretor: 'Francis Ford Coppola',
      imagem: 'img/poderoso-chefao2-cke.webp',
      sinopse: 'Don Vito Corleone, chefe de uma das cinco famílias mafiosas de Nova York, sofre um atentado. Seu filho mais novo, Michael, que queria ficar longe dos negócios da família, acaba puxado para dentro deles.'
    },
    {
      titulo: 'O Poderoso Chefão: Parte II',
      ano: 1974,
      diretor: 'Francis Ford Coppola',
      imagem: 'img/poderoso-chefao3-cke.webp.webp',
      sinopse: 'Michael Corleone tenta expandir e legitimar os negócios da família. Em paralelo, o filme volta no tempo e mostra a juventude de Vito, da Sicília à chegada a Nova York.'
    },
    {
      titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
      ano: 2001,
      diretor: 'Peter Jackson',
      imagem: 'img/-O-Senhor-dos-Anéis-A-Sociedade-doAnel.webp',
      sinopse: 'O hobbit Frodo herda um anel capaz de destruir o mundo. Junto com oito companheiros, ele sai do Condado numa viagem até Mordor para destruí-lo.'
    },
    {
      titulo: 'O Senhor dos Anéis: As Duas Torres',
      ano: 2002,
      diretor: 'Peter Jackson',
      imagem: 'img/senhor-dos-aneis-duas-torres.webp',
      sinopse: 'A Sociedade se separa. Frodo e Sam seguem para Mordor guiados por Gollum, enquanto Aragorn, Legolas e Gimli ajudam Rohan na batalha do Abismo de Helm.'
    },
    {
      titulo: 'O Senhor dos Anéis: O Retorno do Rei',
      ano: 2003,
      diretor: 'Peter Jackson',
      imagem: 'img/senhor-dos-aneis-retorno-do-rei.webp',
      sinopse: 'Gandalf e Aragorn lideram a defesa de Gondor contra o exército de Sauron, enquanto Frodo e Sam chegam à Montanha da Perdição para tentar destruir o Anel.'
    },
    {
      titulo: 'Batman: O Cavaleiro das Trevas',
      ano: 2008,
      diretor: 'Christopher Nolan',
      imagem: 'img/batman-cavaleiro-das-trevas.webp',
      sinopse: 'Batman, o tenente Gordon e o promotor Harvey Dent tentam acabar com o crime em Gotham. Então surge o Coringa, que quer provar que a cidade pode ser levada ao caos.'
    },
    {
      titulo: 'A Lista de Schindler',
      ano: 1993,
      diretor: 'Steven Spielberg',
      imagem: 'img/lista-de-schindler.webp',
      sinopse: 'Na Polônia ocupada pelos nazistas, o empresário Oskar Schindler começa a empregar judeus em sua fábrica e passa a usar sua fortuna para salvar mais de mil deles.'
    },
    {
      titulo: 'Clube da Luta',
      ano: 1999,
      diretor: 'David Fincher',
      imagem: 'img/clube-da-luta.webp',
      sinopse: 'Um funcionário com insônia conhece o vendedor de sabonetes Tyler Durden. Os dois criam um clube de luta clandestino que logo sai do controle.'
    },
    {
      titulo: 'Matrix',
      ano: 1999,
      diretor: 'Lilly e Lana Wachowski',
      imagem: 'img/matrix.webp',
      sinopse: 'O hacker Neo descobre que a realidade em que vive é uma simulação criada por máquinas e se junta à rebelião para libertar a humanidade.'
    },
    {
      titulo: 'Interestelar',
      ano: 2014,
      diretor: 'Christopher Nolan',
      imagem: 'img/interestelar.webp',
      sinopse: 'Com a Terra perdendo a capacidade de produzir alimentos, um ex-piloto da NASA parte numa missão por um buraco de minhoca em busca de um novo planeta para a humanidade.'
    },
    {
      titulo: 'O Silêncio dos Inocentes',
      ano: 1991,
      diretor: 'Jonathan Demme',
      imagem: 'img/silencio-dos-inocentes.webp',
      sinopse: 'A agente do FBI Clarice Starling pede ajuda ao canibal Hannibal Lecter, que está preso, para encontrar um serial killer conhecido como Buffalo Bill.'
    },
    {
      titulo: 'Cidade de Deus',
      ano: 2002,
      diretor: 'Fernando Meirelles e Kátia Lund',
      imagem: 'img/cidade-de-deus.webp',
      sinopse: 'De 1960 a 1980, acompanha o crescimento do crime numa favela do Rio de Janeiro pelos olhos de Buscapé, um jovem que sonha em ser fotógrafo.'
    },
    {
      titulo: 'Parasita',
      ano: 2019,
      diretor: 'Bong Joon-ho',
      imagem: 'img/parasita.webp',
      sinopse: 'A família Kim, pobre e desempregada, entra aos poucos na vida da rica família Park usando identidades falsas. O plano começa a sair do controle.'
    },
    {
      titulo: 'Kill Bill: Volume 1',
      ano: 2003,
      diretor: 'Quentin Tarantino',
      imagem: 'img/kill-bill-volume-1.webp',
      sinopse: 'Uma ex-assassina, traída no dia do próprio casamento, acorda após anos em coma e sai em busca de vingança contra o grupo que tentou matá-la.'
    },
    {
      titulo: 'Túmulo dos Vagalumes',
      ano: 1988,
      diretor: 'Isao Takahata',
      imagem: 'img/tumulo-dos-vagalumes.webp',
      sinopse: 'No Japão, nos últimos meses da Segunda Guerra, o adolescente Seita tenta sobreviver com a irmã mais nova, Setsuko, depois que os bombardeios destroem a cidade.'
    },
    {
      titulo: 'Duna: Parte Um',
      ano: 2021,
      diretor: 'Denis Villeneuve',
      imagem: 'img/duna-parte-um.webp',
      sinopse: 'Paul Atreides viaja com a família para Arrakis, um planeta desértico onde existe a especiaria, o recurso mais valioso do universo. Lá, a casa Atreides cai numa armadilha.'
    },
    {
      titulo: 'Duna: Parte Dois',
      ano: 2024,
      diretor: 'Denis Villeneuve',
      imagem: 'img/duna-parte-dois.webp',
      sinopse: 'Paul se une aos Fremen para vingar a família e enfrentar quem a destruiu, enquanto precisa escolher entre o amor e o destino que enxerga para o universo.'
    }
  ];

  var chipsEl = document.getElementById('chips');
  var tituloEl = document.getElementById('ft');
  var metaEl = document.getElementById('fm');
  var sinopseEl = document.getElementById('fs');

  if (chipsEl) {
    chipsEl.innerHTML = FILMES.map(function (filme, indice) {
      return '<button type="button" role="tab" data-i="' + indice + '">' + filme.titulo + '</button>';
    }).join('');

    function showImg(filme) {
      var imgEl = document.querySelector('#fstill img');
      var quadroEl = document.getElementById('fstill');
      var avisoEl = document.querySelector('#fstill .soon small');

      quadroEl.classList.remove('has-img');
      if (avisoEl) avisoEl.textContent = 'Imagem em breve';

      if (!imgEl) {
        if (avisoEl) avisoEl.textContent = 'Falta o <img> dentro do quadro da imagem no index.html';
        return;
      }

      imgEl.hidden = true;
      if (!filme.imagem) return;

      imgEl.onload = function () {
        imgEl.hidden = false;
        quadroEl.classList.add('has-img');
      };

      imgEl.onerror = function () {
        imgEl.hidden = true;
        quadroEl.classList.remove('has-img');
        if (avisoEl) avisoEl.textContent = 'Arquivo não encontrado: ' + filme.imagem;
        console.warn('Imagem não encontrada: ' + filme.imagem);
      };

      imgEl.alt = 'Imagem de ' + filme.titulo;
      imgEl.src = filme.imagem;
    }

    function show(indice) {
      var filme = FILMES[indice];
      tituloEl.textContent = filme.titulo;
      metaEl.textContent = filme.ano + ' · ' + filme.diretor;
      sinopseEl.textContent = filme.sinopse;
      cur = indice;
      showImg(filme);

      [].forEach.call(chipsEl.children, function (botao, j) {
        var selecionado = j === indice;
        botao.setAttribute('aria-selected', selecionado);
        if (selecionado) {
          chipsEl.scrollTo({
            left: botao.getBoundingClientRect().left - chipsEl.getBoundingClientRect().left + chipsEl.scrollLeft - (chipsEl.clientWidth - botao.offsetWidth) / 2,
            behavior: 'smooth'
          });
        }
      });
    }

    chipsEl.addEventListener('click', function (evento) {
      var botao = evento.target.closest('button');
      if (botao) {
        show(+botao.dataset.i);
        play();
      }
    });

    var cur = 0;
    var tm;
    var hold = false;

    function bar() {
      var quoteBox = metaEl.parentNode;
      quoteBox.classList.remove('go');
      void quoteBox.offsetWidth;
      if (!hold && !document.hidden) quoteBox.classList.add('go');
    }

    function play() {
      clearInterval(tm);
      bar();
      if (hold || document.hidden) return;
      tm = setInterval(function () {
        show((cur + 1) % FILMES.length);
        bar();
      }, 6000);
    }

    document.addEventListener('visibilitychange', play);
    show(0);
    play();
  }
})();

/* ==========================================================================
   2. EXERCÍCIOS INTERATIVOS EM C
   ========================================================================== */
(function () {
  var PROGRAMAS = [
    {
      t: '1. Média das notas',
      k: 'f',
      i: ['Nota 1', 'Nota 2', 'Nota 3'],
      c: String.raw`#include <stdio.h>

int main() {
    float n1, n2, n3, media;
    scanf("%f %f %f", &n1, &n2, &n3);
    media = (n1 + n2 + n3) / 3;
    if (media >= 6)
        printf("Media %.1f - Aprovado\n", media);
    else
        printf("Media %.1f - Reprovado\n", media);
    return 0;
}`,
      r: function (v) {
        var media = (v[0] + v[1] + v[2]) / 3;
        return 'Media ' + media.toFixed(1) + (media >= 6 ? ' - Aprovado' : ' - Reprovado');
      }
    },
    {
      t: '2. Par ou ímpar',
      k: 'i',
      i: ['Digite um número'],
      c: String.raw`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("%d é par\n", n);
    else
        printf("%d é impar\n", n);
    return 0;
}`,
      r: function (v) {
        return v[0] + (v[0] % 2 === 0 ? ' é par' : ' é impar');
      }
    },
    {
      t: '3. Maior de três números',
      k: 'i',
      i: ['A', 'B', 'C'],
      c: String.raw`#include <stdio.h>

int main() {
    int a, b, c, maior;
    scanf("%d %d %d", &a, &b, &c);
    maior = a;
    if (b > maior) maior = b;
    if (c > maior) maior = c;
    printf("Maior: %d\n", maior);
    return 0;
}`,
      r: function (v) {
        return 'Maior: ' + Math.max(v[0], v[1], v[2]);
      }
    },
    {
      t: '4. Fatorial',
      k: 'i',
      i: ['0 a 20'],
      c: String.raw`#include <stdio.h>

int main() {
    int n, i;
    long long fat = 1;
    scanf("%d", &n);
    for (i = 2; i <= n; i++)
        fat = fat * i;
    printf("%d! = %lld\n", n, fat);
    return 0;
}`,
      r: function (v) {
        var n = v[0];
        if (n < 0 || n > 20) return 'Digite um inteiro de 0 a 20.';
        var fat = BigInt(1);
        for (var i = 2; i <= n; i++) fat *= BigInt(i);
        return n + '! = ' + fat;
      }
    },
    {
      t: '5. Tabuada',
      k: 'i',
      i: ['Número'],
      c: String.raw`#include <stdio.h>

int main() {
    int n, i;
    scanf("%d", &n);
    for (i = 1; i <= 10; i++)
        printf("%d x %d = %d\n", n, i, n * i);
    return 0;
}`,
      r: function (v) {
        var n = v[0];
        var linhas = [];
        for (var i = 1; i <= 10; i++) linhas.push(n + ' x ' + i + ' = ' + n * i);
        return linhas.join('\n');
      }
    }
  ];

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function hl(s) {
    return esc(s).replace(
      /(#include|&lt;stdio\.h&gt;)|("(?:[^"\\]|\\.)*")|\b(if|else|for|return)\b|\b(int|float|long)\b|\b(printf|scanf|main)\b/g,
      function (m, a, b, c, d) {
        return '<span class="' + (a ? (m.charAt(0) === '#' ? 'k' : 'n') : b ? 'n' : d ? 't' : 'k') + '">' + m + '</span>';
      }
    );
  }

  var container = document.getElementById('progs');

  if (container) {
    container.innerHTML = PROGRAMAS.map(function (prog, indice) {
      var inputsHtml = prog.i.map(function (placeholder) {
        return '<input inputmode="decimal" autocomplete="off" placeholder="' + placeholder + '" aria-label="' + placeholder + '">';
      }).join('');

      return (
        '<article class="card" data-i="' + indice + '">' +
          '<h3>' + prog.t + '</h3>' +
          '<div class="term"><pre>' + hl(prog.c) + '</pre></div>' +
          '<div class="run">' +
            inputsHtml +
            '<button class="btn pri" type="button">Executar</button>' +
          '</div>' +
          '<div class="out" aria-live="polite">&gt; aguardando entrada</div>' +
        '</article>'
      );
    }).join('');

    function executar(card) {
      var prog = PROGRAMAS[card.dataset.i];
      var saida = card.querySelector('.out');
      var valores = [].map.call(card.querySelectorAll('input'), function (campo) {
        return campo.value.trim().replace(',', '.');
      });

      var invalido = valores.some(function (val) {
        return val === '' || !isFinite(Number(val)) || (prog.k === 'i' && !/^-?\d+$/.test(val));
      });

      saida.textContent = invalido
        ? '> ' + (prog.k === 'i' ? 'Digite apenas números inteiros.' : 'Digite apenas números.')
        : '> ' + prog.r(valores.map(Number));
    }

    container.addEventListener('click', function (evento) {
      var botao = evento.target.closest('button');
      if (botao) executar(botao.closest('.card'));
    });

    container.addEventListener('keydown', function (evento) {
      if (evento.key === 'Enter' && evento.target.tagName === 'INPUT') {
        executar(evento.target.closest('.card'));
      }
    });
  }
})();

/* ==========================================================================
   3. DESTAQUE NA BARRA DE NAVEGAÇÃO MOBILE
   ========================================================================== */
(function () {
  var links = document.querySelectorAll('.bottom a');
  var secoesIds = ['inicio', 'codigos', 'cinema', 'contato'];

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        var idx = secoesIds.indexOf(entrada.target.id);
        links.forEach(function (link, j) {
          link.classList.toggle('on', idx === j);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  secoesIds.forEach(function (id) {
    var sec = document.getElementById(id);
    if (sec) observer.observe(sec);
  });
})();