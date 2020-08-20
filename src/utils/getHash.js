// Con el slice decimos que queremos eliminar un elemento ya que con hash obptenemos /#/1 (eliminamos el hashtag)
// Con toLocalLowerCase hacemos que aunque el usuario use mayusculas lo devuelva en minusculas
// convertimos la cadena de texto en un arreglo, eliminando los '/'
// Tomamos el elemento en la posición 1, ya que hasta ahra el arreglo se ve asi ['','1','']
// El || se usa como or, si no se encuentra resultados pasamos el '/'
const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash