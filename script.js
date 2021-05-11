function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano) {
    res.innerHTML = 'Digite uma data válida!'
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'homem'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'bebe_homem.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem_homem.jgp')
      } else if (idade < 50) {
        img.setAttribute('src', 'homem_adulto.jpg')
      } else {
        img.setAttribute('src', 'idoso.jpg')
      }

      // --- fim idade homem --- \\

    } else if (fsex[1].checked) {
      genero = 'mulher'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'bebe_mulher.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem_mulher.jgp')
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher_adulta.jpg')
      } else {
        img.setAttribute('src', 'idosa.jpg')
      }
      }

    } // --- fim idade mulher --- \\
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }

