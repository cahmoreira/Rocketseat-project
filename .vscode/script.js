function toggleMode() 
  {
    const html = document.documentElement
    
      if(html.classList.contains('light')) 
        {
          html.classList.remove('light')
        }
      else 
        {
          html.classList.add('light')
        }

      /*  SIMPLIFICAÇÃO DA FUNÇÃO ATRAVÉS DO COMANDO "TOOGLE"
          html.classList.toggle('light') */

      // PEGANDO A TAG <IMG>
      const img = document.querySelector("#profile img")

      // SUBSTITUIÇÃO DA TAG <IMG>
      if(html.classList.contains('light')) 
        {
          img.setAttribute('src', './assets/avatar-light.png')
          img.setAttribute('alt', 'Foto de Camila Moreira sorrindo em um fundo gradiente de cores quentes (amarelo, laranja, rosa)')
        }
      else 
        {
          img.setAttribute('src', './assets/avatar.png')
          img.setAttribute('alt', 'Foto de Camila Moreira sorrindo em um fundo gradiente de cores frias (roxo, azul, azul claro)')
        }
  }