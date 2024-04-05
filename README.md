# Geração de PDF Automático

Este é um script simples para adicionar funcionalidade de geração de PDF automático a uma página HTML. Ele adiciona três botões à tela: "Printar tela", "Gerar PDF" e "Gerar PDF automático". O botão "Printar tela" captura a tela atual do curso, enquanto os outros dois botões geram PDFs com as telas capturadas.

## Como Utilizar

### 1. Importação de Bibliotecas

Certifique-se de importar as seguintes bibliotecas em seu arquivo HTML:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
```

### 2. Importação do Script
Importe o arquivo criarPDF.js no seu arquivo index.html.

### 3. Funcionalidades
Após a importação das bibliotecas e do script, três botões serão adicionados à tela:

Printar tela: Este botão permite capturar a tela atual do curso. Você pode clicar neste botão para capturar as telas desejadas.

Gerar PDF: Após capturar as telas desejadas, clique neste botão para gerar um PDF contendo as telas capturadas.

Gerar PDF automático: Este botão permite gerar automaticamente um PDF contendo todas as telas do curso.

Passos Detalhados
Importação de Bibliotecas:

Certifique-se de que os links para as bibliotecas jQuery, jsPDF e dom-to-image estejam presentes em seu arquivo HTML.
Importação do Script:

Importe o arquivo criarPDF.js em seu arquivo index.html usando a tag <script>.
Utilização dos Botões:

Após a importação do script, os botões "Printar tela", "Gerar PDF" e "Gerar PDF automático" serão adicionados à sua tela. Clique nesses botões conforme necessário para executar as ações desejadas.
Certifique-se de seguir esses passos corretamente para aproveitar ao máximo a funcionalidade de geração de PDF.
