import imgWebpack from './assets/images/img_webpack.png'

function createImgElement() {
  const imgElement = document.createElement('img')
  imgElement.src = imgWebpack
  imgElement.alt = 'webpack từ A đến Á cùng kentrung'
  return imgElement
}

document.getElementById('root').appendChild(createImgElement())
