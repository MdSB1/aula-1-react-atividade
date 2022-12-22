import { Subtitle } from "./Subtitle"
import {Text} from "./Text"
import {Image} from "./Image"

export function Cards() {
  return (
    <div>
      <div>
        <Subtitle texto="EU" />
        <Text
          content="Eu sou a sombra da voz da matriarca da Roma Negra
Você não me pega, você nem chega a me ver.
Meu som te cega, careta, quem é você?
Que não sentiu o suingue de Henri Salvador
Que não seguiu o Olodum balançando o Pelô
E que não riu com a risada de Andy Warhol
Que não, que não, e nem disse quee não"
        />
        <Image estilo="imagem" link="https://www.ancient-origins.net/sites/default/files/field/image/The-Oracle-Pythia-High-Priestess.jpg"/>
      </div>

       
      <div>
        <Subtitle texto="EU" />
        <Text
          content="Eu sou o cheiro dos livros desesperados, sou Gitá gogoya
          Seu olho me olha, mas não me pode alcançar
          Não tenho escolha, careta, vou descartar
          Quem não rezou a novena de Dona Canô
          Quem não seguiu o mendigo Joãozinho Beija-Flor
          Quem não amou a elegância sutil de Bobô
          Quem não é recôncavo e nem pode ser reconvexo"
        />
        <Image estilo="imagem" link="https://artrianon.files.wordpress.com/2017/03/judith_decapitando_holofernes.jpg?w=466&h=577"/>
      </div>

      <div>
        <Subtitle texto="EU" />
        <Text
          content="Eu sou o preto norte-americano forte
          Com um brinco de ouro na orelha
          Eu sou a flor da primeira música a mais velha
          Mais nova espada e seu corte"
        />
        <Image estilo="imagem" link="https://artrianon.files.wordpress.com/2017/03/491px-gentileschi_judith1.jpg?w=466&h=569"/>
      </div>
    </div>
  )
}
