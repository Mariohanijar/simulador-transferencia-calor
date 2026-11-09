# ThermoLab — Simulador de transferência de calor
Projeto acadêmico de Fenômenos de Transporte — Engenharia da Computação, CESUPA.
Autor: Mario Henrique Santos Anijar.

## Executar
Baixe e extraia o projeto. Abra `index.html` no Chrome, Edge ou Firefox. Mantenha os três arquivos na mesma pasta. Funciona sem instalação, internet ou banco de dados. O código usa HTML, CSS, JavaScript e SVG, sem bibliotecas externas.

## Funcionalidades
- Condução em placa plana: lei de Fourier e perfil de temperatura.
- Convecção: evolução temporal pela solução de capacidade concentrada.
- Radiação: Stefan–Boltzmann e evolução temporal por RK4.
- Dilatação linear: variação e comprimento final.
- Entradas editáveis com unidades e validação, gráficos, tabela, exportação CSV e impressão.
- Quatro exemplos prontos, fórmulas, hipóteses e roteiro na própria tela.

## Apresentar
1. Explique que cada módulo isola um fenômeno e usa modelos didáticos.
2. Placa aquecida: execute o exemplo, anote a potência, selecione aço e simule. Com alumínio: 307500 W; com aço: 75000 W. As temperaturas das faces são mantidas constantes.
3. Resfriamento no ar: execute com h=10 e depois h=50. O aumento da troca de calor acelera o resfriamento. Com h=10, τ=900 s e T(3600 s)≈26,1905 °C.
4. Radiação: compare ε=0,9 e ε=0,1. A superfície mais emissiva troca calor mais intensamente. Kelvin é usado nas potências de quarta ordem.
5. Dilatação: barra de alumínio de 2 m, 20 a 100 °C: ΔL=3,68 mm e comprimento final=2,00368 m. O gráfico representa o comprimento adicional.
6. Mostre entrada de dados, resultados, gráfico, tabela e CSV. São pelo menos três situações diferentes, além da demonstração de dilatação.

## Modelos e limitações
Condução 1D permanente, sem geração interna; propriedades constantes. Convecção e radiação usam temperatura uniforme no objeto. Para convecção, a validade física normalmente exige Bi<0,1; sem volume/geometria, o app não valida esse critério. Radiação considera grande vizinhança isotérmica e fator de visão unitário. Não há mudanças de fase ou efeitos de restrição mecânica. Propriedades aproximadas, não válidas universalmente em toda a faixa dos campos. O coeficiente h e a emissividade devem ser escolhidos conforme o caso físico.

Referências conceituais: Incropera et al., Fundamentos de Transferência de Calor e de Massa; Çengel e Ghajar, Transferência de Calor e Massa. Confirme as propriedades com a tabela adotada pelo professor.

## Organização
- `index.html`: interface, estilos e informações didáticas.
- `modelos.js`: fórmulas e integração numérica.
- `app.js`: entradas, resultados, gráficos e exportação.

## GitHub
Crie o repositório `simulador-transferencia-calor`, use Add file → Upload files e envie os arquivos extraídos. Para hospedar com GitHub Pages: Settings → Pages → Deploy from a branch → main → /(root). Abra a URL informada pelo GitHub após concluir a publicação.

## Verificação dos modelos
Com Node.js instalado: `node verificar.cjs`. O script confere resultados de referência, equilíbrio térmico, emissividade zero e contração.
