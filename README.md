# react-basic-components

Componentes básicos feitos em React.js para uso nos projetos da Softcenter!

[![NPM](https://img.shields.io/npm/v/@softcenter/react-basic-components)](https://www.npmjs.com/package/@softcenter/react-basic-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação

```bash
# via npm
npm install @softcenter/react-basic-components

# via yarn
yarn add @softcenter/react-basic-components
```

## Exemplo de uso

```jsx
import React from 'react'

import { Button } from '@softcenter/react-basic-components'

export const Example = () => {
  const sayHiOnClick = () => {
    alert('hi!')
  }

  return <Button onClick={sayHiOnClick}>Confirmar</Button>
}
```

## Biblioteca de Componentes

**Nota:** todos os componentes, aqui listados, podem receber **normalmente** as props nativas de elementos HTML. Exemplo: um botão pode receber a prop _`<Button disabled={true} />`_, assim como input pode receber a prop _`<Input onChange={fn} />`_.

Os componentes tem largura e altura 100%, sendo necessario ajustar a div que a contem.

Componentes fornecidos pela biblioteca:

### Button

Um botão simples, no tema azul. Características:

- Utiliza os seletores css `:hover` e `:active` para estilização;
- O estado `disabled` aplica um tema **cinza** padrão no botão.

Exemplo:

```jsx
const Example = () => {
  return <Button>Enviar</Button>
}
```

Propriedades:

- **`String fontSize`**

  Altera o tamanho da fonte do botão.

---

### Checkbox

Checkbox padrão, customizável. Características:

- O estado `enabled` aplica um tema **azul** sobre a checkbox.

Exemplo:

```jsx
const Example = () => {
  return <Checkbox enabled round small />
}
```

Propriedades:

- **`Boolean enabled`**

  Torna a checkbox ativa.

- **`Boolean round`**

  Arredonda os cantos da checkbox.

- **`Boolean small`**

  Diminui o tamanho da checkbox.

---

### SecondaryButton

Variação do componente Button. Botão estilizado, com plano de fundo transparente e borda e texto evidente em preto.

Exemplo:

```jsx
const Example = () => {
  return <SecondaryButton>Enviar</SecondaryButton>
}
```

---

### Input

Campo de entrada cinza com funções a mais. Características:

- Sinalização e exibição de mensagem de erro;
- Modo senha;
- Ícones;

Exemplo:

```jsx
const Example = () => {
  return <Input icon={<SearchIcon />} />
}
```

Propriedades:

- **`Boolean error`**

  Sinalização de erro. Basta utilizar a prop `Boolean error`.

- **`String errorMsg`**

  Exibição de mensagem de erro através da prop `String errorMsg`. A mensagem de erro **somente será exibida** quando a prop `Boolean error` for verdadeira.

- **`JSX icon`**

  Ícone no campo de entrada através da prop `<JSX> icon`.

- **`Boolean camelCase`**

  Quando essa prop for verdadeira, vai ser aplicado o Camel Case no texto do input comforme for digitado.

* **`Boolean shouldStroke`**

  Quando essa prop for verdadeira, o ícone recebido na prop icon terá a sua cor aplicada aplicada na propriedade css `stroke` ao invés da propriedade `fill`.

  Funciona para ícones que não são bem exibidos ao serem passados para o campo de entrada.

* **`String type="password"`**

  Modo senha. Ao passar o tipo senha para o input `type="password"`, o campo de entrada exibe um ícone clicável para **mostrar/esconder** a senha.

* **`Ref containerRef`**
  Referência à `<div>` que contem o elemento `<input>`. Vide estrutura do componente.

---

### LabeledInput

Campo de entrada com rótulo.

Exemplo:

```jsx
const Example = () => {
  return <LabeledInput title="Nome do usuário" ref={userNameRef}>
}
```

Propriedades:

- **`String title`**

  Título do campo de entrada.

- **`String fontSize`**

  Altera o tamanho da fonte do campo de entrada.

---

### InputComboBox

Campo de entrada com rótulo, que possui uma lista com filtragem de items, de acordo com o texto digitado no input.

Exemplo:

```jsx
const Example = () => {
  return
    <InputComboBox
      title="Países"
      ref={userNameRef}
      itemsList={["Brasil", "Japão"]}
      itemOnClick={(textValue) => console.log(textValue)}
      listMaxHeight="250px"
    >
}
```

Propriedades:

- **`Array itemsList`**

  Array com os items que serão listados.

- **`Function itemOnClick`**

  Recebe uma função que será executada ao clicar em um item da lista, e recebe como parâmetro o texto do item.

- **`String listMaxHeight`**

  Define a altura máxima que a lista de itens irá ocupar antes de gerar o scroll vertical, caso a propriedade não seja passada o valor padrão é de 200px.

---

### Modal

Um modal simples, sem animação, que exibe conteúdo ao ser declarado. Características:

- Botão de fechar opcional.
- Botão de fechar customizável.
- Plano de fundo (backdrop) cinza.

Exemplo:

```jsx
const Example = () => {
  return (
    <Modal CloseButton={NewCloseIcon} onClose={fn}>
      Conteúdo customizável do modal.
    </Modal>
  )
}
```

Propriedades:

- **`Function onClose`**

  Recebe uma função que é executada quando o usuário clica no botão fechar. Caso nenhuma função seja passada, o **botão de fechar não será exibido**.

- **`JSX CloseButton`**

  Recebe um componente que será renderizado no lugar do botão fechar.

### SearchList

Uma lista de pesquisa.

Exemplo:

```jsx
const Example = () => {
  const [showList, setShowList] = useState(false);
  const listContainer = useRef();

  return (
    <div ref={listContainer}>
      <SearchList onSelectItem={(item) => alert(`Item selecionado! ${item}`)}
        setShow={setShowList}
        data={[{value: 123, data: 'um dois tres'}]},
        containerRef={listContainer}>
      </SearchList>
    </div>
  )
}
```

Propriedades:

- **`Function onResetValue`**

  Função que é disparada quando o valor selecionado é resetado.

- **`Function onSelectItem`**

  Função que é disparada quando um item da lista é selecionado.

- **`Function setShow`**

  Função responsável por alterar o estado de exibição da lista.

- **`Ref containerRef`**

  Referência do elemento que contém a lista. Esse elemento deve conter a propriedade css `position:absolute`.

- **`Array data`**

  Array de dados que representam as opções da lista. Cada array é um objeto do seguinte formato: `{data: '', value: ''}`.
  Onde `value` é o nome do item na lista e `data` contém dados específicos àquele valor.

- **`Boolean loading`**

  Exibe um spinner no final da lista.

---

### StatefulSearchList

Uma lista de pesquisa com controle de estado interno.

Exemplo:

```jsx
const Example = () => {

  return (
      <StatefulSearchList onSelectItem={(item) => alert(`Item selecionado! ${item}`)}
        data={[{value: 123, data: 'um dois tres'}]},
        Component={Input}>
      </StatefulSearchList>
  )
}
```

Propriedades:

Todas as propriedades passadas para o StatefulSearchList, além das listadas abaixo, irão ser redirecionadas para o componente passado em Component.

- **`Component`**

  Componente cujo conterá a lista.

- **`Function onResetValue`**

  Função que é disparada quando o valor selecionado é resetado.

- **`Function onSelectItem`**

  Função que é disparada quando um item da lista é selecionado.

- **`Array data`**

  Array de dados que representam as opções da lista. Cada array é um objeto do seguinte formato: `{data: '', value: ''}`.
  Onde `value` é o nome do item na lista e `data` contém dados específicos àquele valor.

- **`Boolean autoFilter`**
  Opção de filtragem automático. Quando `true`, o próprio componente irá realizar a filtragem dos dados fornecidos na propriedade `data`.

- **`Function onChange`**
  Função que é passada para o componente da propriedade `Component`.

- **`Function onThresholdReached`**
  Função que é disparada quando o usuário scrolla até o limite máximo da lista.

- **`Boolean itemIsSelected`**
  Boolean que deve ser passada como `true` quando o componente é inicializado com um valor selecionado.

---

### ToggleSwitch

ToggleSwitch (Alternador). Características:

Exemplo:

```jsx
const Example = () => {
  return <ToggleSwitch enabled />
}
```

Propriedades:

- **`Boolean enabled`**

  Torna a checkbox ativa.

---

## Ambiente de Desenvolvimento

Todos os componentes da biblioteca estão localizados na pasta `./src`. Novos componentes devem ser adicionados nesta mesma pasta.

### Testando os componentes em tempo real

Para **testar os componentes enquanto estiver desenvolvendo**, utilize do seguinte comando:

```bash
# npm
npm start-example

# yarn
yarn start-example
```

Ao executar este comando, uma página será aberta em seu navegador contendo a aplicação React localizada na pasta `./example/src`. Ela é responsável por **exibir os componentes no ambiente de desenvolvimento**.

O arquivo `./example/src/App.js` **é a porta de entrada da aplicação** e, portanto, contém os componentes que são exibidos no link aberto por seu navegador. **Edite este mesmo arquivo** caso você queira testar o comportamento de um dos componentes da biblioteca.

> **Nota:** O comando acima deve ser executado para toda vez que você realizar uma alteração nos componentes e queira visualizá-la. O comando realiza a recompilação do projeto e inicializa um novo servidor.

## Versionando e Publicando a Biblioteca

Para publicar uma versão nova da biblioteca no **npm**, é necessário seguir os próximos passos:

1. Executar o comando:

```bash
## via npm
npm build

## via yarn
yarn build
```

2. Alterar a propriedade **`version`** no arquivo `./package.json`, respeitando o **versionamento semântico**.

3. Logar no npm, utilizando o comando `npm login`. _Caso já esteja logado, pule para a próxima etapa._

4. Publicar a biblioteca com o comando `npm publish --access public`

Após essas etapas, não se esqueça de realizar o commit e o push para o repositório remoto.

## Licença

MIT © [softcenter](https://github.com/softcenter)
