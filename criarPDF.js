$(document).ready(function () {
    var link = $("link[href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css']");

    // Remover o link do DOM
    link.remove();
    // Criar os botões usando jQuery
    var button1 = $("<button>").attr("id", "create_pdf").text("Printar da tela");
    var button2 = $("<button style='margin: auto 10px'>").attr("id", "salvar").text("Generate PDF");
    var button3 = $("<button >").attr("id", "create_pdf_altomatico").text("Generate PDF automático");

    // Inserir os botões no início do body
    $("body").prepend(button1, button2, button3);

    var altura = 0;
    var fim = false;
    var naoFazer = false;

    // var form = element
    var form = $('main');

    var doc = new jsPDF({
        unit: 'px',
        format: 'a4',
        // orientation: 'p',
    });

    $('#create_pdf').on('click', function () {
        $('.nav-telas-proxima').hide();
        $('.nav-telas-anterior').hide();
        fim = true;
        naoFazer = false;
        createPDF();
    });

    $('#create_pdf_altomatico').on('click', function () {
        doc = new jsPDF({
            unit: 'px',
            format: 'a4',
            // orientation: 'p',
        });
        $('.nav-telas-proxima').hide();
        $('.nav-telas-anterior').hide();
        fim = false;
        naoFazer = false;
        automatico();
    });

    $('#salvar').on('click', function () {
        doc.save(`${$('title')[0].innerHTML}.pdf`);
    });

    // function numeroTela() {
    //     var hash = window.location.hash;
    //     hash = hash.replace(/^#/, '');
    //     var formattedHash = hash.replace(/-/g, ' ').replace(/^./, function (match) {
    //         return match.toUpperCase();
    //     });
    //     return (formattedHash);
    // }

    function createPDF() {
        getCanvas().then(function (canvas) {
            console.log(canvas);
            var img = canvas.toDataURL("image/jpeg", 0.5)

            if (altura > 0) {
                doc.addPage();
            }
            doc.text(20, 20, `Tela ${telaAtual - 1}`);
            doc.addImage(img, 'JPEG', 20, 30, 400, 250);
            altura += 250;

            $('.nav-telas-proxima').show();
            $('.nav-telas-anterior').show();

            if (!fim) {
                automatico();
            } else if (fim && naoFazer) {
                doc.save(`${$('title')[0].innerHTML}.pdf`);
            }

        });
    }

    function automatico() {
        if (telaAtual == totalTelas) {
            $('.nav-telas-proxima').hide();
            $('.nav-telas-anterior').hide();
            fim = true;
            naoFazer = true;
            createPDF();

        }
        else if (telaAtual <= totalTelas) {
            $('.nav-telas-proxima').hide();
            $('.nav-telas-anterior').hide();
            createPDF();
            carregarTela(telaAtual + 1);
        } else {
            return; // Esta linha faz a função sair quando telaAtual for igual a totalTelas
        }
    }

    function getCanvas() {
        return domtoimage.toPng(document.querySelector('main'), { quality: 0.5 }).then(function (dataUrl) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    context.fillStyle = '#ffffff'; // Cor branca
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(image, 0, 0);
                    resolve(canvas);
                };
                image.onerror = reject;
                image.src = dataUrl;
            });
        }).catch(function (error) {
            console.error('Ocorreu um erro:', error);
            return html2canvas(form, {
                imageTimeout: 2000,
                removeContainer: true
            });
        });
    }
});
